// Vercel Serverless Function for Prompt Submissions
// This handles submissions and posts to Slack with approve/reject buttons

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, title, category, prompt, notes } = req.body

    // Validate required fields
    if (!name || !email || !title || !category || !prompt) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Get Slack webhook URL from environment variable
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

    if (!SLACK_WEBHOOK_URL) {
      console.error('SLACK_WEBHOOK_URL not configured')
      return res.status(500).json({ error: 'Slack webhook not configured' })
    }

    // Create unique submission ID for tracking
    const submissionId = `SUB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Format category name
    const categoryNames = {
      'image-prompt': 'Image Prompt',
      'landing-page-prompt': 'Landing Page Prompt',
      'skill': 'Claude Skill'
    }

    // Build Slack message with Block Kit
    const slackPayload = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Prompt Submission",
            emoji: true
          }
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submission ID: \`${submissionId}\``
            }
          ]
        },
        {
          type: "divider"
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Submitter:*\n${name}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Title:*\n${title}`
            },
            {
              type: "mrkdwn",
              text: `*Category:*\n${categoryNames[category] || category}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Prompt:*\n\`\`\`${prompt.substring(0, 2800)}${prompt.length > 2800 ? '...(truncated)' : ''}\`\`\``
          }
        },
        ...(notes ? [{
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Additional Notes:*\n${notes}`
          }
        }] : []),
        {
          type: "divider"
        },
        {
          type: "actions",
          block_id: `approve_block_${submissionId}`,
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Approve",
                emoji: true
              },
              style: "primary",
              action_id: "approve_submission",
              value: JSON.stringify({
                action: 'approve',
                submissionId,
                name,
                email,
                title,
                category,
                prompt,
                notes
              })
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Reject",
                emoji: true
              },
              style: "danger",
              action_id: "reject_submission",
              value: JSON.stringify({
                action: 'reject',
                submissionId,
                name,
                email
              })
            }
          ]
        }
      ]
    }

    // Send to Slack
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackPayload),
    })

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text()
      console.error('Slack API error:', errorText)
      return res.status(500).json({ error: 'Failed to send to Slack' })
    }

    return res.status(200).json({
      success: true,
      submissionId,
      message: 'Prompt submitted successfully! We\'ll review it shortly.'
    })

  } catch (error) {
    console.error('Submission error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
