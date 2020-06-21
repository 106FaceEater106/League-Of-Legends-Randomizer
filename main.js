//importanting all the files
import {runes0, runes1, runes2, runes3, runes4, runes5} from './Arrays/runes.js';
import {PrecisionKS, DominationKS, SorceryKS, ResolveKS, InspirationKS} from './Arrays/keystones.js';
import {PrecisionSL1, DominationSL1, SorcerySL1, ResolveSL1, InspirationSL1} from './Arrays/slote1.js';
import {PrecisionSL2, DominationSL2, SorcerySL2, ResolveSL2, InspirationSL2} from './Arrays/slote2.js';
import {PrecisionSL3, DominationSL3, SorcerySL3, ResolveSL3, InspirationSL3} from './Arrays/slote3.js';
import {PrecisionSL4, PrecisionSL4A, PrecisionSL4B, PrecisionSL4C, PrecisionSL4D, PrecisionSL4E, PrecisionSL4F, PrecisionSL4G, PrecisionSL4H} from './Arrays/slote4.js';
import {DominationSL4, DominationSL4A, DominationSL4B, DominationSL4C, DominationSL4D, DominationSL4E, DominationSL4F, DominationSL4G, DominationSL4H, DominationSL4I, DominationSL4J} from './Arrays/slote4.js';
import {SorcerySL4, SorcerySL4A, SorcerySL4B, SorcerySL4C, SorcerySL4D, SorcerySL4E, SorcerySL4F, SorcerySL4G, SorcerySL4H, SorcerySL4I} from './Arrays/slote4.js';
import {ResolveSL4, ResolveSL4A, ResolveSL4B, ResolveSL4C, ResolveSL4D, ResolveSL4E, ResolveSL4F, ResolveSL4G, ResolveSL4H, ResolveSL4I} from './Arrays/slote4.js';
import {InspirationSL4, InspirationSL4A, InspirationSL4B, InspirationSL4C, InspirationSL4D, InspirationSL4E, InspirationSL4F, InspirationSL4G, InspirationSL4H} from './Arrays/slote4.js';

//Generating the first rune
const RandomRunes1 = runes0[Math.floor(Math.random() * runes0.length)];

//Rune for secondary
if (RandomRunes1 === "Precision") {
  var RandomRunes2 = runes1[Math.floor(Math.random() * runes1.length)];
} else if (RandomRunes1 === "Domination") {
  var RandomRunes2 = runes2[Math.floor(Math.random() * runes2.length)];
} else if (RandomRunes1 === "Sorcery") {
  var RandomRunes2 = runes3[Math.floor(Math.random() * runes3.length)];
} else if (RandomRunes1 === "Resolve") {
  var RandomRunes2 = runes4[Math.floor(Math.random() * runes4.length)];
} else if (RandomRunes1 === "Inspiration") {
  var RandomRunes2 = runes5[Math.floor(Math.random() * runes5.length)];
}

//Keystone
if (RandomRunes1 === "Precision") {
  var RandomKeystone = PrecisionKS[Math.floor(Math.random() * PrecisionKS.length)];
} else if (RandomRunes1 === "Domination") {
  var RandomKeystone = DominationKS[Math.floor(Math.random() * DominationKS.length)];
} else if (RandomRunes1 === "Sorcery") {
  var RandomKeystone = SorceryKS[Math.floor(Math.random() * SorceryKS.length)];
} else if (RandomRunes1 === "Resolve") {
  var RandomKeystone = ResolveKS[Math.floor(Math.random() * ResolveKS.length)];
} else if (RandomRunes1 === "Inspiration") {
  var RandomKeystone = InspirationKS[Math.floor(Math.random() * InspirationKS.length)];
}

//Slote 1
if (RandomRunes1 === "Precision") {
  var RandomSlote1 = PrecisionSL1[Math.floor(Math.random() * PrecisionSL1.length)];
} else if (RandomRunes1 === "Domination") {
  var RandomSlote1 = DominationSL1[Math.floor(Math.random() * DominationSL1.length)];
} else if (RandomRunes1 === "Sorcery") {
  var RandomSlote1 = SorcerySL1[Math.floor(Math.random() * SorcerySL1.length)];
} else if (RandomRunes1 === "Resolve") {
  var RandomSlote1 = ResolveSL1[Math.floor(Math.random() * ResolveSL1.length)];
} else if (RandomRunes1 === "Inspiration") {
  var RandomSlote1 = InspirationSL1[Math.floor(Math.random() * InspirationSL1.length)];
}

//Slote 2
if (RandomRunes1 === "Precision") {
  var RandomSlote2 = PrecisionSL2[Math.floor(Math.random() * PrecisionSL2.length)];
} else if (RandomRunes1 === "Domination") {
  var RandomSlote2 = DominationSL2[Math.floor(Math.random() * DominationSL2.length)];
} else if (RandomRunes1 === "Sorcery") {
  var RandomSlote2 = SorcerySL2[Math.floor(Math.random() * SorcerySL2.length)];
} else if (RandomRunes1 === "Resolve") {
  var RandomSlote2 = ResolveSL2[Math.floor(Math.random() * ResolveSL2.length)];
} else if (RandomRunes1 === "Inspiration") {
  var RandomSlote2 = InspirationSL2[Math.floor(Math.random() * InspirationSL2.length)];
}

//Slote 3
if (RandomRunes1 === "Precision") {
  var RandomSlote3 = PrecisionSL3[Math.floor(Math.random() * PrecisionSL3.length)];
} else if (RandomRunes1 === "Domination") {
  var RandomSlote3 = DominationSL3[Math.floor(Math.random() * DominationSL3.length)];
} else if (RandomRunes1 === "Sorcery") {
  var RandomSlote3 = SorcerySL3[Math.floor(Math.random() * SorcerySL3.length)];
} else if (RandomRunes1 === "Resolve") {
  var RandomSlote3 = ResolveSL3[Math.floor(Math.random() * ResolveSL3.length)];
} else if (RandomRunes1 === "Inspiration") {
  var RandomSlote3 = InspirationSL3[Math.floor(Math.random() * InspirationSL3.length)];
}

//Slote 4 P1
if (RandomRunes2 === "Precision") {
  var RandomSlote4 = PrecisionSL4[Math.floor(Math.random() * PrecisionSL4.length)];
} else if (RandomRunes2 === "Domination") {
  var RandomSlote4 = DominationSL4[Math.floor(Math.random() * DominationSL4.length)];
} else if (RandomRunes2 === "Sorcery") {
  var RandomSlote4 = SorcerySL4[Math.floor(Math.random() * SorcerySL4.length)];
} else if (RandomRunes2 === "Resolve") {
  var RandomSlote4 = ResolveSL4[Math.floor(Math.random() * ResolveSL4.length)];
} else if (RandomRunes2 === "Inspiration") {
  var RandomSlote4 = InspirationSL4[Math.floor(Math.random() * InspirationSL4.length)];
}

//All the runes part of slote 4
if (RandomSlote4 === "Overheal") {
  var RandomSlote5 = PrecisionSL4A[Math.floor(Math.random() * PrecisionSL4A.length)];
} else if (RandomSlote4 === "Triumph") {
  var RandomSlote5 = PrecisionSL4B[Math.floor(Math.random() * PrecisionSL4B.length)];
} else if (RandomSlote4 === "Presence of Mind") {
  var RandomSlote5 = PrecisionSL4C[Math.floor(Math.random() * PrecisionSL4C.length)];  
}else if (RandomSlote4 === "Legend: Alacrity") {
  var RandomSlote5 = PrecisionSL4D[Math.floor(Math.random() * PrecisionSL4D.length)];
}else if (RandomSlote4 === "Legend: Bloodline") {
  var RandomSlote5 = PrecisionSL4E[Math.floor(Math.random() * PrecisionSL4E.length)];
}else if (RandomSlote4 === "Coup de Grace") {
  var RandomSlote5 = PrecisionSL4F[Math.floor(Math.random() * PrecisionSL4F.length)];
}else if (RandomSlote4 === "Cut Down") {
  var RandomSlote5 = PrecisionSL4G[Math.floor(Math.random() * PrecisionSL4G.length)];
}else if (RandomSlote4 === "Last Stand") {
  var RandomSlote5 = PrecisionSL4H[Math.floor(Math.random() * PrecisionSL4H.length)];
}else if (RandomSlote4 === "Cheap Shot") {
  var RandomSlote5 = DominationSL4A[Math.floor(Math.random() * DominationSL4A.length)];
}else if (RandomSlote4 === "Taste of Blood") {
  var RandomSlote5 = DominationSL4B[Math.floor(Math.random() * DominationSL4B.length)];
}else if (RandomSlote4 === "Sudden Impact") {
  var RandomSlote5 =  DominationSL4C[Math.floor(Math.random() * DominationSL4C.length)];
}else if (RandomSlote4 === "Zombie Ward") {
  var RandomSlote5 =  DominationSL4D[Math.floor(Math.random() * DominationSL4D.length)];
}else if (RandomSlote4 === "Ghost Poro") {
  var RandomSlote5 =  DominationSL4E[Math.floor(Math.random() * DominationSL4E.length)];
}else if (RandomSlote4 === "Eyeball Collection") {
  var RandomSlote5 = DominationSL4F[Math.floor(Math.random() * DominationSL4F.length)];
}else if (RandomSlote4 === "Ravenous Hunter") {
  var RandomSlote5 = DominationSL4G[Math.floor(Math.random() * DominationSL4G.length)];
}else if (RandomSlote4 === "Ingenious Hunter") {
  var RandomSlote5 = DominationSL4H[Math.floor(Math.random() * DominationSL4H.length)];
}else if (RandomSlote4 === "Relentless Hunter") {
  var RandomSlote5 = DominationSL4I[Math.floor(Math.random() * DominationSL4I.length)];
}else if (RandomSlote4 === "Ultimate Hunter") {
  var RandomSlote5 = DominationSL4J[Math.floor(Math.random() * DominationSL4J.length)];
}else if (RandomSlote4 === "Nullifying Orb") {
  var RandomSlote5 = SorcerySL4A[Math.floor(Math.random() * SorcerySL4A.length)];
}else if (RandomSlote4 === "Manaflow Band") {
  var RandomSlote5 = SorcerySL4B[Math.floor(Math.random() * SorcerySL4B.length)];
}else if (RandomSlote4 === "Nimbus Cloak") {
  var RandomSlote5 = SorcerySL4C[Math.floor(Math.random() * SorcerySL4C.length)];
}else if (RandomSlote4 === "Transcendence") {
  var RandomSlote5 = SorcerySL4D[Math.floor(Math.random() * SorcerySL4D.length)];
}else if (RandomSlote4 === "Celerity") {
  var RandomSlote5 = SorcerySL4E[Math.floor(Math.random() * SorcerySL4E.length)];
}else if (RandomSlote4 === "Absolute Focus") {
  var RandomSlote5 = SorcerySL4F[Math.floor(Math.random() * SorcerySL4F.length)];
}else if (RandomSlote4 === "Scorch") {
  var RandomSlote5 = SorcerySL4G[Math.floor(Math.random() * SorcerySL4G.length)];
}else if (RandomSlote4 === "Waterwalking") {
  var RandomSlote5 = SorcerySL4H[Math.floor(Math.random() * SorcerySL4H.length)];
}else if (RandomSlote4 === "Gathering Storm") {
  var RandomSlote5 = SorcerySL4I[Math.floor(Math.random() * SorcerySL4I.length)];
}else if (RandomSlote4 === "Demolish") {
  var RandomSlote5 = ResolveSL4A[Math.floor(Math.random() * ResolveSL4A.length)];
}else if (RandomSlote4 === "Font of Life") {
  var RandomSlote5 = ResolveSL4B[Math.floor(Math.random() * ResolveSL4B.length)];
}else if (RandomSlote4 === "Shield Bash") {
  var RandomSlote5 = ResolveSL4C[Math.floor(Math.random() * ResolveSL4C.length)];
}else if (RandomSlote4 === "Conditioning") {
  var RandomSlote5 = ResolveSL4D[Math.floor(Math.random() * ResolveSL4D.length)];
}else if (RandomSlote4 === "Second Wind") {
  var RandomSlote5 = ResolveSL4E[Math.floor(Math.random() * ResolveSL4E.length)];
}else if (RandomSlote4 === "Bone Plating") {
  var RandomSlote5 = ResolveSL4F[Math.floor(Math.random() * ResolveSL4F.length)];
}else if (RandomSlote4 === "Overgrowth") {
  var RandomSlote5 = ResolveSL4G[Math.floor(Math.random() * ResolveSL4G.length)];
}else if (RandomSlote4 === "Revitalize") {
  var RandomSlote5 = ResolveSL4H[Math.floor(Math.random() * ResolveSL4H.length)];
}else if (RandomSlote4 === "Unflinching") {
  var RandomSlote5 = ResolveSL4I[Math.floor(Math.random() * ResolveSL4I.length)];
}else if (RandomSlote4 === "Magical Footwear") {
  var RandomSlote5 = InspirationSL4A[Math.floor(Math.random() * InspirationSL4A.length)];
}else if (RandomSlote4 === "Perfect Timing") {
  var RandomSlote5 = InspirationSL4B[Math.floor(Math.random() * InspirationSL4B.length)];
}else if (RandomSlote4 === "Future’s Market") {
  var RandomSlote5 = InspirationSL4C[Math.floor(Math.random() * InspirationSL4C.length)];
}else if (RandomSlote4 === "Minion Dematerializer") {
  var RandomSlote5 = InspirationSL4D[Math.floor(Math.random() * InspirationSL4D.length)];
}else if (RandomSlote4 === "Biscuit Delivery") {
  var RandomSlote5 = InspirationSL4E[Math.floor(Math.random() * InspirationSL4E.length)];
}else if (RandomSlote4 === "Cosmic Insight") {
  var RandomSlote5 = InspirationSL4F[Math.floor(Math.random() * InspirationSL4F.length)];
}else if (RandomSlote4 === "Approach Velocity") {
  var RandomSlote5 = InspirationSL4G[Math.floor(Math.random() * InspirationSL4G.length)];
}else if (RandomSlote4 === "Time Warp Tonic") {
  var RandomSlote5 = InspirationSL4H[Math.floor(Math.random() * InspirationSL4H.length)];
}

//Colors
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
console.log('\x1b[36mOriginal creator - Scott - twitch.tv/lonlygamerx');
console.log('');
console.log('\x1b[32mYour builds is:');
console.log(`\x1b[31m\x1b[4mRune: ${RandomRunes1}`);
console.log(`\x1b[31m\x1b[4mKeystone: ${RandomKeystone}`);
console.log(`\x1b[31m\x1b[4mSlote 1: ${RandomSlote1}`);
console.log(`\x1b[31m\x1b[4mSlote 2: ${RandomSlote2}`);
console.log(`\x1b[31m\x1b[4mSlote 3: ${RandomSlote3}`);
console.log('\x1b[32mAnd for your secondary:');
console.log(`\x1b[31m\x1b[4mRune: ${RandomRunes2}`);
console.log(`\x1b[31m\x1b[4mSlote 1: ${RandomSlote4}`);
console.log(`\x1b[31m\x1b[4mSlote 2: ${RandomSlote5}`);
//Resets console back to normal
console.log('\x1b[0m');