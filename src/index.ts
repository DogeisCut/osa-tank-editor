
type PropertyMetaHandler =
	| {
		type: 'textBox' | 'multiline'
		maxLength?: number
		default?: string
	}
	| {
		type: 'number'
		step?: number
		min?: number
		max?: number
		allowZero?: boolean
		default?: number
	}
	| {
		type: 'toggle'
		default?: boolean
	}
	| {
		type: 'color'
		allowOpacity?: boolean
		default?: OSAColor
	}
	| {
		type: 'select'
		options: {
			name: string,
			value?: string,
			tooltip?: string
		}[] | 'entityTypes'
		default?: string
	}
	| {
		type: 'motionTypeSelector'
	}
	| {
		type: 'facingTypeSelector'
	}
	| {
		type: 'shootSettingsEditor'
	}
	| {
		type: 'gunEditor'
	}
	| {
		type: 'alphaEditor'
	}
	| {
		type: 'gunPropertiesEditor'
	}
	| {
		type: 'gunPositionEditor'
	}
	| {
		type: 'entityChoser'
		default?: string
	}
	| {
		type: 'bodyEditor'	
	}

type PropertyMeta = {
	handler?: PropertyMetaHandler
	label?: string
	tooltip?: string
} | undefined //undefined will be hidden.

class EntityBody {
	ACCELERATION?: number
	SPEED?: number
	HEALTH?: number
	RESIST?: number
	SHIELD?: number
	REGEN?: number
	DAMAGE?: number
	PENETRATION?: number
	RANGE?: number
	FOV?: number
	SHOCK_ABSORB?: number
	RECOIL_MULTIPLIER?: number
	DENSITY?: number
	STEALTH?: number
	PUSHABILITY?: number
	KNOCKBACK?: number
	HETERO?: number
}


type MotionType =
	| "glide" | [
		"glide",
		{}?
	]
	| 'motor' | [
		'motor',
		{}?
	]
	| 'swarm' | [
		'swarm',
		{ turnVelocity?: number }?
	]
	| 'chase' | [
		'chase',
		{ keepSpeed?: boolean }?
	]
	| 'drift' | [
		'drift',
		{}?
	]
	| 'bound' |[
		'bound',
		{}?
	]
	| 'withMaster' | [
		'withMaster',
		{}?
	] | "" | [
		"",
		{}?
	]

type FacingTypes =
	| "spin" | "spinWhenIdle" | [
		"spin" | "spinWhenIdle",
		{ speed?: number }?
	]
	| "turnWithSpeed" | [
		"turnWithSpeed",
		{}?
	]
	| "withMotion" | [
		"withMotion",
		{}?
	]
	| "smoothWithMotion" | "looseWithMotion" | [
		"smoothWithMotion" | "looseWithMotion",
		{}?
	]
	| "withTarget" | "toTarget" | [
		"withTarget" | "toTarget",
		{}?
	]
	| "locksFacing" | [
		"locksFacing",
		{}?
	]
	| "looseWithTarget" | "looseToTarget" | "smoothToTarget" | [
		"looseWithTarget" | "looseToTarget" | "smoothToTarget",
		{}?
	]
	| "noFacing" | [
		"noFacing",
		{ angle?: number }?
	]
	| "bound" | [
		"bound",
		{}?
	]
	| "spinOnFire" | [
		"spinOnFire",
		{}?
	]
	| "manual" | [
		"manual",
		{ angle?: number }?
	] | "" | [
		"",
		{}?
	]


// {
//     SPIN = 'spin',
//     SPIN_WHEN_IDLE = 'spinWhenIdle',
//     TURN_WITH_SPEED = 'turnWithSpeed',
//     WITH_MOTION = "withMotion",
//     SMOOTH_WITH_MOTION = 'smoothWithMotion',
//     LOOSE_WITH_MOTION = 'looseWithMotion',
//     WITH_TARGET = 'withTarget',
//     TO_TARGET = 'toTarget',
//     LOCKS_FACING = 'locksFacing',
//     LOOSE_WITH_TARGET = 'looseWithTarget',
//     LOOSE_TO_TARGET = 'looseToTarget',
//     SMOOTH_TO_TARGET = 'smoothToTarget',
//     NO_FACING = 'noFacing',
//     BOUND = 'bound',
//     SPIN_ON_FIRE = 'spinOnFire',
//     MANUAL = 'manual'
// }

// Concerned this might not even be the full list of types used in the template. The type system SUCKS!
type EntityType =
	| "tank"
	| "bullet"
	| "trap"
	| "block"
	| "drone"
	| "minion"
	| "swarm"
	| "satellite"
	| "aura"
	| "food"
	| "crasher"
	| "dominator"
	| "miniboss"
	| "wall"
	| "portal"
	| "undertowEffect"
	| string

// "WAAA WAAA INFERANCED ENUM!!!" i DONT CARE because this is how the wall types are in the actual game!! They map to numbers...
enum WallTypes {
	Wall,
	Deadly,
	Healing,
	Bouncing,
	Enlarger,
	Shrinker,
	Zoom,
	UpArrow,
	DownArrow,
	LeftArrow,
	RightArrow
}
type StatNames = {
	BODY_DAMAGE?: string
	MAX_HEALTH?: string
	BULLET_SPEED?: string
	BULLET_HEALTH?: string
	BULLET_PEN?: string
	BULLET_DAMAGE?: string
	RELOAD?: string
	MOVE_SPEED?: string
	SHIELD_REGEN?: string
	SHIELD_CAP?: string
}

type HexCode = `#${string}`
type OSAColors = 
	| -1
	| 0 | "teal" | "legendary"
	| 1 | "shiny" | "lightGreen"
	| 2 | "triangle" | "orange"
	| 3 | "neutral" | "yellow"
	| 4 | "hexagon" | "aqua"
	| 5 | "crasher" | "pink"
	| 6 | "egg" | "circle" | "veryLightGrey" | "veryLightGray"
	| 7 | "wall" | "lightGrey" | "lightGray"
	| 8 | "pureWhite"
	| 9 | "black"
	| 10 | "blue"
	| 11 | "green"
	| 12 | "red"
	| 13 | "square" | "gold"
	| 14 | "pentagon" | "purple"
	| 15 | "magenta"
	| 16 | "grey" | "gray"
	| 17 | "darkGrey" | "darkGray"
	| 18 | "white"
	| 19 | "pureBlack"
	| 20 | "animatedBlueRed" | "flashBlueRed"
	| 21 | "animatedBlueGrey" | "animatedBlueGray" | "flashBlueGrey" | "flashBlueGray"
	| 22 | "animatedGreyBlue" | "animatedGrayBlue" | "flashGreyBlue" | "flashGrayBlue"
	| 23 | "animatedRedGrey" | "animatedRedGray" | "flashRedGrey" | "flashRedGray"
	| 24 | "animatedGreyRed" | "animatedGrayRed" | "flashGreyRed" | "flashGrayRed"
	| 25 | "mustard"
	| 26 | "tangerine"
	| 27 | "brown"
	| 28 | "cyan" | "turquoise"
	| 29 | "lesbian" | "animatedLesbian"
	| 36 | "gay" | "rainbow"
	| 37 | "trans"
	| 38 | "bi" | "animatedBi"
	| 30 | "powerGem" | "powerStone"
	| 31 | "spaceGem" | "spaceStone"
	| 32 | "realityGem" | "realityStone"
	| 33 | "soulGem" | "soulStone"
	| 34 | "timeGem" | "timeStone"
	| 35 | "mindGem" | "mindStone"
	| 39 | "pumpkinStem"
	| 40 | "pumpkinBody"
	| 41 | "tree"
	| 42 | "animatedMagenta"
	| "nest" | "lavender"
	| "border"
	| ""
type OSAColor = OSAColors | HexCode |
{
	BASE?: OSAColors | HexCode
	BRIGHTNESS_SHIFT?: number
	SATURATION_SHIFT?: number
}
type Invisible = [number, number]
type Alpha = number | [number, number]
type Necro = boolean | number[] | string[]
type EntityClassReference = string | string[]
type EntityOnEvent = {
	event: "fire" | "altFire"
	handler: { args: "body, gun, globalMasterStore", source: string } // needs to stringify as a function!
	once?: boolean
} | {
	event: "tick"
	handler: { args: "body", source: string }
	once?: boolean
} | {
	event: "define"
	handler: { args: "body", source: string }
	once?: boolean
} | {
	event: "death"
	handler: { args: "body, killers, killTools", source: string }
	once?: boolean
} | {
	event: "collide"
	handler: { args: "instance, other", source: string }
	once?: boolean
} | {
	event: "damage"
	handler: { args: "body, damageInflictor, damageTool", source: string }
	once?: boolean
}
/*
event: "${event}",
handler: ({ ${args} }) => {
	${source}
},
once: ${once}
*/


class EntityDefinition {
	PARENT?: EntityClassReference
	LABEL?: string
	NAME?: string
	DISPLAY_NAME?: string
	TYPE?: EntityType
	WALL_TYPE?: WallTypes
	SHAPE?: number | string
	SHAPE_NUM?: number
	LAYER?: number
	ANGLE?: number
	COLOR?: OSAColor
	UPGRADE_COLOR?: number
	GLOW?: {
		RADIUS?: number
		COLOR?: number
		ALPHA?: number
		RECURSION?: number
	}
	CONTROLLERS?: Array<string | [string, any]>
	IGNORED_BY_AI?: boolean
	MOTION_TYPE?: MotionType
	FACING_TYPE?: FacingTypes | [FacingTypes, any]
	NO_COLLISIONS?: boolean
	MIRROR_MASTER_ANGLE?: boolean
	DRAW_HEALTH?: boolean
	DRAW_SELF?: boolean
	DAMAGE_EFFECTS?: boolean
	RATIO_EFFECTS?: boolean
	MOTION_EFFECTS?: boolean
	ACCEPTS_SCORE?: boolean
	GIVE_KILL_MESSAGE?: boolean
	CAN_GO_OUTSIDE_ROOM?: boolean
	HITS_OWN_TYPE?: boolean
	DIE_AT_LOW_SPEED?: boolean
	DIE_AT_RANGE?: boolean
	INDEPENDENT?: boolean
	PERSISTS_AFTER_DEATH?: boolean
	CLEAR_ON_MASTER_UPGRADE?: boolean
	HEALTH_WITH_LEVEL?: boolean
	OBSTACLE?: boolean
	NECRO?: Necro
	HAS_NO_RECOIL?: boolean
	CRAVES_ATTENTION?: boolean
	KILL_MESSAGE?: string
	AUTOSPIN_MULTIPLIER?: number
	BROADCAST_MESSAGE?: string
	DEFEAT_MESSAGE?: boolean
	HEALER?: boolean
	DAMAGE_CLASS?: string
	BUFF_VS_FOOD?: boolean
	CAN_BE_ON_LEADERBOARD?: boolean
	RENDER_ON_LEADERBOARD?: boolean
	INTANGIBLE?: boolean
	IS_SMASHER?: boolean
	STAT_NAMES?: StatNames
	AI?: {
		NO_LEAD?: boolean,
		STRAFE?: boolean,
		IGNORE_SHAPES?: boolean
		CHASE?: boolean
		BLIND?: boolean
		skynet?: boolean // why the hell is this lowercase? 
	}
	INVISIBLE?: Invisible
	ALPHA?: Alpha
	DANGER?: number
	SHOOT_ON_DEATH?: boolean
	BORDERLESS?: boolean
	DRAW_FILL?: boolean
	IS_IMMUNE_TO_TILES?: boolean
	TEAM?: number
	VARIES_IN_SIZE?: boolean
	RESET_UPGRADES?: boolean
	RESET_STATS?: boolean
	RESET_UPGRADE_MENU?: boolean
	ARENA_CLOSER?: boolean
	BRANCH_LABEL?: string
	BATCH_UPGRADES?: boolean
	SIZE?: number
	NO_SIZE_ANIMATION?: boolean
	LEVEL?: number
	LEVEL_CAP?: number
	SKILL_CAP?: number[]
	SKILL?: number[]
	VALUE?: number
	ALT_ABILITIES?: any
	GUNS?: Gun[]
	CONNECT_CHILDREN_ON_CAMERA?: boolean
	GUN_STAT_SCALE?: ShootSettings
	MAX_CHILDREN?: number
	MAX_BULLETS?: number
	LEVEL_SKILL_POINT_FUNCTION?: Function
	RECALC_SKILL?: boolean
	EXTRA_SKILL?: number
	BODY?: EntityBody
	SPAWN_ON_DEATH?: any
	RESET_EVENTS?: boolean
	REROOT_UPGRADE_TREE?: EntityClassReference
	ON_MINIMAP?: boolean
	TURRETS?: Array<any>
	ON?: EntityOnEvent[]
	SHAKE?: Array<{
		CAMERA_SHAKE?: {
			DURATION: number
			AMOUNT: number
			KEEP_SHAKE?: boolean
		}
		GUI_SHAKE?: {
			DURATION: number
			AMOUNT: number
			KEEP_SHAKE?: boolean
		}
		APPLY_ON_UPGRADE?: boolean
		APPLY_ON_SHOOT?: boolean
		PUSH?: boolean
	}>
	UPGRADES_TIER_1: EntityClassReference
	UPGRADES_TIER_2: EntityClassReference
	UPGRADEs_TIER_3: EntityClassReference
	UPGRADEs_TIER_4: EntityClassReference
	UPGRADEs_TIER_5: EntityClassReference
	UPGRADEs_TIER_6: EntityClassReference
	UPGRADEs_TIER_7: EntityClassReference
	UPGRADEs_TIER_8: EntityClassReference
	UPGRADEs_TIER_9: EntityClassReference
}
const EntityDefinitionMeta: Record<keyof EntityDefinition, PropertyMeta> = {
	PARENT: {
		handler: {
			type: 'entityChoser',
			default: 'genericTank'
		},
		label: 'Parent',
		tooltip: "This defines what class this entity will be based on. Entity will inherit all properties of the parent class unless overwritten."
	},
	LABEL: {
		handler: {
			type: 'textBox',
			default: 'Unnamed Tank'
		},
		label: "Label",
		tooltip: "This is basically the name of the class. Will show up in upgrades, when killed by or killing, on the leaderboard, as well as other various locations."
	},
	NAME: {
		handler: {
			type: 'textBox',
			default: 'Player Name'
		},
		label: "Name",
		tooltip: "Overwrites the name of the player/above the entity with this."
	},
	DISPLAY_NAME: {
		handler: {
			type: 'toggle',
			default: true
		},
		label: "Display Name?",
		tooltip: "Whether or not this entity will show the name above itself."
	},
	TYPE: undefined,
	WALL_TYPE: undefined,
	SHAPE: undefined,
	SHAPE_NUM: undefined,
	LAYER: undefined,
	ANGLE: undefined,
	COLOR: undefined,
	UPGRADE_COLOR: undefined,
	GLOW: undefined,
	CONTROLLERS: undefined,
	IGNORED_BY_AI: undefined,
	MOTION_TYPE: undefined,
	FACING_TYPE: undefined,
	NO_COLLISIONS: undefined,
	MIRROR_MASTER_ANGLE: undefined,
	DRAW_HEALTH: undefined,
	DRAW_SELF: undefined,
	DAMAGE_EFFECTS: undefined,
	RATIO_EFFECTS: undefined,
	MOTION_EFFECTS: undefined,
	ACCEPTS_SCORE: undefined,
	GIVE_KILL_MESSAGE: undefined,
	CAN_GO_OUTSIDE_ROOM: undefined,
	HITS_OWN_TYPE: undefined,
	DIE_AT_LOW_SPEED: undefined,
	DIE_AT_RANGE: undefined,
	INDEPENDENT: undefined,
	PERSISTS_AFTER_DEATH: undefined,
	CLEAR_ON_MASTER_UPGRADE: undefined,
	HEALTH_WITH_LEVEL: undefined,
	OBSTACLE: undefined,
	NECRO: undefined,
	HAS_NO_RECOIL: undefined,
	CRAVES_ATTENTION: undefined,
	KILL_MESSAGE: undefined,
	AUTOSPIN_MULTIPLIER: undefined,
	BROADCAST_MESSAGE: undefined,
	DEFEAT_MESSAGE: undefined,
	HEALER: undefined,
	DAMAGE_CLASS: undefined,
	BUFF_VS_FOOD: undefined,
	CAN_BE_ON_LEADERBOARD: undefined,
	RENDER_ON_LEADERBOARD: undefined,
	INTANGIBLE: undefined,
	IS_SMASHER: undefined,
	STAT_NAMES: undefined,
	AI: undefined,
	INVISIBLE: undefined,
	ALPHA: undefined,
	DANGER: undefined,
	SHOOT_ON_DEATH: undefined,
	BORDERLESS: undefined,
	DRAW_FILL: undefined,
	IS_IMMUNE_TO_TILES: undefined,
	TEAM: undefined,
	VARIES_IN_SIZE: undefined,
	RESET_UPGRADES: undefined,
	RESET_STATS: undefined,
	RESET_UPGRADE_MENU: undefined,
	ARENA_CLOSER: undefined,
	BRANCH_LABEL: undefined,
	BATCH_UPGRADES: undefined,
	SIZE: undefined,
	NO_SIZE_ANIMATION: undefined,
	LEVEL: undefined,
	LEVEL_CAP: undefined,
	SKILL_CAP: undefined,
	SKILL: undefined,
	VALUE: undefined,
	ALT_ABILITIES: undefined,
	GUNS: {
		label: "Guns",
		handler: {
			type: "gunEditor"
		}
	},
	CONNECT_CHILDREN_ON_CAMERA: undefined,
	GUN_STAT_SCALE: undefined,
	MAX_CHILDREN: undefined,
	MAX_BULLETS: undefined,
	LEVEL_SKILL_POINT_FUNCTION: undefined,
	RECALC_SKILL: undefined,
	EXTRA_SKILL: undefined,
	BODY: undefined,
	SPAWN_ON_DEATH: undefined,
	RESET_EVENTS: undefined,
	REROOT_UPGRADE_TREE: undefined,
	ON_MINIMAP: undefined,
	TURRETS: undefined,
	ON: undefined,
	SHAKE: undefined,
	UPGRADES_TIER_1: undefined,
	UPGRADES_TIER_2: undefined,
	UPGRADEs_TIER_3: undefined,
	UPGRADEs_TIER_4: undefined,
	UPGRADEs_TIER_5: undefined,
	UPGRADEs_TIER_6: undefined,
	UPGRADEs_TIER_7: undefined,
	UPGRADEs_TIER_8: undefined,
	UPGRADEs_TIER_9: undefined
} as const

type GunPosition = {
	LENGTH?: number;
	WIDTH?: number;
	ASPECT?: number;
	X?: number;
	Y?: number;
	ANGLE?: number;
	DELAY?: number;
}
const GunPositionMeta: Record<keyof GunPosition, PropertyMeta> = {
	LENGTH: undefined,
	WIDTH: undefined,
	ASPECT: undefined,
	X: undefined,
	Y: undefined,
	ANGLE: undefined,
	DELAY: undefined
} as const


type ShootSettings = {
    reload?: number;
    recoil?: number;
    shudder?: number;
    size?: number;
    damage?: number;
    pen?: number;
    speed?: number;
    maxSpeed?: number;
    density?: number;
    spray?: number;
    resist?: number;
}
const ShootSettingsMeta: Record<keyof ShootSettings, PropertyMeta> = {
	reload: {
		handler: { type: "number", min: 0 },
		label: "Reload",
		tooltip: "Delay between shots. Lower is faster."
	},
	recoil: {
		handler: { type: "number", min: 0 },
		label: "Recoil",
		tooltip: "How much the tank moves backward when firing."
	},
	shudder: {
		handler: { type: "number", min: 0 },
		label: "Shudder",
		tooltip: "Small random angle applied to shots."
	},
	size: {
		handler: { type: "number", min: 0 },
		label: "Bullet Size",
		tooltip: "The visual and collision size of the projectile."
	},
	damage: {
		handler: { type: "number", min: 0 },
		label: "Damage",
		tooltip: "How much damage the projectile deals."
	},
	pen: {
		handler: { type: "number", min: 0 },
		label: "Penetration",
		tooltip: "How far the projectile can travel through targets."
	},
	speed: {
		handler: { type: "number", min: 0 },
		label: "Speed",
		tooltip: "How fast the projectile travels."
	},
	maxSpeed: {
		handler: { type: "number", min: 0 },
		label: "Max Speed",
		tooltip: "Cap on the projectile's travel speed."
	},
	density: {
		handler: { type: "number", min: 0 },
		label: "Density",
		tooltip: "How heavy the projectile is. Affects collisions."
	},
	spray: {
		handler: { type: "number", min: 0 },
		label: "Spray",
		tooltip: "How inaccurate projectiles are (random direction)."
	},
	resist: {
		handler: { type: "number", min: 0 },
		label: "Resistance",
		tooltip: "Reduces damage taken by this projectile."
	}
} as const

type GunProperties = {
	ON_SHOOT?: string
	AUTOFIRE?: boolean
	ALT_FIRE?: boolean
	FIXED_RELOAD?: boolean
	STAT_CALCULATOR?: string
	WAIT_TO_CYCLE?: boolean
	BULLET_STATS?: string | number[] | "master"
	SHOOT_SETTINGS?: ShootSettings
	MAX_CHILDREN?: number
	MAX_BULLETS?: number
	SYNCS_SKILLS?: boolean
	NEGATIVE_RECOIL?: boolean
	INDEPENDENT_CHILDREN?: boolean
	BORDERLESS?: boolean
	DRAW_FILL?: boolean
	SPAWN_OFFSET?: number
	DESTROY_OLDEST_CHILD?: boolean
	SHOOT_ON_DEATH?: boolean
	COLOR?: number
	NO_LIMITATIONS?: boolean
	ALPHA?: number
	STROKE_WIDTH?: number
	DRAW_ABOVE?: boolean
	STACK_GUN?: boolean
	IDENTIFIER?: string
	TYPE?: string
	LABEL?: string
}
const GunPropertiesMeta: Record<keyof GunProperties, PropertyMeta> = {
	ON_SHOOT: undefined,
	AUTOFIRE: {
		handler: { type: "toggle" },
		label: "Auto Fire",
		tooltip: "Automatically fires without player input."
	},
	ALT_FIRE: {
		handler: { type: "toggle" },
		label: "Alt Fire",
		tooltip: "Fires when using alternate trigger."
	},
	FIXED_RELOAD: {
		handler: { type: "toggle" },
		label: "Fixed Reload",
		tooltip: "Ignores dynamic reload scaling."
	},
	STAT_CALCULATOR: undefined,
	WAIT_TO_CYCLE: {
		handler: { type: "toggle" },
		label: "Wait To Cycle",
		tooltip: "Waits for bullets to finish before cycling."
	},
	BULLET_STATS: undefined,
	SHOOT_SETTINGS: {
		handler: { type: "shootSettingsEditor" },
		label: "Shoot Settings",
		tooltip: "Defines various firing characteristics."
	},
	MAX_CHILDREN: {
		handler: { type: "number", min: 0 },
		label: "Max Children",
		tooltip: "Maximum spawned entities from this gun."
	},
	MAX_BULLETS: {
		handler: { type: "number", min: 0 },
		label: "Max Bullets",
		tooltip: "Limit of active bullets this gun can produce."
	},
	SYNCS_SKILLS: {
		handler: { type: "toggle" },
		label: "Sync Skills",
		tooltip: "Whether this gun's stats sync with player skill levels."
	},
	NEGATIVE_RECOIL: {
		handler: { type: "toggle" },
		label: "Negative Recoil",
		tooltip: "Reverses recoil direction when firing."
	},
	INDEPENDENT_CHILDREN: {
		handler: { type: "toggle" },
		label: "Independent Children",
		tooltip: "Spawned entities behave independently of the master."
	},
	BORDERLESS: {
		handler: { type: "toggle" },
		label: "Borderless",
		tooltip: "Projectiles can leave the map bounds."
	},
	DRAW_FILL: {
		handler: { type: "toggle" },
		label: "Draw Fill",
		tooltip: "Whether to fill projectile visuals."
	},
	SPAWN_OFFSET: {
		handler: { type: "number" },
		label: "Spawn Offset",
		tooltip: "Distance from gun muzzle to spawn projectile."
	},
	DESTROY_OLDEST_CHILD: {
		handler: { type: "toggle" },
		label: "Destroy Oldest Child",
		tooltip: "Deletes oldest children when limit is reached."
	},
	SHOOT_ON_DEATH: {
		handler: { type: "toggle" },
		label: "Shoot On Death",
		tooltip: "Triggers this gun when entity dies."
	},
	COLOR: {
		handler: { type: "color" },
		label: "Projectile Color",
		tooltip: "Visual color of the bullets or entities spawned."
	},
	NO_LIMITATIONS: {
		handler: { type: "toggle" },
		label: "No Limitations",
		tooltip: "Removes various firing limitations."
	},
	ALPHA: {
		handler: { type: "number", min: 0, max: 1 },
		label: "Alpha",
		tooltip: "Transparency of projectiles spawned by this gun."
	},
	STROKE_WIDTH: {
		handler: { type: "number", min: 0 },
		label: "Stroke Width",
		tooltip: "Outline width for drawn bullets."
	},
	DRAW_ABOVE: {
		handler: { type: "toggle" },
		label: "Draw Above",
		tooltip: "Renders bullets above all other layers."
	},
	STACK_GUN: {
		handler: { type: "toggle" },
		label: "Stack Gun",
		tooltip: "Allows multiple bullets to spawn simultaneously."
	},
	IDENTIFIER: {
		handler: { type: "textBox" },
		label: "Identifier",
		tooltip: "A custom ID string for this gun."
	},
	TYPE: {
		handler: { type: "entityChoser", default: "bullet" },
		label: "Bullet Type",
		tooltip: "Which entity this gun spawns (e.g., bullet, drone, etc.)."
	},
	LABEL: {
		handler: { type: "textBox" },
		label: "Gun Label",
		tooltip: "Display label for this gun. Seen when killed by it."
	}
} as const

type Gun = {
	POSITION: GunPosition;
	PROPERTIES?: GunProperties;
}
const GunMeta: Record<keyof Gun, PropertyMeta> = {
	POSITION: {
		label: "Position",
		tooltip: "Defines how the gun is physically positioned on the entity.",
		handler: { type: "gunPositionEditor" }
	},
	PROPERTIES: {
		label: "Properties",
		tooltip: "Settings that control gun behavior, visuals, and effects.",
		handler: { type: "gunPropertiesEditor" }
	}
} as const

class OSAEditorFile {
	name: string
	definition: EntityDefinition
}

class OSAEditorSave {
	knownFiles: {
		path: string,
		definition: string
	}[]
}

function renderEntityDefinitionProperty(property: PropertyMeta): void {
	if (!property || !property.handler) return

	switch (property.handler.type) {
		case 'textBox':
		case 'multiline':
			renderTextInput(property)
			break

		case 'number':
			renderNumberInput(property)
			break

		case 'toggle':
			renderToggle(property)
			break

		case 'color':
			renderColorPicker(property)
			break

		case 'select':
			renderSelect(property)
			break

		case 'motionTypeSelector':
			renderMotionTypeSelector(property)
			break

		case 'facingTypeSelector':
			renderFacingTypeSelector(property)
			break

		case 'array':
			renderArray(property)
			break

		case 'alphaEditor':
			renderAlphaEditor(property)
			break

		case 'entityChoser':
			renderEntityChooser(property)
			break

		case 'bodyEditor':
			renderBodyEditor(property)
			break

		default:
			console.warn(`Unknown handler type: ${(property.handler as any).type}`)
	}
}

function renderNumberInput(property: PropertyMeta) {
	const handler = property!.handler!
	console.log(`Render number input "${property!.label}" with default ${handler.default}`)
}

function renderEventHandler(property: PropertyMeta) {
	const handler = property!.handler!
	if (handler.type !== 'eventHandler') return
	console.log(`Render event handler editor for supported events:`, handler.supportedEvents)
}


function render(): void {

}