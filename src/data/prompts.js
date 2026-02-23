// Unicorn Marketers AI Hub - Prompt Database (Index)
// Imports from split data modules for maintainability

import { adPromptsPartOne } from './adPrompts1'
import { adPromptsPartTwo } from './adPrompts2'
import {
  claudeSkillsData,
  skillCategoriesData,
  frontEndPrompts as _frontEndPrompts,
  selfImprovementPrompts as _selfImprovementPrompts,
  frontEndSubcategories as _frontEndSubcategories,
} from './skillsAndExtras'

// ============================================================
// Categories & Config
// ============================================================

export const categories = [
  { id: 'ad-ideas', name: 'Ad Ideas', icon: 'Image', color: 'from-purple-500 to-pink-500' },
  { id: 'front-end-ideas', name: 'Front-End Ideas', icon: 'Layout', color: 'from-blue-500 to-cyan-500' },
  { id: 'claude-skills', name: 'Claude Skills', icon: 'Zap', color: 'from-orange-500 to-amber-500' },
  { id: 'self-improvement', name: 'Self-Improvement', icon: 'Rocket', color: 'from-green-500 to-emerald-500' },
];

export const submissionCategories = [
  { id: 'ad-idea', name: 'Ad Idea Prompt' },
  { id: 'front-end-idea', name: 'Front-End Prompt' },
  { id: 'skill', name: 'Claude Skill' },
  { id: 'self-improvement', name: 'Self-Improvement Prompt' },
];

export const difficultyLevels = ['Basic', 'Advanced', 'Expert'];

// ============================================================
// Ad Ideas (50 styles)
// ============================================================

export const adPrompts = [...adPromptsPartOne, ...adPromptsPartTwo];

export const adPromptSubcategories = [
  { id: 'toy-collectible', name: 'Toy & Collectible', description: 'LEGO, Funko Pop, action figures and more' },
  { id: 'hand-drawn', name: 'Hand-Drawn & Artistic', description: 'Crayon, chalk, watercolor, illustrated styles' },
  { id: 'creative-outside-box', name: 'Creative / Outside the Box', description: 'Unique visual concepts that break the mold' },
  { id: 'retro-decades', name: 'Retro & Decades', description: '1950s through 1990s aesthetics' },
  { id: 'ugc-authentic', name: 'UGC & Authentic', description: 'User-generated and raw content styles' },
  { id: 'studio-product', name: 'Studio & Product', description: 'Professional photography and 3D renders' },
  { id: 'social-proof', name: 'Social Proof & Trust', description: 'Reviews, transformations, and trust-building' },
  { id: 'social-native', name: 'Social Native', description: 'Platform-native formats that blend in' },
  { id: 'data-driven', name: 'Data-Driven', description: 'Infographics, comparisons, and data visuals' },
  { id: 'conversion-focused', name: 'Conversion-Focused', description: 'Offer-forward, urgency, and direct response' },
  { id: 'lifestyle', name: 'Lifestyle', description: 'Aspirational scenes and real-life contexts' },
  { id: 'typography-minimal', name: 'Typography & Minimal', description: 'Text-focused and clean designs' },
];

// ============================================================
// Front-End Ideas (10 prompts)
// ============================================================

export const frontEndPrompts = _frontEndPrompts;
export const frontEndSubcategories = _frontEndSubcategories;

// ============================================================
// Claude Skills (15 skills)
// ============================================================

export const claudeSkills = claudeSkillsData;
export const skillCategories = skillCategoriesData;

// ============================================================
// Self-Improvement Prompts (5 prompts)
// ============================================================

export const selfImprovementPrompts = _selfImprovementPrompts;

// ============================================================
// Aggregate exports
// ============================================================

// All searchable prompts (ad ideas + front-end ideas)
export const allPrompts = [...adPrompts, ...frontEndPrompts];
