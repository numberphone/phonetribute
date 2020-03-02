import { AbilityNames } from "./AbilityNames";

export const abilityCodesToNames = new Map<number, string>(
  [
    // goku
    [FourCC('A00R'), AbilityNames.Goku.KAMEHAMEHA],
    [FourCC('A0L9'), AbilityNames.Goku.GOD_KAMEHAMEHA],
    [FourCC('A0JP'), AbilityNames.Goku.SPIRIT_BOMB],
    [FourCC('A00U'), AbilityNames.Goku.DRAGON_FIST],
    [FourCC('A0KR'), AbilityNames.Goku.ULTRA_INSTINCT],
    [FourCC('A0MZ'), AbilityNames.Goku.MASTERED_ULTRA_INSTINCT],

    // vegeta
    [FourCC('A03N'), AbilityNames.Vegeta.GALICK_GUN],
    [FourCC('A0GO'), AbilityNames.Vegeta.BIG_BANG_ATTACK],
    [FourCC('A01B'), AbilityNames.Vegeta.FINAL_FLASH],
    [FourCC('A0L4'), AbilityNames.Vegeta.FINAL_FLASH_2],
    [FourCC('A0L3'), AbilityNames.Vegeta.ENERGY_BLAST_VOLLEY],
    [FourCC('A035'), AbilityNames.Vegeta.MOONLIGHT],
    [FourCC('A0LS'), AbilityNames.Vegeta.ANGRY_SHOUT],

    // gohan
    [FourCC('A0H8'), AbilityNames.Gohan.MASENKO],
    [FourCC('A0IS'), AbilityNames.Gohan.TWIN_DRAGON_SHOT],
    [FourCC('A0L5'), AbilityNames.Gohan.SUPER_DRAGON_FLIGHT],
    [FourCC('A0L6'), AbilityNames.Gohan.UNLOCK_POTENTIAL],
    [FourCC('A0L7'), AbilityNames.Gohan.THE_GREAT_SAIYAMAN_HAS_ARRIVED],
    [FourCC('A0L8'), AbilityNames.Gohan.POTENTIAL_UNLEASHED],

    // kid trunks
    [FourCC('A02L'), AbilityNames.FutureTrunks.FINISH_BUSTER],

    // gotenks
    [FourCC('A0CQ'), AbilityNames.Gotenks.GALACTIC_DONUTS],
    [FourCC('A0CP'), AbilityNames.Gotenks.SUPER_GHOST_KAMIKAZE_ATTACK],

    // future trunks
    [FourCC('A0NL'), AbilityNames.FutureTrunks.HEAT_DOME_ATTACK],
    [FourCC('A03I'), AbilityNames.FutureTrunks.BURNING_ATTACK],
    // [FourCC('A064'), "High Power Rush"],
    [FourCC('A0LE'), AbilityNames.FutureTrunks.BLAZING_RUSH],
    [FourCC('A0LF'), AbilityNames.FutureTrunks.SHINING_SWORD_ATTACK],
    [FourCC('A0KT'), AbilityNames.FutureTrunks.SUPER_SAIYAN_RAGE],

    // piccolo
    [FourCC('A06F'), AbilityNames.Piccolo.SPECIAL_BEAM_CANNON],
    [FourCC('A0C8'), AbilityNames.Piccolo.SLAPPY_HAND],
    [FourCC('A0LM'), AbilityNames.Piccolo.HELLZONE_GRENADE],
    [FourCC('A088'), AbilityNames.Piccolo.MULTI_FORM],
    [FourCC('A04Y'), AbilityNames.Piccolo.KYODAIKA],
    // clones version
    [FourCC('A0ES'), AbilityNames.Piccolo.SPECIAL_BEAM_CANNON],

    // bardock
    [FourCC('A0LN'), AbilityNames.Bardock.FUTURE_SIGHT],
    [FourCC('A0LO'), AbilityNames.Bardock.TYRANT_LANCER],
    [FourCC('A0LP'), AbilityNames.Bardock.RIOT_JAVELIN],
    [FourCC('A0LQ'), AbilityNames.Bardock.REBELLION_SPEAR],
    [FourCC('A0LR'), AbilityNames.Bardock.SAIYAN_SPIRIT],

    // pan & giru
    [FourCC('A0LX'), AbilityNames.Pan.KAMEHAMEHA],
    [FourCC('A0LU'), AbilityNames.Pan.MAIDEN_BLAST],
    [FourCC('A0LV'), AbilityNames.Pan.RELIABLE_FRIEND],
    [FourCC('A0LY'), AbilityNames.Pan.HONEY_BEE_COSTUME],
    [FourCC('A0LW'), AbilityNames.Pan.SUMMON_GIRU],

    // android 17 dbs
    [FourCC('A09O'), AbilityNames.Android17DBS.POWER_BLITZ],
    [FourCC('A0MW'), AbilityNames.Android17DBS.POWER_BLITZ_BARRAGE],
    [FourCC('A0MT'), AbilityNames.Android17DBS.BARRIER_PRISON],
    [FourCC('A0MU'), AbilityNames.Android17DBS.BARRIER_WALL],
    [FourCC('A0LB'), AbilityNames.Android17DBS.ANDROID_BARRIER],
    [FourCC('A0MV'), AbilityNames.Android17DBS.SUPER_ELECTRIC_STRIKE],

    // videl
    [FourCC('A073'), AbilityNames.Videl.PUNCH],
    [FourCC('A071'), AbilityNames.Videl.KICK],
    [FourCC('A0JW'), AbilityNames.Videl.FLYING_KICK],

    // upa
    [FourCC('A0OH'), AbilityNames.Upa.JAVELIN_THROW],
    [FourCC('A0OI'), AbilityNames.Upa.WHIRLWIND_TEMPEST],
    [FourCC('A0OJ'), AbilityNames.Upa.KORIN_FLAG],
    [FourCC('A0OK'), AbilityNames.Upa.LAST_STAND],

    // babidi
    [FourCC('A02F'), AbilityNames.Babidi.HARETSU],
    [FourCC('A0LG'), AbilityNames.Babidi.BABIDI_BARRIER],
    [FourCC('A0JQ'), AbilityNames.Babidi.BABIDI_MAGIC],
    [FourCC('A018'), AbilityNames.Babidi.SUMMON_PUI_PUI],
    [FourCC('A01A'), AbilityNames.Babidi.SUMMON_YAKON],
    [FourCC('A03E'), AbilityNames.Babidi.SUMMON_DABURA],

    // dabura
    [FourCC('A0OG'), AbilityNames.Dabura.EVIL_SPEAR],

    // buus
    [FourCC('A0EI'), AbilityNames.Buu.BUU_BEAM],
    [FourCC('A01C'), AbilityNames.Buu.FLESH_ATTACK],
    [FourCC('A0LH'), AbilityNames.Buu.INNOCENCE_BREATH],
    [FourCC('A0ER'), AbilityNames.Buu.ANGRY_EXPLOSION],
    [FourCC('A0C0'), AbilityNames.Buu.VANISHING_BALL],
    [FourCC('A01D'), AbilityNames.Buu.MANKIND_DESTRUCTION_ATTACK],

    // androids 13 14 15
    [FourCC('A00N'), AbilityNames.Android13.ENERGY_BEAM],
    // change later distortion field -> android barrier
    [FourCC('A0LC'), AbilityNames.Android13.SS_DEADLY_HAMMER],
    // new
    [FourCC('A0LD'), AbilityNames.Android13.SS_DEADLY_BOMBER],
    // old
    [FourCC('A041'), AbilityNames.Android13.SS_DEADLY_BOMBER],
    [FourCC('A01Y'), AbilityNames.Android13.NUKE],
    [FourCC('A0K2'), AbilityNames.Android13.OVERCHARGE],



    // broly
    [FourCC('A0G8'), AbilityNames.Broly.ENERGY_PUNCH],
    [FourCC('A00J'), AbilityNames.Broly.POWER_LEVEL_RISING],
    [FourCC('A0BZ'), AbilityNames.Broly.PLANET_CRUSHER],
    [FourCC('A084'), AbilityNames.Broly.GIGANTIC_ROAR],
    [FourCC('A0H6'), AbilityNames.Broly.GIGANTIC_OMEGASTORM],

    // cell 
    [FourCC('A029'), AbilityNames.Cell.ABSORB],
    [FourCC('A0JU'), AbilityNames.Cell.ABSORB],
    [FourCC('A0LA'), AbilityNames.Cell.ABSORB],
    // special beam cannon CELL
    [FourCC('A0C9'), AbilityNames.Cell.SPECIAL_BEAM_CANNON],
    // masenko CELL
    [FourCC('A0GD'), AbilityNames.Cell.MASENKO],
    [FourCC('A01Z'), AbilityNames.Cell.SPAWN_CELL_JUNIORS],
    [FourCC('A0O9'), AbilityNames.Cell.SOLAR_KAMEHAMEHA],
    [FourCC('A0OD'), AbilityNames.Cell.CELL_X_FORM],

    // cooler
    [FourCC('A06C'), AbilityNames.Frieza.DEATH_BEAM],
    [FourCC('A0C1'), AbilityNames.Cooler.SUPERNOVA_COOLER],
    [FourCC('A0KY'), AbilityNames.Cooler.NOVA_CHARIOT],
    [FourCC('A06N'), AbilityNames.Cooler.DEAFENING_WAVE],
    [FourCC('A063'), AbilityNames.Cooler.GETI_STAR_REPAIR],
    [FourCC('A0L2'), AbilityNames.Cooler.SUPERNOVA_GOLDEN],

    // raditz
    [FourCC('A0ME'), AbilityNames.Raditz.DOUBLE_SUNDAY],
    [FourCC('A0MF'), AbilityNames.Raditz.SATURDAY_CRASH],
    [FourCC('A0MG'), AbilityNames.Raditz.BEHIND_YOU],
    [FourCC('A0MH'), AbilityNames.Raditz.DOUBLE_SUNDAE],

    // nappa
    [FourCC('A0MI'), AbilityNames.Nappa.GIANT_STORM],
    [FourCC('A0MJ'), AbilityNames.Nappa.BLAZING_STORM],
    [FourCC('A0MK'), AbilityNames.Nappa.PLANT_SAIBAMEN],
    [FourCC('A0ML'), AbilityNames.Nappa.BREAK_CANNON],
    
    // saibamen
    [FourCC('A0MM'), AbilityNames.Saibaman.BOMB],
    [FourCC('A0MN'), AbilityNames.Saibaman.ACID],

    // moro
    [FourCC('A0MO'), AbilityNames.Moro.ENERGY_DRAIN],
    [FourCC('A0MP'), AbilityNames.Moro.ENERGY_BALL],
    [FourCC('A0MQ'), AbilityNames.Moro.LAVA_BURST],
    [FourCC('A0MR'), AbilityNames.Moro.LAVA_PILLARS],
    [FourCC('A0MS'), AbilityNames.Moro.POWER_LEVEL_SHARING],

    // super janemba
    [FourCC('A0O0'), AbilityNames.SuperJanemba.DEMONS_MARK],
    [FourCC('A0O1'), AbilityNames.SuperJanemba.DEMON_RUSH],
    [FourCC('A0NY'), AbilityNames.SuperJanemba.RAKSHASA_CLAW],
    [FourCC('A0NZ'), AbilityNames.SuperJanemba.DEVIL_CLAW],
    [FourCC('A0O2'), AbilityNames.SuperJanemba.BUNKAI_TELEPORT],
    [FourCC('A0OA'), AbilityNames.SuperJanemba.DEMONIC_BLADE],
    [FourCC('A0O3'), AbilityNames.SuperJanemba.HELLS_GATE],
    [FourCC('A0EU'), AbilityNames.SuperJanemba.COSMIC_ILLUSION],
    [FourCC('A0O4'), AbilityNames.SuperJanemba.LIGHTNING_SHOWER_RAIN],

    // king k rool
    [FourCC('A0OT'), AbilityNames.KingKRool.BELLY_ARMOR],
    [FourCC('A0IV'), AbilityNames.KingKRool.KROWN_TOSS],
    [FourCC('A0IW'), AbilityNames.KingKRool.KHARGE],
    [FourCC('A0IU'), AbilityNames.KingKRool.HAND_KANNON],
    [FourCC('A0IX'), AbilityNames.KingKRool.MONKEY_SMASHER],
    [FourCC('A0OU'), AbilityNames.KingKRool.BLAST_O_MATIC],
    [FourCC('A0OV'), AbilityNames.KingKRool.KINGS_THRONE],

    // items
    [FourCC('A0NS'), AbilityNames.Items.ANDROID_BOMB],
    [FourCC('A0NT'), AbilityNames.Items.GETI_STAR_FRAGMENT],
    // dummy caster FourCC("h054")
    // dummy stun micro / 1s / 2s
    // A08K / A0IY / A0I7
  ]
);