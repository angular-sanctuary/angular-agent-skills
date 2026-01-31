export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  angular: 'https://github.com/angular/angular',
  angularMaterial: 'https://github.com/angular/components',
  angularfire: 'https://github.com/angular/angularfire',
}

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
}

/**
 * Hand-written skills with Gerome Grignon's preferences/tastes/recommendations
 */
export const manual = []
