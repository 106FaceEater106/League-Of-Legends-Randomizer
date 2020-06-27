//Please note i know slot was misspell so it says slot. This was not in a sense a mistake.
//At the time of making this i was using a auto correct program that a friend made.
//He wanted to see how good it did and i just forgot later once i didnt use it anymore to change
//it to the correct spelling!

//importanting all the files
import {runes0, runes1, runes2, runes3, runes4, runes5} from './Arrays/runes.js';
import {PrecisionKS, DominationKS, SorceryKS, ResolveKS, InspirationKS} from './Arrays/keystones.js';
import {PrecisionSL1, DominationSL1, SorcerySL1, ResolveSL1, InspirationSL1} from './Arrays/slot1.js';
import {PrecisionSL2, DominationSL2, SorcerySL2, ResolveSL2, InspirationSL2} from './Arrays/slot2.js';
import {PrecisionSL3, DominationSL3, SorcerySL3, ResolveSL3, InspirationSL3} from './Arrays/slot3.js';
import {PrecisionSL4, PrecisionSL4A, PrecisionSL4B, PrecisionSL4C, PrecisionSL4D, PrecisionSL4E, PrecisionSL4F, PrecisionSL4G, PrecisionSL4H} from './Arrays/slot4.js';
import {DominationSL4, DominationSL4A, DominationSL4B, DominationSL4C, DominationSL4D, DominationSL4E, DominationSL4F, DominationSL4G, DominationSL4H, DominationSL4I, DominationSL4J} from './Arrays/slot4.js';
import {SorcerySL4, SorcerySL4A, SorcerySL4B, SorcerySL4C, SorcerySL4D, SorcerySL4E, SorcerySL4F, SorcerySL4G, SorcerySL4H, SorcerySL4I} from './Arrays/slot4.js';
import {ResolveSL4, ResolveSL4A, ResolveSL4B, ResolveSL4C, ResolveSL4D, ResolveSL4E, ResolveSL4F, ResolveSL4G, ResolveSL4H, ResolveSL4I} from './Arrays/slot4.js';
import {InspirationSL4, InspirationSL4A, InspirationSL4B, InspirationSL4C, InspirationSL4D, InspirationSL4E, InspirationSL4F, InspirationSL4G, InspirationSL4H} from './Arrays/slot4.js';
import {Assassin, Fighter, Marksman, Support, Tank} from './Arrays/champions.js'
import {champtype} from './Arrays/championType.js'
import {miniSlot1, miniSlot2, miniSlot3} from './Arrays/minislot.js'
import {items1} from './Arrays/items.js'
import {SumSpell} from './Arrays/summonerspells.js'


//Generating the first rune and champion
const RandomRunes1 = runes0[Math.floor(Math.random() * runes0.length)];
const FirstChampionType = champtype[Math.floor(Math.random() * champtype.length)];
const miniS1 = miniSlot1[Math.floor(Math.random() * miniSlot1.length)];
const miniS2 = miniSlot2[Math.floor(Math.random() * miniSlot2.length)];
const miniS3 = miniSlot3[Math.floor(Math.random() * miniSlot3.length)];
const items0 = items1[Math.floor(Math.random() * items1.length)]
const items2 = items1[Math.floor(Math.random() * items1.length)]
const items3 = items1[Math.floor(Math.random() * items1.length)]
const items4 = items1[Math.floor(Math.random() * items1.length)]
const items5 = items1[Math.floor(Math.random() * items1.length)]
const items6 = items1[Math.floor(Math.random() * items1.length)]
const SummerSpells1 = SumSpell[Math.floor(Math.random() * SumSpell.length)]
const SummerSpells2 = SumSpell[Math.floor(Math.random() * SumSpell.length)]

//Rune for secondary
if (RandomRunes1 === "Precision") {
  var RandomRunes2 = runes1[Math.floor(Math.random() * runes1.length)];
} 
else if (RandomRunes1 === "Domination") {
  var RandomRunes2 = runes2[Math.floor(Math.random() * runes2.length)];
} 
else if (RandomRunes1 === "Sorcery") {
  var RandomRunes2 = runes3[Math.floor(Math.random() * runes3.length)];
} 
else if (RandomRunes1 === "Resolve") {
  var RandomRunes2 = runes4[Math.floor(Math.random() * runes4.length)];
} 
else if (RandomRunes1 === "Inspiration") {
  var RandomRunes2 = runes5[Math.floor(Math.random() * runes5.length)];
}

//Keystone
if (RandomRunes1 === "Precision") {
  var RandomKeystone = PrecisionKS[Math.floor(Math.random() * PrecisionKS.length)];
} 
else if (RandomRunes1 === "Domination") {
  var RandomKeystone = DominationKS[Math.floor(Math.random() * DominationKS.length)];
} 
else if (RandomRunes1 === "Sorcery") {
  var RandomKeystone = SorceryKS[Math.floor(Math.random() * SorceryKS.length)];
} 
else if (RandomRunes1 === "Resolve") {
  var RandomKeystone = ResolveKS[Math.floor(Math.random() * ResolveKS.length)];
} 
else if (RandomRunes1 === "Inspiration") {
  var RandomKeystone = InspirationKS[Math.floor(Math.random() * InspirationKS.length)];
}

//Slot 1
if (RandomRunes1 === "Precision") {
  var Randomslot1 = PrecisionSL1[Math.floor(Math.random() * PrecisionSL1.length)];
} 
else if (RandomRunes1 === "Domination") {
  var Randomslot1 = DominationSL1[Math.floor(Math.random() * DominationSL1.length)];
} 
else if (RandomRunes1 === "Sorcery") {
  var Randomslot1 = SorcerySL1[Math.floor(Math.random() * SorcerySL1.length)];
} 
else if (RandomRunes1 === "Resolve") {
  var Randomslot1 = ResolveSL1[Math.floor(Math.random() * ResolveSL1.length)];
} 
else if (RandomRunes1 === "Inspiration") {
  var Randomslot1 = InspirationSL1[Math.floor(Math.random() * InspirationSL1.length)];
}

//Slot 2
if (RandomRunes1 === "Precision") {
  var Randomslot2 = PrecisionSL2[Math.floor(Math.random() * PrecisionSL2.length)];
} 
else if (RandomRunes1 === "Domination") {
  var Randomslot2 = DominationSL2[Math.floor(Math.random() * DominationSL2.length)];
} 
else if (RandomRunes1 === "Sorcery") {
  var Randomslot2 = SorcerySL2[Math.floor(Math.random() * SorcerySL2.length)];
} 
else if (RandomRunes1 === "Resolve") {
  var Randomslot2 = ResolveSL2[Math.floor(Math.random() * ResolveSL2.length)];
} 
else if (RandomRunes1 === "Inspiration") {
  var Randomslot2 = InspirationSL2[Math.floor(Math.random() * InspirationSL2.length)];
}

//Slot 3
if (RandomRunes1 === "Precision") {
  var Randomslot3 = PrecisionSL3[Math.floor(Math.random() * PrecisionSL3.length)];
} 
else if (RandomRunes1 === "Domination") {
  var Randomslot3 = DominationSL3[Math.floor(Math.random() * DominationSL3.length)];
} 
else if (RandomRunes1 === "Sorcery") {
  var Randomslot3 = SorcerySL3[Math.floor(Math.random() * SorcerySL3.length)];
} 
else if (RandomRunes1 === "Resolve") {
  var Randomslot3 = ResolveSL3[Math.floor(Math.random() * ResolveSL3.length)];
} 
else if (RandomRunes1 === "Inspiration") {
  var Randomslot3 = InspirationSL3[Math.floor(Math.random() * InspirationSL3.length)];
}

//Slot 4 P1
if (RandomRunes2 === "Precision") {
  var Randomslot4 = PrecisionSL4[Math.floor(Math.random() * PrecisionSL4.length)];
} 
else if (RandomRunes2 === "Domination") {
  var Randomslot4 = DominationSL4[Math.floor(Math.random() * DominationSL4.length)];
} 
else if (RandomRunes2 === "Sorcery") {
  var Randomslot4 = SorcerySL4[Math.floor(Math.random() * SorcerySL4.length)];
} 
else if (RandomRunes2 === "Resolve") {
  var Randomslot4 = ResolveSL4[Math.floor(Math.random() * ResolveSL4.length)];
} 
else if (RandomRunes2 === "Inspiration") {
  var Randomslot4 = InspirationSL4[Math.floor(Math.random() * InspirationSL4.length)];
}

//All the runes part of slot 4
if (Randomslot4 === "Overheal") {
  var Randomslot5 = PrecisionSL4A[Math.floor(Math.random() * PrecisionSL4A.length)];
} 
else if (Randomslot4 === "Triumph") {
  var Randomslot5 = PrecisionSL4B[Math.floor(Math.random() * PrecisionSL4B.length)];
} 
else if (Randomslot4 === "Presence of Mind") {
  var Randomslot5 = PrecisionSL4C[Math.floor(Math.random() * PrecisionSL4C.length)];  
}
else if (Randomslot4 === "Legend: Alacrity") {
  var Randomslot5 = PrecisionSL4D[Math.floor(Math.random() * PrecisionSL4D.length)];
}
else if (Randomslot4 === "Legend: Bloodline") {
  var Randomslot5 = PrecisionSL4E[Math.floor(Math.random() * PrecisionSL4E.length)];
}
else if (Randomslot4 === "Coup de Grace") {
  var Randomslot5 = PrecisionSL4F[Math.floor(Math.random() * PrecisionSL4F.length)];
}
else if (Randomslot4 === "Cut Down") {
  var Randomslot5 = PrecisionSL4G[Math.floor(Math.random() * PrecisionSL4G.length)];
}
else if (Randomslot4 === "Last Stand") {
  var Randomslot5 = PrecisionSL4H[Math.floor(Math.random() * PrecisionSL4H.length)];
}
else if (Randomslot4 === "Cheap Shot") {
  var Randomslot5 = DominationSL4A[Math.floor(Math.random() * DominationSL4A.length)];
}
else if (Randomslot4 === "Taste of Blood") {
  var Randomslot5 = DominationSL4B[Math.floor(Math.random() * DominationSL4B.length)];
}
else if (Randomslot4 === "Sudden Impact") {
  var Randomslot5 =  DominationSL4C[Math.floor(Math.random() * DominationSL4C.length)];
}
else if (Randomslot4 === "Zombie Ward") {
  var Randomslot5 =  DominationSL4D[Math.floor(Math.random() * DominationSL4D.length)];
}
else if (Randomslot4 === "Ghost Poro") {
  var Randomslot5 =  DominationSL4E[Math.floor(Math.random() * DominationSL4E.length)];
}
else if (Randomslot4 === "Eyeball Collection") {
  var Randomslot5 = DominationSL4F[Math.floor(Math.random() * DominationSL4F.length)];
}
else if (Randomslot4 === "Ravenous Hunter") {
  var Randomslot5 = DominationSL4G[Math.floor(Math.random() * DominationSL4G.length)];
}
else if (Randomslot4 === "Ingenious Hunter") {
  var Randomslot5 = DominationSL4H[Math.floor(Math.random() * DominationSL4H.length)];
}
else if (Randomslot4 === "Relentless Hunter") {
  var Randomslot5 = DominationSL4I[Math.floor(Math.random() * DominationSL4I.length)];
}
else if (Randomslot4 === "Ultimate Hunter") {
  var Randomslot5 = DominationSL4J[Math.floor(Math.random() * DominationSL4J.length)];
}
else if (Randomslot4 === "Nullifying Orb") {
  var Randomslot5 = SorcerySL4A[Math.floor(Math.random() * SorcerySL4A.length)];
}
else if (Randomslot4 === "Manaflow Band") {
  var Randomslot5 = SorcerySL4B[Math.floor(Math.random() * SorcerySL4B.length)];
}
else if (Randomslot4 === "Nimbus Cloak") {
  var Randomslot5 = SorcerySL4C[Math.floor(Math.random() * SorcerySL4C.length)];
}
else if (Randomslot4 === "Transcendence") {
  var Randomslot5 = SorcerySL4D[Math.floor(Math.random() * SorcerySL4D.length)];
}
else if (Randomslot4 === "Celerity") {
  var Randomslot5 = SorcerySL4E[Math.floor(Math.random() * SorcerySL4E.length)];
}
else if (Randomslot4 === "Absolute Focus") {
  var Randomslot5 = SorcerySL4F[Math.floor(Math.random() * SorcerySL4F.length)];
}
else if (Randomslot4 === "Scorch") {
  var Randomslot5 = SorcerySL4G[Math.floor(Math.random() * SorcerySL4G.length)];
}
else if (Randomslot4 === "Waterwalking") {
  var Randomslot5 = SorcerySL4H[Math.floor(Math.random() * SorcerySL4H.length)];
}
else if (Randomslot4 === "Gathering Storm") {
  var Randomslot5 = SorcerySL4I[Math.floor(Math.random() * SorcerySL4I.length)];
}
else if (Randomslot4 === "Demolish") {
  var Randomslot5 = ResolveSL4A[Math.floor(Math.random() * ResolveSL4A.length)];
}
else if (Randomslot4 === "Font of Life") {
  var Randomslot5 = ResolveSL4B[Math.floor(Math.random() * ResolveSL4B.length)];
}
else if (Randomslot4 === "Shield Bash") {
  var Randomslot5 = ResolveSL4C[Math.floor(Math.random() * ResolveSL4C.length)];
}
else if (Randomslot4 === "Conditioning") {
  var Randomslot5 = ResolveSL4D[Math.floor(Math.random() * ResolveSL4D.length)];
}
else if (Randomslot4 === "Second Wind") {
  var Randomslot5 = ResolveSL4E[Math.floor(Math.random() * ResolveSL4E.length)];
}
else if (Randomslot4 === "Bone Plating") {
  var Randomslot5 = ResolveSL4F[Math.floor(Math.random() * ResolveSL4F.length)];
}
else if (Randomslot4 === "Overgrowth") {
  var Randomslot5 = ResolveSL4G[Math.floor(Math.random() * ResolveSL4G.length)];
}
else if (Randomslot4 === "Revitalize") {
  var Randomslot5 = ResolveSL4H[Math.floor(Math.random() * ResolveSL4H.length)];
}
else if (Randomslot4 === "Unflinching") {
  var Randomslot5 = ResolveSL4I[Math.floor(Math.random() * ResolveSL4I.length)];
}
else if (Randomslot4 === "Magical Footwear") {
  var Randomslot5 = InspirationSL4A[Math.floor(Math.random() * InspirationSL4A.length)];
}
else if (Randomslot4 === "Perfect Timing") {
  var Randomslot5 = InspirationSL4B[Math.floor(Math.random() * InspirationSL4B.length)];
}
else if (Randomslot4 === "Future’s Market") {
  var Randomslot5 = InspirationSL4C[Math.floor(Math.random() * InspirationSL4C.length)];
}
else if (Randomslot4 === "Minion Dematerializer") {
  var Randomslot5 = InspirationSL4D[Math.floor(Math.random() * InspirationSL4D.length)];
}
else if (Randomslot4 === "Biscuit Delivery") {
  var Randomslot5 = InspirationSL4E[Math.floor(Math.random() * InspirationSL4E.length)];
}
else if (Randomslot4 === "Cosmic Insight") {
  var Randomslot5 = InspirationSL4F[Math.floor(Math.random() * InspirationSL4F.length)];
}
else if (Randomslot4 === "Approach Velocity") {
  var Randomslot5 = InspirationSL4G[Math.floor(Math.random() * InspirationSL4G.length)];
}
else if (Randomslot4 === "Time Warp Tonic") {
  var Randomslot5 = InspirationSL4H[Math.floor(Math.random() * InspirationSL4H.length)];
}

//Champion you will get
if (FirstChampionType === "Assassin") {
  var championGot = Assassin[Math.floor(Math.random() * Assassin.length)];
}
else if (FirstChampionType === "Fighter") {
  var championGot = Fighter[Math.floor(Math.random() * Fighter.length)];
}
else if (FirstChampionType === "Marksman") {
  var championGot = Marksman[Math.floor(Math.random() * Marksman.length)];
}
else if (FirstChampionType === "Support") {
  var championGot = Support[Math.floor(Math.random() * Support.length)];
}
else if (FirstChampionType === "Tank") {
  var championGot = Tank[Math.floor(Math.random() * Tank.length)];
}

//Colors for console
// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"



// Logging everything for the player
console.log('\x1b[36mOriginal creator - Scott - twitch.tv/LonlyGamerX');
console.log('');
console.log(`\x1b[32mChampion type: \x1b[31m\x1b[4m${FirstChampionType}\x1b[0m`)
console.log(`\x1b[32mChampion: \x1b[31m\x1b[4m${championGot}\x1b[0m`)
console.log('');
console.log('\x1b[37mYour builds is:\x1b[0m');
console.log(`\x1b[32mRune: \x1b[31m\x1b[4m${RandomRunes1}\x1b[0m`);
console.log(`\x1b[32mKeystone: \x1b[31m\x1b[4m${RandomKeystone}\x1b[0m`);
console.log(`\x1b[32mSlot 1: \x1b[31m\x1b[4m${Randomslot1}\x1b[0m`);
console.log(`\x1b[32mSlot 2: \x1b[31m\x1b[4m${Randomslot2}\x1b[0m`);
console.log(`\x1b[32mSlot 3: \x1b[31m\x1b[4m${Randomslot3}\x1b[0m`);
console.log('');
console.log('\x1b[37mFor your secondary:\x1b[0m');
console.log(`\x1b[32mRune: \x1b[31m\x1b[4m${RandomRunes2}\x1b[0m`);
console.log(`\x1b[32mSlot 1: \x1b[31m\x1b[4m${Randomslot4}\x1b[0m`);
console.log(`\x1b[32mSlot 2: \x1b[31m\x1b[4m${Randomslot5}\x1b[0m`);
console.log('');
console.log('\x1b[37mMini slots:\x1b[0m')
console.log(`\x1b[32mMini slot 1: \x1b[31m\x1b[4m${miniS1}\x1b[0m`)
console.log(`\x1b[32mMini slot 2: \x1b[31m\x1b[4m${miniS2}\x1b[0m`)
console.log(`\x1b[32mMini slot 3: \x1b[31m\x1b[4m${miniS3}\x1b[0m`)
console.log('');
console.log('\x1b[37mItems build:\x1b[0m')
console.log(`\x1b[32mItem 1: \x1b[31m\x1b[4m${items0}\x1b[0m`)
console.log(`\x1b[32mItem 2: \x1b[31m\x1b[4m${items2}\x1b[0m`)
console.log(`\x1b[32mItem 3: \x1b[31m\x1b[4m${items3}\x1b[0m`)
console.log(`\x1b[32mItem 4: \x1b[31m\x1b[4m${items4}\x1b[0m`)
console.log(`\x1b[32mItem 5: \x1b[31m\x1b[4m${items5}\x1b[0m`)
console.log(`\x1b[32mItem 6: \x1b[31m\x1b[4m${items6}\x1b[0m`)
console.log('');
console.log('\x1b[37mSummoner Spells:\x1b[0m')
console.log(`\x1b[32mSpell 1: \x1b[31m\x1b[4m${SummerSpells1}\x1b[0m`)
console.log(`\x1b[32mSpell 2: \x1b[31m\x1b[4m${SummerSpells2}\x1b[0m`)

//Resets console back to normal
console.log('\x1b[0m');