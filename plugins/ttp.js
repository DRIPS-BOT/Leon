let Bot = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ttp');

Bot.addCommand({ pattern: 'ttp ?(.*)', fromMe: td, desc: Lang.TTP_DESC }, (async (message, match) => {

var _0x5535e9=_0x46a1;function _0x46a1(_0xde7af,_0xf7691b){var _0x5ddd14=_0x5ddd();return _0x46a1=function(_0x46a102,_0x3101c1){_0x46a102=_0x46a102-0xfd;var _0x37afc7=_0x5ddd14[_0x46a102];return _0x37afc7;},_0x46a1(_0xde7af,_0xf7691b);}function _0x5ddd(){var _0x2120e8=['2lJwJpk','text','data','975480FxcVUP','https://api.xteam.xyz/ttp?file&text=','arraybuffer','4332924GatzxX','8333290yCLfEI','34612760zwhiDZ','from','get','sendReply','7945470mctYlO','sendImage','11209429CNFFki','reply_message','774297aKUAxC'];_0x5ddd=function(){return _0x2120e8;};return _0x5ddd();}(function(_0x4114dd,_0xfc6d8){var _0x3628c6=_0x46a1,_0xd6aa83=_0x4114dd();while(!![]){try{var _0x1445c6=parseInt(_0x3628c6(0x10d))/0x1*(-parseInt(_0x3628c6(0xfd))/0x2)+-parseInt(_0x3628c6(0x103))/0x3+parseInt(_0x3628c6(0x100))/0x4+-parseInt(_0x3628c6(0x104))/0x5+-parseInt(_0x3628c6(0x109))/0x6+parseInt(_0x3628c6(0x10b))/0x7+parseInt(_0x3628c6(0x105))/0x8;if(_0x1445c6===_0xfc6d8)break;else _0xd6aa83['push'](_0xd6aa83['shift']());}catch(_0x3d4309){_0xd6aa83['push'](_0xd6aa83['shift']());}}}(_0x5ddd,0xeaf00));if(match[0x1]!==''){var uri=encodeURI(match[0x1]),ttinullimage=await axios[_0x5535e9(0x107)](_0x5535e9(0x101)+uri,{'responseType':'arraybuffer'});await message[_0x5535e9(0x10a)](Buffer[_0x5535e9(0x106)](ttinullimage['data']));}else{if(message['reply_message']){var txt=message[_0x5535e9(0x10c)][_0x5535e9(0xfe)],uri=encodeURI(txt),ttinullimage=await axios['get']('https://api.xteam.xyz/ttp?file&text='+uri,{'responseType':_0x5535e9(0x102)});await message[_0x5535e9(0x10a)](Buffer['from'](ttinullimage[_0x5535e9(0xff)]));}else!message[_0x5535e9(0x10c)]&&match[0x1]===''&&await message[_0x5535e9(0x108)](Lang['NEED_WORD']);}   
}));

Bot.addCommand({ pattern: 'attp ?(.*)', fromMe: td, desc: Lang.ATTP_DESC }, (async (message, match) => {

var _0x5713e0=_0x3b0e;(function(_0x242f3f,_0x30a19a){var _0x4cf773=_0x3b0e,_0x20ca62=_0x242f3f();while(!![]){try{var _0x5db12f=-parseInt(_0x4cf773(0xd4))/0x1+parseInt(_0x4cf773(0xd9))/0x2+parseInt(_0x4cf773(0xe3))/0x3+-parseInt(_0x4cf773(0xdb))/0x4+-parseInt(_0x4cf773(0xd6))/0x5*(parseInt(_0x4cf773(0xd8))/0x6)+parseInt(_0x4cf773(0xd5))/0x7+parseInt(_0x4cf773(0xda))/0x8;if(_0x5db12f===_0x30a19a)break;else _0x20ca62['push'](_0x20ca62['shift']());}catch(_0x4892ac){_0x20ca62['push'](_0x20ca62['shift']());}}}(_0x2114,0x86dcd));if(match[0x1]!==''){var uri=encodeURI(match[0x1]),ttinullimage=await axios['get'](_0x5713e0(0xdd)+uri,{'responseType':_0x5713e0(0xd7)});await message[_0x5713e0(0xe2)](Buffer[_0x5713e0(0xde)](ttinullimage[_0x5713e0(0xe0)]));}else{if(message['reply_message']){var txt=message[_0x5713e0(0xdf)]['text'],uri=encodeURI(txt),ttinullimage=await axios[_0x5713e0(0xe1)](_0x5713e0(0xdd)+uri,{'responseType':_0x5713e0(0xd7)});await message[_0x5713e0(0xe2)](Buffer[_0x5713e0(0xde)](ttinullimage[_0x5713e0(0xe0)]));}else!message[_0x5713e0(0xdf)]&&match[0x1]===''&&await message[_0x5713e0(0xe4)](Lang[_0x5713e0(0xdc)]);}function _0x3b0e(_0x355f7a,_0x450d3a){var _0x2114cb=_0x2114();return _0x3b0e=function(_0x3b0e3f,_0x2b76ac){_0x3b0e3f=_0x3b0e3f-0xd4;var _0x55b65b=_0x2114cb[_0x3b0e3f];return _0x55b65b;},_0x3b0e(_0x355f7a,_0x450d3a);}function _0x2114(){var _0x432e16=['3044184vTDGPl','sendReply','994616zheDXt','1557374MihAYS','1288545ZzcKFy','arraybuffer','18XqCQXt','252464vBWeyI','15443136rrSEVC','3894776VxNyeN','NEED_WORD','https://api.xteam.xyz/attp?file&text=','from','reply_message','data','get','sendVideoAsGif'];_0x2114=function(){return _0x432e16;};return _0x2114();}
}));
    
Bot.addCommand({pattern: 'emoji ?(.*)', fromMe: td, desc: Lang.EMOJI_DESC}, (async (message, match) => {
       
function _0x610f(_0x4af66c,_0x5a7d90){var _0x282d79=_0x282d();return _0x610f=function(_0x610f6a,_0x293425){_0x610f6a=_0x610f6a-0x184;var _0x142526=_0x282d79[_0x610f6a];return _0x142526;},_0x610f(_0x4af66c,_0x5a7d90);}var _0x4cb67c=_0x610f;(function(_0x7d06cb,_0x48f62b){var _0x92ae07=_0x610f,_0x4a4db5=_0x7d06cb();while(!![]){try{var _0x574e87=-parseInt(_0x92ae07(0x18d))/0x1+-parseInt(_0x92ae07(0x194))/0x2*(-parseInt(_0x92ae07(0x186))/0x3)+parseInt(_0x92ae07(0x190))/0x4*(-parseInt(_0x92ae07(0x18a))/0x5)+parseInt(_0x92ae07(0x197))/0x6*(-parseInt(_0x92ae07(0x188))/0x7)+-parseInt(_0x92ae07(0x187))/0x8*(-parseInt(_0x92ae07(0x192))/0x9)+parseInt(_0x92ae07(0x196))/0xa+parseInt(_0x92ae07(0x191))/0xb*(parseInt(_0x92ae07(0x18b))/0xc);if(_0x574e87===_0x48f62b)break;else _0x4a4db5['push'](_0x4a4db5['shift']());}catch(_0x111d48){_0x4a4db5['push'](_0x4a4db5['shift']());}}}(_0x282d,0xef337));function _0x282d(){var _0x1f1480=['73972LpyjXr','from','13166460wsnskO','746142rBXfRG','text','arraybuffer','data','3NvmpmM','404344rZPbYz','49tMUWON','sendImage','6345fRDthU','963804GWTpVB','get','1471766YNJRMS','https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji=','reply_message','3516PabJvL','187ginxpy','306BcoJOG','NEED_WORD'];_0x282d=function(){return _0x1f1480;};return _0x282d();}if(match[0x1]!==''){var uri=encodeURI(match[0x1]),ttinullimage=await axios[_0x4cb67c(0x18c)](_0x4cb67c(0x18e)+uri,{'responseType':_0x4cb67c(0x184)});await message[_0x4cb67c(0x189)](Buffer[_0x4cb67c(0x195)](ttinullimage[_0x4cb67c(0x185)]));}else{if(message[_0x4cb67c(0x18f)]){var txt=message[_0x4cb67c(0x18f)][_0x4cb67c(0x198)],uri=encodeURI(txt),ttinullimage=await axios[_0x4cb67c(0x18c)]('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+uri,{'responseType':'arraybuffer'});await message['sendImage'](Buffer['from'](ttinullimage['data']));}else!message['reply_message']&&match[0x1]===''&&await message['sendReply'](Lang[_0x4cb67c(0x193)]);}
}));