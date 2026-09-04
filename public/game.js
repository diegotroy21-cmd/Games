(()=>{var Hu=0,Vc=1,Gu=2;var ms=1,Wu=2,Ks=3,_i=0,on=1,We=2,Bn=0,vi=1,He=2,Hc=3,Gc=4,Xu=5;var Hi=100,qu=101,Yu=102,ju=103,Zu=104,Ju=200,$u=201,Ku=202,Qu=203,Jo=204,$o=205,td=206,ed=207,nd=208,id=209,sd=210,rd=211,od=212,ad=213,ld=214,Ko=0,Qo=1,ta=2,ds=3,ea=4,na=5,ia=6,sa=7,Wc=0,cd=1,hd=2,jn=0,Hr=1,Gr=2,Wr=3,gs=4,Xr=5,qr=6,Yr=7,Cc="attached",ud="detached",Xc=300,Zi=301,xs=302,Ra=303,Ca=304,jr=306,ra=1e3,ei=1001,oa=1002,tn=1003,dd=1004;var Zr=1005;var rn=1006,Pa=1007;var Ji=1008;var wn=1009,qc=1010,Yc=1011,Qs=1012,Ia=1013,Zn=1014,Ln=1015,dn=1016,La=1017,Da=1018,tr=1020,jc=35902,Zc=35899,Jc=1021,$c=1022,Dn=1023,ni=1026,$i=1027,Ua=1028,Na=1029,Ki=1030,Fa=1031;var ka=1033,Jr=33776,$r=33777,Kr=33778,Qr=33779,Ba=35840,Oa=35841,za=35842,Va=35843,Ha=36196,Ga=37492,Wa=37496,Xa=37488,qa=37489,to=37490,Ya=37491,ja=37808,Za=37809,Ja=37810,$a=37811,Ka=37812,Qa=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,eo=36285,fl=36286;var _r=2300,aa=2301,Zo=2302,Pc=2303,Ic=2400,Lc=2401,Dc=2402;var fd=3200;var pl=0,pd=1,Ei="",sn="srgb",vr="srgb-linear",yr="linear",ve="srgb";var hs=7680;var Uc=519,md=512,gd=513,xd=514,ml=515,_d=516,vd=517,gl=518,yd=519,Nc=35044,ri=35048;var Kc="300 es",Wn=2e3,Vs=2001;function dp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Mr("canvas");return i.style.display="block",i}var du={},Hs=null;function Qc(...i){let t="THREE."+i.shift();Hs?Hs("log",t,...i):console.log(t,...i)}function bd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=bd(i);let t="THREE."+i.shift();if(Hs)Hs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=bd(i);let t="THREE."+i.shift();if(Hs)Hs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function us(...i){let t=i.join(" ");t in du||(du[t]=!0,Gt(...i))}function Sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wd={[Ko]:Qo,[ta]:ia,[ea]:sa,[ds]:na,[Qo]:Ko,[ia]:ta,[sa]:ea,[na]:ds},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,gr=Math.PI/180,Gs=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function pp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mp(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function gp(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function xp(i,t=1){return t-Math.abs(th(i,t*2)-t)}function _p(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mp(i,t){return i+Math.random()*(t-i)}function bp(i){return i*(.5-Math.random())}function Sp(i){i!==void 0&&(fu=i);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wp(i){return i*gr}function Tp(i){return i*Gs}function Ep(i){return(i&i-1)===0&&i!==0}function Ap(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),d=o((t+n)/2),h=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*d,l*h,l*u,a*c);break;case"YZY":i.set(l*u,a*d,l*h,a*c);break;case"ZXZ":i.set(l*h,l*u,a*d,a*c);break;case"XZX":i.set(a*d,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*d,a*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eh={DEG2RAD:gr,RAD2DEG:Gs,generateUUID:_s,clamp:de,euclideanModulo:th,mapLinear:pp,inverseLerp:mp,lerp:xr,damp:gp,pingpong:xp,smoothstep:_p,smootherstep:vp,randInt:yp,randFloat:Mp,randFloatSpread:bp,seededRandom:Sp,degToRad:wp,radToDeg:Tp,isPowerOfTwo:Ep,ceilPowerOfTwo:Ap,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Cp,normalize:gn,denormalize:Os},oh=class oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var Vt=oh,en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==u||c!==f||d!==m){let g=l*u+c*f+d*m+h*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);p=Math.sin(p*_)/S,a=Math.sin(a*_)/S,l=l*p+u*a,c=c*p+f*a,d=d*p+m*a,h=h*p+x*a}else{l=l*p+u*a,c=c*p+f*a,d=d*p+m*a,h=h*p+x*a;let _=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=_,c*=_,d*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+d*h+l*f-c*u,t[e+1]=l*m+d*u+c*h-a*f,t[e+2]=c*m+d*f+a*u-l*h,t[e+3]=d*m-a*h-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),h=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"YXZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"ZXY":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"ZYX":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"YZX":this._x=u*d*h+c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h-u*f*m;break;case"XZY":this._x=u*d*h-c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h+u*f*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rc.copy(this).projectOnVector(t),this.sub(rc)}reflect(t){return this.sub(rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var F=ah,rc=new F,pu=new en,lh=class lh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],_=s[1],S=s[4],y=s[7],R=s[2],E=s[5],I=s[8];return r[0]=o*x+a*_+l*R,r[3]=o*g+a*S+l*E,r[6]=o*p+a*y+l*I,r[1]=c*x+d*_+h*R,r[4]=c*g+d*S+h*E,r[7]=c*p+d*y+h*I,r[2]=u*x+f*_+m*R,r[5]=u*g+f*S+m*E,r[8]=u*p+f*y+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,u=a*l-d*r,f=c*r-o*l,m=e*h+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*c-d*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oc.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var Qt=lh,oc=new Qt,mu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pp(){let i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var le=Pp();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Es===void 0&&(Es=Mr("canvas")),Es.width=t.width,Es.height=t.height;let s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ip=0,Ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ac(s[o].image)):r.push(ac(s[o]))}else r=ac(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Lp=0,lc=new F,xn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=rn,o=Ji,a=Dn,l=wn,c=i.DEFAULT_ANISOTROPY,d=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=_s(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lc).x}get height(){return this.source.getSize(lc).y}get depth(){return this.source.getSize(lc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Xc;xn.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,R=(p+1)/2,E=(d+u)/4,I=(h+x)/4,v=(m+g)/4;return S>y&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=I/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=v/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=v/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(u-d)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var ye=ch,ca=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new xn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ws(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},br=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Aa=class Aa{constructor(t,e,n,s,r,o,a,l,c,d,h,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,h,u,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,d,h,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*d,f=o*h,m=a*d,x=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*d,f=l*h,m=c*d,x=c*h;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*d,f=l*h,m=c*d,x=c*h;e[0]=u-x*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*d,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*d,f=o*h,m=a*d,x=a*h;e[0]=l*d,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*d,e[4]=x-u*h,e[8]=m*h+f,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*h+m,e[10]=u-x*h}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+x,e[5]=o*d,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*d,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dp,t,Up)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ni.crossVectors(n,Cn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ni.crossVectors(n,Cn)),Ni.normalize(),To.crossVectors(Cn,Ni),s[0]=Ni.x,s[4]=To.x,s[8]=Cn.x,s[1]=Ni.y,s[5]=To.y,s[9]=Cn.y,s[2]=Ni.z,s[6]=To.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],S=n[7],y=n[11],R=n[15],E=s[0],I=s[4],v=s[8],A=s[12],L=s[1],b=s[5],w=s[9],z=s[13],k=s[2],T=s[6],C=s[10],B=s[14],Q=s[3],ot=s[7],ft=s[11],G=s[15];return r[0]=o*E+a*L+l*k+c*Q,r[4]=o*I+a*b+l*T+c*ot,r[8]=o*v+a*w+l*C+c*ft,r[12]=o*A+a*z+l*B+c*G,r[1]=d*E+h*L+u*k+f*Q,r[5]=d*I+h*b+u*T+f*ot,r[9]=d*v+h*w+u*C+f*ft,r[13]=d*A+h*z+u*B+f*G,r[2]=m*E+x*L+g*k+p*Q,r[6]=m*I+x*b+g*T+p*ot,r[10]=m*v+x*w+g*C+p*ft,r[14]=m*A+x*z+g*B+p*G,r[3]=_*E+S*L+y*k+R*Q,r[7]=_*I+S*b+y*T+R*ot,r[11]=_*v+S*w+y*C+R*ft,r[15]=_*A+S*z+y*B+R*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],_=l*f-c*u,S=a*f-c*h,y=a*u-l*h,R=o*f-c*d,E=o*u-l*d,I=o*h-a*d;return e*(x*_-g*S+p*y)-n*(m*_-g*R+p*E)+s*(m*S-x*R+p*I)-r*(m*y-x*E+g*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-n*(r*d-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=e*a-n*o,S=e*l-s*o,y=e*c-r*o,R=n*l-s*a,E=n*c-r*a,I=s*c-r*l,v=d*x-h*m,A=d*g-u*m,L=d*p-f*m,b=h*g-u*x,w=h*p-f*x,z=u*p-f*g,k=_*z-S*w+y*b+R*L-E*A+I*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/k;return t[0]=(a*z-l*w+c*b)*T,t[1]=(s*w-n*z-r*b)*T,t[2]=(x*I-g*E+p*R)*T,t[3]=(u*E-h*I-f*R)*T,t[4]=(l*L-o*z-c*A)*T,t[5]=(e*z-s*L+r*A)*T,t[6]=(g*y-m*I-p*S)*T,t[7]=(d*I-u*y+f*S)*T,t[8]=(o*w-a*L+c*v)*T,t[9]=(n*L-e*w-r*v)*T,t[10]=(m*E-x*y+p*_)*T,t[11]=(h*y-d*E-f*_)*T,t[12]=(a*A-o*b-l*v)*T,t[13]=(e*b-n*A+s*v)*T,t[14]=(x*S-m*R-g*_)*T,t[15]=(d*R-h*S+u*_)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,u=r*c,f=r*d,m=r*h,x=o*d,g=o*h,p=a*h,_=l*c,S=l*d,y=l*h,R=n.x,E=n.y,I=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+y)*R,s[2]=(m-S)*R,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+p))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(m+S)*I,s[9]=(g-_)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=As.set(s[0],s[1],s[2]).length(),a=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);let c=1/o,d=1/a,h=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Wn,l=!1){let c=this.elements,d=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Wn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Vs)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn,l=!1){let c=this.elements,d=2/(e-t),h=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Wn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Vs)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Aa.prototype.isMatrix4=!0;var Kt=Aa,As=new F,Vn=new Kt,Dp=new F(0,0,0),Up=new F(1,1,1),Ni=new F,To=new F,Cn=new F,xu=new Kt,_u=new en,_n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Np=0,vu=new F,Rs=new en,di=new Kt,Eo=new F,cr=new F,Fp=new F,kp=new en,yu=new F(1,0,0),Mu=new F(0,1,0),bu=new F(0,0,1),Su={type:"added"},Bp={type:"removed"},Cs={type:"childadded",child:null},cc={type:"childremoved",child:null},nn=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new _n,n=new en,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Qt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Eo.copy(t):Eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(cr,Eo,this.up):di.lookAt(Eo,cr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(di),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};nn.DEFAULT_UP=new F(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Op={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=th(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=hc(o,r,t+1/3),this.g=hc(o,r,t),this.b=hc(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=Td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return le.workingToColorSpace(hn.copy(this),t),Math.round(de(hn.r*255,0,255))*65536+Math.round(de(hn.g*255,0,255))*256+Math.round(de(hn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=sn){le.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Ao);let n=xr(Fi.h,Ao.h,e),s=xr(Fi.s,Ao.s,e),r=xr(Fi.l,Ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new vt;vt.NAMES=Td;var wr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new F,fi=new F,uc=new F,pi=new F,Ps=new F,Is=new F,wu=new F,dc=new F,fc=new F,pc=new F,mc=new ye,gc=new ye,xc=new ye,Vi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),fi.subVectors(n,e),uc.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(fi),l=Hn.dot(uc),c=fi.dot(fi),d=fi.dot(uc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(c*l-a*d)*u,m=(o*d-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return mc.setScalar(0),gc.setScalar(0),xc.setScalar(0),mc.fromBufferAttribute(t,e),gc.fromBufferAttribute(t,n),xc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(mc,r.x),o.addScaledVector(gc,r.y),o.addScaledVector(xc,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),fi.subVectors(t,e),Hn.cross(fi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Hn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Is.subVectors(r,n),dc.subVectors(t,n);let l=Ps.dot(dc),c=Is.dot(dc);if(l<=0&&c<=0)return e.copy(n);fc.subVectors(t,s);let d=Ps.dot(fc),h=Is.dot(fc);if(d>=0&&h<=d)return e.copy(s);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Ps,o);pc.subVectors(t,r);let f=Ps.dot(pc),m=Is.dot(pc);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Is,a);let g=d*m-f*h;if(g<=0&&h-d>=0&&f-m>=0)return wu.subVectors(r,s),a=(h-d)/(h-d+(f-m)),e.copy(s).addScaledVector(wu,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Ps,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Co.subVectors(this.max,hr),Ls.subVectors(t.a,hr),Ds.subVectors(t.b,hr),Us.subVectors(t.c,hr),ki.subVectors(Ds,Ls),Bi.subVectors(Us,Ds),os.subVectors(Ls,Us);let e=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-os.z,os.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,os.z,0,-os.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-os.y,os.x,0];return!_c(e,Ls,Ds,Us,Co)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,Ls,Ds,Us,Co))?!1:(Po.crossVectors(ki,Bi),e=[Po.x,Po.y,Po.z],_c(e,Ls,Ds,Us,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mi=[new F,new F,new F,new F,new F,new F,new F,new F],Gn=new F,Ro=new Xn,Ls=new F,Ds=new F,Us=new F,ki=new F,Bi=new F,os=new F,hr=new F,Co=new F,Po=new F,as=new F;function _c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){as.fromArray(i,r);let a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),d=n.dot(as);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Ge=new F,Io=new Vt,zp=0,ce=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Io.fromBufferAttribute(this,e),Io.applyMatrix3(t),this.setXY(e,Io.x,Io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Er=class extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vp=new Xn,ur=new F,vc=new F,qn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(vc)),this.expandByPoint(ur.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hp=0,kn=new Kt,yc=new nn,Ns=new F,Pn=new Xn,dr=new Xn,Qe=new F,Ae=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dp(t)?Ar:Er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return yc.lookAt(t),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Pn.min,dr.min),Pn.expandByPoint(Qe),Qe.addVectors(Pn.max,dr.max),Pn.expandByPoint(Qe)):(Pn.expandByPoint(dr.min),Pn.expandByPoint(dr.max))}Pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Qe.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),Qe.add(Ns)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new F,l[v]=new F;let c=new F,d=new F,h=new F,u=new Vt,f=new Vt,m=new Vt,x=new F,g=new F;function p(v,A,L){c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,L),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,L),d.sub(c),h.sub(c),f.sub(u),m.sub(u);let b=1/(f.x*m.y-m.x*f.y);isFinite(b)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(b),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(b),a[v].add(x),a[A].add(x),a[L].add(x),l[v].add(g),l[A].add(g),l[L].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let v=0,A=_.length;v<A;++v){let L=_[v],b=L.start,w=L.count;for(let z=b,k=b+w;z<k;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new F,y=new F,R=new F,E=new F;function I(v){R.fromBufferAttribute(s,v),E.copy(R);let A=a[v];S.copy(A),S.sub(R.multiplyScalar(R.dot(A))).normalize(),y.crossVectors(E,A);let b=y.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,b)}for(let v=0,A=_.length;v<A;++v){let L=_[v],b=L.start,w=L.count;for(let z=b,k=b+w;z<k;z+=3)I(t.getX(z+0)),I(t.getX(z+1)),I(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,h=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*d;for(let p=0;p<d;p++)u[m++]=c[f++]}return new ce(u,d,h)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let u=c[d],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gp=0,yi=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=vi,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=$o,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var gi=new F,Mc=new F,Lo=new F,Oi=new F,bc=new F,Do=new F,Sc=new F,qs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mc.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Mc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Lo),a=Oi.dot(this.direction),l=-Oi.dot(Lo),c=Oi.lengthSq(),d=Math.abs(1-o*o),h,u,f,m;if(d>0)if(h=o*l-a,u=o*a-l,m=r*d,h>=0)if(u>=-m)if(u<=m){let x=1/d;h*=x,u*=x,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mc).addScaledVector(Lo,u),f}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){bc.subVectors(e,t),Do.subVectors(n,t),Sc.crossVectors(bc,Do);let o=this.direction.dot(Sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let l=a*this.direction.dot(Do.crossVectors(Oi,Do));if(l<0)return null;let c=a*this.direction.dot(bc.cross(Oi));if(c<0||l+c>o)return null;let d=-a*Oi.dot(Sc);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tu=new Kt,ls=new qs,Uo=new qn,Eu=new F,No=new F,Fo=new F,ko=new F,wc=new F,Bo=new F,Au=new F,Oo=new F,te=class extends nn{constructor(t=new Ae,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&(wc.fromBufferAttribute(h,t),o?Bo.addScaledVector(wc,d):Bo.addScaledVector(wc.sub(e),d))}e.add(Bo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(Uo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Uo,Eu)===null||ls.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Tu.copy(r).invert(),ls.copy(t.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,R=S;y<R;y+=3){let E=a.getX(y),I=a.getX(y+1),v=a.getX(y+2);s=zo(this,p,t,n,c,d,h,E,I,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);s=zo(this,o,t,n,c,d,h,_,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,R=S;y<R;y+=3){let E=y,I=y+1,v=y+2;s=zo(this,p,t,n,c,d,h,E,I,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=g,S=g+1,y=g+2;s=zo(this,o,t,n,c,d,h,_,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Wp(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:i}}function zo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Fo),i.getVertexPosition(c,ko);let d=Wp(i,t,e,n,No,Fo,ko,Au);if(d){let h=new F;Vi.getBarycoord(Au,No,Fo,ko,h),s&&(d.uv=Vi.getInterpolatedAttribute(s,a,l,c,h,new Vt)),r&&(d.uv1=Vi.getInterpolatedAttribute(r,a,l,c,h,new Vt)),o&&(d.normal=Vi.getInterpolatedAttribute(o,a,l,c,h,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new F,materialIndex:0};Vi.getNormal(No,Fo,ko,u.normal),d.face=u,d.barycoord=h}return d}var fr=new ye,Ru=new ye,Cu=new ye,Xp=new ye,Pu=new Kt,Vo=new F,Tc=new qn,Iu=new Kt,Ec=new qs,Gi=class extends te{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cc,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vo),this.boundingBox.expandByPoint(Vo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vo),this.boundingSphere.expandByPoint(Vo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tc.copy(this.boundingSphere),Tc.applyMatrix4(s),t.ray.intersectsSphere(Tc)!==!1&&(Iu.copy(s).invert(),Ec.copy(t.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&Ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ec)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ye,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Cc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():Gt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;Ru.fromBufferAttribute(s.attributes.skinIndex,t),Cu.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(fr.copy(e),e.set(0,0,0,0)):(fr.set(...e,1),e.set(0,0,0)),fr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Cu.getComponent(r);if(o!==0){let a=Ru.getComponent(r);Pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Xp.copy(fr).applyMatrix4(Pu),o)}}return e.isVector4&&(e.w=fr.w),e.applyMatrix4(this.bindMatrixInverse)}},Wi=class extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ys=class extends xn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=tn,d=tn,h,u){super(null,o,a,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lu=new Kt,qp=new Kt,fs=class i{constructor(t=[],e=[]){this.uuid=_s(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Gt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:qp;Lu.multiplyMatrices(a,e[r]),Lu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Ys(e,t,t,Dn,Ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(Gt("Skeleton: No bone found with UUID:",r),o=new Wi),this.bones.push(o),this.boneInverses.push(new Kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},js=class extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new Kt,Du=new Kt,Ho=[],Uu=new Xn,Yp=new Kt,pr=new te,mr=new qn,Rr=class extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Uu.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),mr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),Du.multiplyMatrices(n,Fs),pr.matrixWorld=Du,pr.raycast(t,Ho);for(let o=0,a=Ho.length;o<a;o++){let l=Ho[o];l.instanceId=r,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ys(new Float32Array(s*this.count),s,this.count,Ua,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ac=new F,jp=new F,Zp=new Qt,ti=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ac.subVectors(n,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new qn,Jp=new Vt(.5,.5),Go=new F,Zs=class{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],_=r[12],S=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-d,p-m,R-_).normalize(),s[1].setComponents(c+o,f+d,p+m,R+_).normalize(),s[2].setComponents(c+a,f+h,p+x,R+S).normalize(),s[3].setComponents(c-a,f-h,p-x,R-S).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,p-g,R-y).normalize();else if(s[4].setComponents(c-l,f-u,p-g,R-y).normalize(),e===Wn)s[5].setComponents(c+l,f+u,p+g,R+y).normalize();else if(e===Vs)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=Jp.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ua=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nu=new Kt,Fc=new qs,Wo=new qn,Xo=new F,Cr=class extends nn{constructor(t=new Ae,e=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;Nu.copy(s).invert(),Fc.copy(t.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Xo.fromBufferAttribute(h,g),Fu(Xo,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=u,x=f;m<x;m++)Xo.fromBufferAttribute(h,m),Fu(Xo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fu(i,t,e,n,s,r,o){let a=Fc.distanceSqToPoint(i);if(a<e){let l=new F;Fc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pr=class extends xn{constructor(t=[],e=Zi,n,s,r,o,a,l,c,d){super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ir=class extends xn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends xn{constructor(t,e,n=Zn,s,r,o,a=tn,l=tn,c,d=ni,h=1){if(d!==ni&&d!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},da=class extends Mi{constructor(t,e=Zn,n=Zi,s,r,o=tn,a=tn,l,c=ni){let d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lr=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},si=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(h,2));function m(x,g,p,_,S,y,R,E,I,v,A){let L=y/I,b=R/v,w=y/2,z=R/2,k=E/2,T=I+1,C=v+1,B=0,Q=0,ot=new F;for(let ft=0;ft<C;ft++){let G=ft*b-z;for(let N=0;N<T;N++){let Y=N*L-w;ot[x]=Y*_,ot[g]=G*S,ot[p]=k,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[g]=0,ot[p]=E>0?1:-1,d.push(ot.x,ot.y,ot.z),h.push(N/I),h.push(1-ft/v),B+=1}}for(let ft=0;ft<v;ft++)for(let G=0;G<I;G++){let N=u+G+T*ft,Y=u+G+T*(ft+1),xt=u+(G+1)+T*(ft+1),ht=u+(G+1)+T*ft;l.push(N,Y,ht),l.push(Y,xt,ht),Q+=6}a.addGroup(f,Q,A),f+=Q,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Dr=class i extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new F,d=new Vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/t+1)/2,d.y=(o[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bi=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],u=[],f=[],m=0,x=[],g=n/2,p=0;_(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function _(){let y=new F,R=new F,E=0,I=(e-t)/n;for(let v=0;v<=r;v++){let A=[],L=v/r,b=L*(e-t)+t;for(let w=0;w<=s;w++){let z=w/s,k=z*l+a,T=Math.sin(k),C=Math.cos(k);R.x=b*T,R.y=-L*n+g,R.z=b*C,h.push(R.x,R.y,R.z),y.set(T,I,C).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-L),A.push(m++)}x.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let L=x[A][v],b=x[A+1][v],w=x[A+1][v+1],z=x[A][v+1];(t>0||A!==0)&&(d.push(L,b,z),E+=3),(e>0||A!==r-1)&&(d.push(b,w,z),E+=3)}c.addGroup(p,E,0),p+=E}function S(y){let R=m,E=new Vt,I=new F,v=0,A=y===!0?t:e,L=y===!0?1:-1;for(let w=1;w<=s;w++)h.push(0,g*L,0),u.push(0,L,0),f.push(.5,.5),m++;let b=m;for(let w=0;w<=s;w++){let k=w/s*l+a,T=Math.cos(k),C=Math.sin(k);I.x=A*C,I.y=g*L,I.z=A*T,h.push(I.x,I.y,I.z),u.push(0,L,0),E.x=T*.5+.5,E.y=C*.5*L+.5,f.push(E.x,E.y),m++}for(let w=0;w<s;w++){let z=R+w,k=b+w;y===!0?d.push(k,k+1,z):d.push(k+1,k,z),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yn=class i extends bi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ps=class i extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new F,y=new F,R=new F;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],y),f(e[E+2],R),l(S,y,R,_)}function l(_,S,y,R){let E=R+1,I=[];for(let v=0;v<=E;v++){I[v]=[];let A=_.clone().lerp(y,v/E),L=S.clone().lerp(y,v/E),b=E-v;for(let w=0;w<=b;w++)w===0&&v===E?I[v][w]=A:I[v][w]=A.clone().lerp(L,w/b)}for(let v=0;v<E;v++)for(let A=0;A<2*(E-v)-1;A++){let L=Math.floor(A/2);A%2===0?(u(I[v][L+1]),u(I[v+1][L]),u(I[v][L])):(u(I[v][L+1]),u(I[v+1][L+1]),u(I[v+1][L]))}}function c(_){let S=new F;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(_),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function d(){let _=new F;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let y=g(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;o.push(y,1-R)}m(),h()}function h(){for(let _=0;_<o.length;_+=6){let S=o[_+0],y=o[_+2],R=o[_+4],E=Math.max(S,y,R),I=Math.min(S,y,R);E>.9&&I<.1&&(S<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,S){let y=_*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function m(){let _=new F,S=new F,y=new F,R=new F,E=new Vt,I=new Vt,v=new Vt;for(let A=0,L=0;A<r.length;A+=9,L+=6){_.set(r[A+0],r[A+1],r[A+2]),S.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),E.set(o[L+0],o[L+1]),I.set(o[L+2],o[L+3]),v.set(o[L+4],o[L+5]),R.copy(_).add(S).add(y).divideScalar(3);let b=g(R);x(E,L+0,_,b),x(I,L+2,S,b),x(v,L+4,y,b)}}function x(_,S,y,R){R<0&&_.x===1&&(o[S]=_.x-1),y.x===0&&y.z===0&&(o[S]=R/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ur=class i extends ps{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Si=class i extends ps{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Nr=class i extends ps{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},vn=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,h=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<d;p++){let _=p*u-o;for(let S=0;S<c;S++){let y=S*h-r;m.push(y,-_,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let S=_+c*p,y=_+c*(p+1),R=_+1+c*(p+1),E=_+1+c*p;f.push(S,y,E),f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var wi=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new F,u=new F,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],S=p/n,y=o+S*a,R=t*Math.cos(y),E=Math.sqrt(t*t-R*R),I=0;p===0&&o===0?I=.5/e:p===n&&l===Math.PI&&(I=-.5/e);for(let v=0;v<=e;v++){let A=v/e,L=s+A*r;h.x=-E*Math.cos(L),h.y=R,h.z=E*Math.sin(L),m.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),g.push(A+I,1-S),_.push(c++)}d.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let S=d[p][_+1],y=d[p][_],R=d[p+1][_],E=d[p+1][_+1];(p!==0||o>0)&&f.push(S,y,E),(p!==n-1||l<Math.PI)&&f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fr=class i extends ps{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ti=class i extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],h=[],u=new F,f=new F,m=new F;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(f,u).normalize(),d.push(m.x,m.y,m.z),h.push(p/s),h.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,_=(s+1)*(x-1)+g-1,S=(s+1)*(x-1)+g,y=(s+1)*x+g;l.push(p,_,y),l.push(_,S,y)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ku(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ku(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function fn(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function ku(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $p(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Ai={clone:vs,merge:fn},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=$p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Js=class extends _e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yn=class extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var fa=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pa=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:r=t,a=2*e-n;break;case Dc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:o=t,l=2*n-e;break;case Dc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,S=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let R=0;R!==a;++R)r[R]=p*o[d+R]+_*o[c+R]+S*o[l+R]+y*o[h+R];return r}},ga=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(s-e),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}},xa=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_a=class extends Xi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this.inTangents,h=this.outTangents;if(!d||!h){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=f*u+m*2,_=h[p],S=h[p+1],y=t*u+m*2,R=d[y],E=d[y+1],I=(n-e)/(s-e),v,A,L,b,w;for(let z=0;z<8;z++){v=I*I,A=v*I,L=1-I,b=L*L,w=b*L;let T=w*e+3*b*I*_+3*L*v*R+A*s-n;if(Math.abs(T)<1e-10)break;let C=3*b*(_-e)+6*L*I*(R-_)+3*v*(s-R);if(Math.abs(C)<1e-10)break;I=I-T/C,I=Math.max(0,Math.min(1,I))}r[m]=w*x+3*b*I*S+3*L*v*E+A*g}return r}},In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qo(e,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qo(t.times,Array),values:qo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break;case Pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&fp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,u=h-n,f=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=aa;var qi=class extends In{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=_r;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};va.prototype.ValueTypeName="color";var ya=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="number";var Ma=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let d=c+a;c!==d;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},kr=class extends In{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends In{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=_r;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="vector";var Sa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new Sa,wa=class{constructor(t){this.manager=t!==void 0?t:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Or=class extends Br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rc=new Kt,Bu=new F,Ou=new F,kc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Vs||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yo=new F,jo=new en,Qn=new F,zr=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yo,jo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,jo,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Yo,jo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,jo,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new F,zu=new Vt,Vu=new Vt,un=class extends zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,zu,Vu),e.subVectors(Vu,zu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ji=class extends zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bc=class extends kc{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ks=-90,Bs=1,Ta=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(ks,Bs,t,e);s.layers=this.layers,this.add(s);let r=new un(ks,Bs,t,e);r.layers=this.layers,this.add(r);let o=new un(ks,Bs,t,e);o.layers=this.layers,this.add(o);let a=new un(ks,Bs,t,e);a.layers=this.layers,this.add(a);let l=new un(ks,Bs,t,e);l.layers=this.layers,this.add(l);let c=new un(ks,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ea=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Vr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=t0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function t0(){this._document.hidden===!1&&this.reset()}var ih="\\[\\]\\.:\\/",e0=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",n0="[^"+ih.replace("\\.","")+"]",i0=/((?:WC+[\/:])*)/.source.replace("WC",sh),s0=/(WCOD+)?/.source.replace("WCOD",n0),r0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),a0=new RegExp("^"+i0+s0+r0+o0+"$"),l0=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(e0,"")}static parseTrackName(t){let e=a0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);l0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Oc;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ay=new Float32Array(1);var hh=class hh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};hh.prototype.isMatrix2=!0;var zc=hh;function rh(i,t,e,n){let s=c0(n);switch(e){case Jc:return i*t;case Ua:return i*t/s.components*s.byteLength;case Na:return i*t/s.components*s.byteLength;case Ki:return i*t*2/s.components*s.byteLength;case Fa:return i*t*2/s.components*s.byteLength;case $c:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case Va:return Math.max(i,16)*Math.max(t,8)/4;case Ba:case za:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Ga:case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case to:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ll:case cl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eo:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c0(i){switch(i){case wn:case qc:return{byteLength:1,components:1};case Qs:case Yc:case dn:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case Zn:case Ia:case Ln:return{byteLength:4,components:1};case jc:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function g0(i){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let d=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<h.length;f++){let m=h[u],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,h[u]=x)}h.length=u+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Og=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:x0,alphahash_pars_fragment:_0,alphamap_fragment:v0,alphamap_pars_fragment:y0,alphatest_fragment:M0,alphatest_pars_fragment:b0,aomap_fragment:S0,aomap_pars_fragment:w0,batching_pars_vertex:T0,batching_vertex:E0,begin_vertex:A0,beginnormal_vertex:R0,bsdfs:C0,iridescence_fragment:P0,bumpmap_pars_fragment:I0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:N0,color_fragment:F0,color_pars_fragment:k0,color_pars_vertex:B0,color_vertex:O0,common:z0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:H0,displacementmap_pars_vertex:G0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:j0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:$0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:cm,envmap_vertex:Q0,fog_vertex:tm,fog_pars_vertex:em,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:om,lights_lambert_pars_fragment:am,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:xm,lights_fragment_end:_m,lightprobes_pars_fragment:vm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Sm,map_fragment:wm,map_pars_fragment:Tm,map_particle_fragment:Em,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Fm,normal_pars_fragment:km,normal_pars_vertex:Bm,normal_vertex:Om,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:jm,dithering_fragment:Zm,dithering_pars_fragment:Jm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:xg,background_frag:_g,backgroundCube_vert:vg,backgroundCube_frag:yg,cube_vert:Mg,cube_frag:bg,depth_vert:Sg,depth_frag:wg,distance_vert:Tg,distance_frag:Eg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Ig,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:Ng,meshmatcap_frag:Fg,meshnormal_vert:kg,meshnormal_frag:Bg,meshphong_vert:Og,meshphong_frag:zg,meshphysical_vert:Vg,meshphysical_frag:Hg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:jg,sprite_vert:Zg,sprite_frag:Jg},At={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ai={basic:{uniforms:fn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:fn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:fn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:fn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:fn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new vt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:fn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:fn([At.points,At.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:fn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:fn([At.common,At.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:fn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:fn([At.sprite,At.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:fn([At.common,At.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:fn([At.lights,At.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ai.physical={uniforms:fn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var xl={r:0,b:0,g:0},$g=new Kt,Jd=new Qt;Jd.set(-1,0,0,0,1,0,0,0,1);function Kg(i,t,e,n,s,r){let o=new vt(0),a=s===!0?0:1,l,c,d=null,h=0,u=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let y=_.backgroundBlurriness>0;S=t.get(S,y)}return S}function m(_){let S=!1,y=f(_);y===null?g(o,a):y&&y.isColor&&(g(y,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===jr)?(c===void 0&&(c=new te(new si(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:vs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=le.getTransfer(y.colorSpace)!==ve,(d!==y||h!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new te(new vn(2,2),new _e({name:"BackgroundMaterial",uniforms:vs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(xl,nh(i)),e.buffers.color.setClear(xl.r,xl.g,xl.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Qg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,w,z,k,T){let C=!1,B=h(b,k,z,w);r!==B&&(r=B,c(r.object)),C=f(b,k,z,T),C&&m(b,k,z,T),T!==null&&t.update(T,i.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,y(b,w,z,k),T!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(T).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function h(b,w,z,k){let T=k.wireframe===!0,C=n[w.id];C===void 0&&(C={},n[w.id]=C);let B=b.isInstancedMesh===!0?b.id:0,Q=C[B];Q===void 0&&(Q={},C[B]=Q);let ot=Q[z.id];ot===void 0&&(ot={},Q[z.id]=ot);let ft=ot[T];return ft===void 0&&(ft=u(l()),ot[T]=ft),ft}function u(b){let w=[],z=[],k=[];for(let T=0;T<e;T++)w[T]=0,z[T]=0,k[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,w,z,k){let T=r.attributes,C=w.attributes,B=0,Q=z.getAttributes();for(let ot in Q)if(Q[ot].location>=0){let G=T[ot],N=C[ot];if(N===void 0&&(ot==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),ot==="instanceColor"&&b.instanceColor&&(N=b.instanceColor)),G===void 0||G.attribute!==N||N&&G.data!==N.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function m(b,w,z,k){let T={},C=w.attributes,B=0,Q=z.getAttributes();for(let ot in Q)if(Q[ot].location>=0){let G=C[ot];G===void 0&&(ot==="instanceMatrix"&&b.instanceMatrix&&(G=b.instanceMatrix),ot==="instanceColor"&&b.instanceColor&&(G=b.instanceColor));let N={};N.attribute=G,G&&G.data&&(N.data=G.data),T[ot]=N,B++}r.attributes=T,r.attributesNum=B,r.index=k}function x(){let b=r.newAttributes;for(let w=0,z=b.length;w<z;w++)b[w]=0}function g(b){p(b,0)}function p(b,w){let z=r.newAttributes,k=r.enabledAttributes,T=r.attributeDivisors;z[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),T[b]!==w&&(i.vertexAttribDivisor(b,w),T[b]=w)}function _(){let b=r.newAttributes,w=r.enabledAttributes;for(let z=0,k=w.length;z<k;z++)w[z]!==b[z]&&(i.disableVertexAttribArray(z),w[z]=0)}function S(b,w,z,k,T,C,B){B===!0?i.vertexAttribIPointer(b,w,z,T,C):i.vertexAttribPointer(b,w,z,k,T,C)}function y(b,w,z,k){x();let T=k.attributes,C=z.getAttributes(),B=w.defaultAttributeValues;for(let Q in C){let ot=C[Q];if(ot.location>=0){let ft=T[Q];if(ft===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),ft!==void 0){let G=ft.normalized,N=ft.itemSize,Y=t.get(ft);if(Y===void 0)continue;let xt=Y.buffer,ht=Y.type,W=Y.bytesPerElement,$=ht===i.INT||ht===i.UNSIGNED_INT||ft.gpuType===Ia;if(ft.isInterleavedBufferAttribute){let et=ft.data,Mt=et.stride,Ft=ft.offset;if(et.isInstancedInterleavedBuffer){for(let Pt=0;Pt<ot.locationSize;Pt++)p(ot.location+Pt,et.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Pt=0;Pt<ot.locationSize;Pt++)g(ot.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Pt=0;Pt<ot.locationSize;Pt++)S(ot.location+Pt,N/ot.locationSize,ht,G,Mt*W,(Ft+N/ot.locationSize*Pt)*W,$)}else{if(ft.isInstancedBufferAttribute){for(let et=0;et<ot.locationSize;et++)p(ot.location+et,ft.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let et=0;et<ot.locationSize;et++)g(ot.location+et);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let et=0;et<ot.locationSize;et++)S(ot.location+et,N/ot.locationSize,ht,G,N*W,N/ot.locationSize*et*W,$)}}else if(B!==void 0){let G=B[Q];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(ot.location,G);break;case 3:i.vertexAttrib3fv(ot.location,G);break;case 4:i.vertexAttrib4fv(ot.location,G);break;default:i.vertexAttrib1fv(ot.location,G)}}}}_()}function R(){A();for(let b in n){let w=n[b];for(let z in w){let k=w[z];for(let T in k){let C=k[T];for(let B in C)d(C[B].object),delete C[B];delete k[T]}}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let w=n[b.id];for(let z in w){let k=w[z];for(let T in k){let C=k[T];for(let B in C)d(C[B].object),delete C[B];delete k[T]}}delete n[b.id]}function I(b){for(let w in n){let z=n[w];for(let k in z){let T=z[k];if(T[b.id]===void 0)continue;let C=T[b.id];for(let B in C)d(C[B].object),delete C[B];delete T[b.id]}}}function v(b){for(let w in n){let z=n[w],k=b.isInstancedMesh===!0?b.id:0,T=z[k];if(T!==void 0){for(let C in T){let B=T[C];for(let Q in B)d(B[Q].object),delete B[Q];delete T[C]}delete z[k],Object.keys(z).length===0&&delete n[w]}}}function A(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function tx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),e.update(c,n,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let v=I===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ln&&!v)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(Gt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,maxSamples:R,samples:E}}function nx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ti,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?d(null):c();else{let _=r?0:n,S=_*4,y=p.clippingState||null;l.value=y,y=d(m,u,S,f);for(let R=0;R!==S;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==x;++S,y+=4)o.copy(h[S]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Qi=4,Ad=[.125,.215,.35,.446,.526,.582],ys=20,ix=256,no=new ji,Rd=new vt,uh=null,dh=0,fh=0,ph=!1,sx=new F,vl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=sx}=r;uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,dh,fh),this._renderer.xr.enabled=ph,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:dn,format:Dn,colorSpace:vr,depthBuffer:!1},s=Cd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rx(r)),this._blurMaterial=ax(r,t,e),this._ggxMaterial=ox(r,t,e)}return s}_compileMaterial(t){let e=new te(new Ae,t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,n,s,r){let l=new un(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Rd),h.toneMapping=jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new te(new si,new Ye({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,p=!0):(g.color.copy(Rd),p=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[S]));let R=this._cubeSize;er(s,y*R,S>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(x,l),h.render(t,l)}h.toneMapping=f,h.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zi||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,no)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,f=h*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Qi?n-m+Qi:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,er(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,no),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,er(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,no)}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");let d=3,h=this._lodMeshes[s];h.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),x=r/m,g=isFinite(r)?1+Math.floor(d*x):ys;g>ys&&Gt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);let p=[],_=0;for(let I=0;I<ys;++I){let v=I/x,A=Math.exp(-v*v/2);p.push(A),I===0?_+=A:I<g&&(_+=2*A)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=m,u.mipInt.value=S-n;let y=this._sizeLods[s],R=3*y*(s>S-Qi?s-S+Qi:0),E=4*(this._cubeSize-y);er(e,R,E,3*y,2*y),l.setRenderTarget(e),l.render(h,no)}};function rx(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+Ad.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Qi?l=Ad[o-i+Qi-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*f),S=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){let I=E%3*2/3-1,v=E>2?0:-1,A=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];_.set(A,x*m*E),S.set(u,g*m*E);let L=[E,E,E,E,E,E];y.set(L,p*m*E)}let R=new Ae;R.setAttribute("position",new ce(_,x)),R.setAttribute("uv",new ce(S,g)),R.setAttribute("faceIndex",new ce(y,p)),n.push(new te(R,null)),s>Qi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Cd(i,t,e){let n=new qe(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ox(i,t,e){return new _e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ax(i,t,e){let n=new Float32Array(ys),s=new F(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Pd(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Id(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var yl=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new si(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Bn});r.uniforms.tEquirect.value=e;let o=new te(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=rn),new Ta(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function lx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ra||f===Ca)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new yl(m.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Ra||f===Ca,x=f===Zi||f===xs;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new vl(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new vl(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function a(u,f){return f===Ra?u.mapping=Zi:f===Ca&&(u.mapping=xs),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function cx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function hx(i,t,e,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(h){let u=[],f=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let S=0,y=_.length;S<y;S+=3){let R=_[S+0],E=_[S+1],I=_[S+2];u.push(R,E,E,I,I,R)}}else{let _=m.array;x=m.version;for(let S=0,y=_.length/3-1;S<y;S+=3){let R=S+0,E=S+1,I=S+2;u.push(R,E,E,I,I,R)}}let g=new(m.count>=65535?Ar:Er)(u,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function d(h){let u=r.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function ux(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*o),e.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,h*o,f),e.update(u,n,f))}function d(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function dx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fx(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==h){let A=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*R*4*h),I=new br(E,y,R,h);I.type=Ln,I.needsUpdate=!0;let v=S*4;for(let L=0;L<h;L++){let b=g[L],w=p[L],z=_[L],k=y*R*4*L;for(let T=0;T<b.count;T++){let C=T*v;f===!0&&(s.fromBufferAttribute(b,T),E[k+C+0]=s.x,E[k+C+1]=s.y,E[k+C+2]=s.z,E[k+C+3]=0),m===!0&&(s.fromBufferAttribute(w,T),E[k+C+4]=s.x,E[k+C+5]=s.y,E[k+C+6]=s.z,E[k+C+7]=0),x===!0&&(s.fromBufferAttribute(z,T),E[k+C+8]=s.x,E[k+C+9]=s.y,E[k+C+10]=s.z,E[k+C+11]=z.itemSize===4?s.w:1)}}u={count:h,texture:I,size:new Vt(y,R)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function px(i,t,e,n,s){let r=new WeakMap;function o(c){let d=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var mx={[Hr]:"LINEAR_TONE_MAPPING",[Gr]:"REINHARD_TONE_MAPPING",[Wr]:"CINEON_TONE_MAPPING",[gs]:"ACES_FILMIC_TONE_MAPPING",[qr]:"AGX_TONE_MAPPING",[Yr]:"NEUTRAL_TONE_MAPPING",[Xr]:"CUSTOM_TONE_MAPPING"};function gx(i,t,e,n,s,r){let o=new qe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Mi(t,e):void 0}),a=new qe(t,e,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new Ae;l.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new oe([0,2,0,0,2,0],2));let c=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new te(l,c),h=new ji(-1,1,1,-1,0,1),u=null,f=null,m=!1,x,g=null,p=[],_=!1;this.setSize=function(S,y){o.setSize(S,y),a.setSize(S,y);for(let R=0;R<p.length;R++){let E=p[R];E.setSize&&E.setSize(S,y)}},this.setEffects=function(S){p=S,_=p.length>0&&p[0].isRenderPass===!0;let y=o.width,R=o.height;for(let E=0;E<p.length;E++){let I=p[E];I.setSize&&I.setSize(y,R)}},this.begin=function(S,y){if(m||S.toneMapping===jn&&p.length===0)return!1;if(g=y,y!==null){let R=y.width,E=y.height;(o.width!==R||o.height!==E)&&this.setSize(R,E)}return _===!1&&S.setRenderTarget(o),x=S.toneMapping,S.toneMapping=jn,!0},this.hasRenderPass=function(){return _},this.end=function(S,y){S.toneMapping=x,m=!0;let R=o,E=a;for(let I=0;I<p.length;I++){let v=p[I];if(v.enabled!==!1&&(v.render(S,E,R,y),v.needsSwap!==!1)){let A=R;R=E,E=A}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},le.getTransfer(u)===ve&&(c.defines.SRGB_TRANSFER="");let I=mx[f];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,S.setRenderTarget(g),S.render(d,h),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var $d=new xn,xh=new Mi(1,1),Kd=new br,Qd=new ha,tf=new Pr,Ld=[],Dd=[],Ud=new Float32Array(16),Nd=new Float32Array(9),Fd=new Float32Array(4);function ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sl(i,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function Mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),Ze(e,n)}}function bx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),Ze(e,n)}}function Sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,n))return;Ud.set(n),i.uniformMatrix4fv(this.addr,!1,Ud),Ze(e,n)}}function wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function Rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function Lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=e.isReversedDepthBuffer()?gl:ml,r=xh):r=$d,e.setTexture2D(t||r,s)}function Dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function Ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function Nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kd,s)}function Fx(i){switch(i){case 5126:return xx;case 35664:return _x;case 35665:return vx;case 35666:return yx;case 35674:return Mx;case 35675:return bx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}function kx(i,t){i.uniform1fv(this.addr,t)}function Bx(i,t){let e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function Ox(i,t){let e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function zx(i,t){let e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function Vx(i,t){let e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hx(i,t){let e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gx(i,t){let e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wx(i,t){i.uniform1iv(this.addr,t)}function Xx(i,t){i.uniform2iv(this.addr,t)}function qx(i,t){i.uniform3iv(this.addr,t)}function Yx(i,t){i.uniform4iv(this.addr,t)}function jx(i,t){i.uniform1uiv(this.addr,t)}function Zx(i,t){i.uniform2uiv(this.addr,t)}function Jx(i,t){i.uniform3uiv(this.addr,t)}function $x(i,t){i.uniform4uiv(this.addr,t)}function Kx(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=xh:o=$d;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Qx(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qd,r[o])}function t_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tf,r[o])}function e_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function n_(i){switch(i){case 5126:return kx;case 35664:return Bx;case 35665:return Ox;case 35666:return zx;case 35674:return Vx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return jx;case 36294:return Zx;case 36295:return Jx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}var _h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}},vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}},yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},mh=/(\w+)(\])?(\[|\.)?/g;function kd(i,t){i.seq.push(t),i.map[t.id]=t}function i_(i,t,e){let n=i.name,s=n.length;for(mh.lastIndex=0;;){let r=mh.exec(n),o=mh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kd(e,c===void 0?new _h(a,i,t):new vh(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new yh(a),kd(e,h)),e=h}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);i_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var s_=37297,r_=0;function o_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Od=new Qt;function a_(i){le._getMatrix(Od,le.workingColorSpace,i);let t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+o_(i.getShaderSource(t),a)}else return r}function l_(i,t){let e=a_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var c_={[Hr]:"Linear",[Gr]:"Reinhard",[Wr]:"Cineon",[gs]:"ACESFilmic",[qr]:"AgX",[Yr]:"Neutral",[Xr]:"Custom"};function h_(i,t){let e=c_[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _l=new F;function u_(){le.getLuminanceCoefficients(_l);let i=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function f_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function so(i){return i!==""}function Vd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(m_,x_)}var g_=new Map;function x_(i,t){let e=se[t];if(e===void 0){let n=g_.get(t);if(n!==void 0)e=se[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mh(e)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(__,v_)}function v_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var y_={[ms]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function M_(i){return y_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b_={[Zi]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function S_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":b_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var w_={[xs]:"ENVMAP_MODE_REFRACTION"};function T_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":w_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E_={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function A_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E_[i.combine]||"ENVMAP_BLENDING_NONE"}function R_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function C_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=M_(e),c=S_(e),d=T_(e),h=A_(e),u=R_(e),f=d_(e),m=f_(r),x=s.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(so).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(so).join(`
`),p.length>0&&(p+=`
`)):(g=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?se.tonemapping_pars_fragment:"",e.toneMapping!==jn?h_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,l_("linearToOutputTexel",e.outputColorSpace),u_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(so).join(`
`)),o=Mh(o),o=Vd(o,e),o=Hd(o,e),a=Mh(a),a=Vd(a,e),a=Hd(a,e),o=Gd(o),a=Gd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+g+o,y=_+p+a,R=Bd(s,s.VERTEX_SHADER,S),E=Bd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(b){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(R)||"",k=s.getShaderInfoLog(E)||"",T=w.trim(),C=z.trim(),B=k.trim(),Q=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,E);else{let ft=zd(s,R,"vertex"),G=zd(s,E,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+T+`
`+ft+`
`+G)}else T!==""?Gt("WebGLProgram: Program Info Log:",T):(C===""||B==="")&&(ot=!1);ot&&(b.diagnostics={runnable:Q,programLog:T,vertexShader:{log:C,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(R),s.deleteShader(E),v=new nr(s,x),A=p_(s,x)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,s_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}var P_=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sh(t),e.set(t,n)),n}},Sh=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};function I_(i){return i===Ki||i===to||i===eo}function L_(i,t,e,n,s,r){let o=new Sr,a=new bh,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,A,L,b,w,z){let k=b.fog,T=w.geometry,C=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?b.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=t.get(v.envMap||C,B),ot=Q&&Q.mapping===jr?Q.image.height:null,ft=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let G=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,N=G!==void 0?G.length:0,Y=0;T.morphAttributes.position!==void 0&&(Y=1),T.morphAttributes.normal!==void 0&&(Y=2),T.morphAttributes.color!==void 0&&(Y=3);let xt,ht,W,$;if(ft){let Nt=ai[ft];xt=Nt.vertexShader,ht=Nt.fragmentShader}else{xt=v.vertexShader,ht=v.fragmentShader;let Nt=a.getVertexShaderStage(v),Fe=a.getFragmentShaderStage(v);a.update(v,Nt,Fe),W=Nt.id,$=Fe.id}let et=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Ft=w.isInstancedMesh===!0,Pt=w.isBatchedMesh===!0,ne=!!v.map,Dt=!!v.matcap,qt=!!Q,$t=!!v.aoMap,Zt=!!v.lightMap,ge=!!v.bumpMap&&v.wireframe===!1,Pe=!!v.normalMap,Ie=!!v.displacementMap,Le=!!v.emissiveMap,we=!!v.metalnessMap,be=!!v.roughnessMap,V=v.anisotropy>0,mn=v.clearcoat>0,he=v.dispersion>0,D=v.iridescence>0,M=v.sheen>0,X=v.transmission>0,J=V&&!!v.anisotropyMap,nt=mn&&!!v.clearcoatMap,_t=mn&&!!v.clearcoatNormalMap,St=mn&&!!v.clearcoatRoughnessMap,rt=D&&!!v.iridescenceMap,ct=D&&!!v.iridescenceThicknessMap,wt=M&&!!v.sheenColorMap,Bt=M&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,tt=!!v.specularColorMap,q=!!v.specularIntensityMap,at=X&&!!v.transmissionMap,gt=X&&!!v.thicknessMap,O=!!v.gradientMap,pt=!!v.alphaMap,it=v.alphaTest>0,bt=!!v.alphaHash,Et=!!v.extensions,ut=jn;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ut=i.toneMapping);let kt={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:xt,fragmentShader:ht,defines:v.defines,customVertexShaderID:W,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Pt,batchingColor:Pt&&w._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&w.instanceColor!==null,instancingMorph:Ft&&w.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ne,matcap:Dt,envMap:qt,envMapMode:qt&&Q.mapping,envMapCubeUVHeight:ot,aoMap:$t,lightMap:Zt,bumpMap:ge,normalMap:Pe,displacementMap:Ie,emissiveMap:Le,normalMapObjectSpace:Pe&&v.normalMapType===pd,normalMapTangentSpace:Pe&&v.normalMapType===pl,packedNormalMap:Pe&&v.normalMapType===pl&&I_(v.normalMap.format),metalnessMap:we,roughnessMap:be,anisotropy:V,anisotropyMap:J,clearcoat:mn,clearcoatMap:nt,clearcoatNormalMap:_t,clearcoatRoughnessMap:St,dispersion:he,iridescence:D,iridescenceMap:rt,iridescenceThicknessMap:ct,sheen:M,sheenColorMap:wt,sheenRoughnessMap:Bt,specularMap:Tt,specularColorMap:tt,specularIntensityMap:q,transmission:X,transmissionMap:at,thicknessMap:gt,gradientMap:O,opaque:v.transparent===!1&&v.blending===vi&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:it,alphaHash:bt,combine:v.combine,mapUv:ne&&m(v.map.channel),aoMapUv:$t&&m(v.aoMap.channel),lightMapUv:Zt&&m(v.lightMap.channel),bumpMapUv:ge&&m(v.bumpMap.channel),normalMapUv:Pe&&m(v.normalMap.channel),displacementMapUv:Ie&&m(v.displacementMap.channel),emissiveMapUv:Le&&m(v.emissiveMap.channel),metalnessMapUv:we&&m(v.metalnessMap.channel),roughnessMapUv:be&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:nt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&m(v.sheenRoughnessMap.channel),specularMapUv:Tt&&m(v.specularMap.channel),specularColorMapUv:tt&&m(v.specularColorMap.channel),specularIntensityMapUv:q&&m(v.specularIntensityMap.channel),transmissionMapUv:at&&m(v.transmissionMap.channel),thicknessMapUv:gt&&m(v.thicknessMap.channel),alphaMapUv:pt&&m(v.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(Pe||V),vertexNormals:!!T.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!T.attributes.uv&&(ne||pt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||T.attributes.normal===void 0&&Pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Mt,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Y,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:ne&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:Le&&v.emissiveMap.isVideoTexture===!0&&le.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===We,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Et&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&v.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)A.push(L),A.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(A,v),_(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function S(v){let A=f[v.type],L;if(A){let b=ai[A];L=Ai.clone(b.uniforms)}else L=v.uniforms;return L}function y(v,A){let L=d.get(A);return L!==void 0?++L.usedTimes:(L=new C_(i,A,v,s),c.push(L),d.set(A,L)),L}function R(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:I}}function D_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function U_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,g,p){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},i[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=p),t++,_}function l(u,f,m,x,g,p){let _=a(u,f,m,x,g,p);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):e.push(_)}function c(u,f,m,x,g,p){let _=a(u,f,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function d(u,f,m){e.length>1&&e.sort(u||U_),n.length>1&&n.sort(f||Xd),s.length>1&&s.sort(f||Xd),m&&(e.reverse(),n.reverse(),s.reverse())}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function N_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new qd,i.set(n,[o])):s>=r.length?(o=new qd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function F_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new vt};break;case"SpotLight":e={position:new F,direction:new F,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var B_=0;function O_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z_(i){let t=new F_,e=k_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Kt,o=new Kt;function a(c){let d=0,h=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,_=0,S=0,y=0,R=0,E=0,I=0;c.sort(O_);for(let A=0,L=c.length;A<L;A++){let b=c[A],w=b.color,z=b.intensity,k=b.distance,T=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Ki?T=b.shadow.map.texture:T=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)d+=w.r*z,h+=w.g*z,u+=w.b*z;else if(b.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(b.sh.coefficients[C],z);I++}else if(b.isDirectionalLight){let C=t.get(b);if(C.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let B=b.shadow,Q=e.get(b);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=T,n.directionalShadowMatrix[f]=b.shadow.matrix,_++}n.directional[f]=C,f++}else if(b.isSpotLight){let C=t.get(b);C.position.setFromMatrixPosition(b.matrixWorld),C.color.copy(w).multiplyScalar(z),C.distance=k,C.coneCos=Math.cos(b.angle),C.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),C.decay=b.decay,n.spot[x]=C;let B=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,B.updateMatrices(b),b.castShadow&&E++),n.spotLightMatrix[x]=B.matrix,b.castShadow){let Q=e.get(b);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=T,y++}x++}else if(b.isRectAreaLight){let C=t.get(b);C.color.copy(w).multiplyScalar(z),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=C,g++}else if(b.isPointLight){let C=t.get(b);if(C.color.copy(b.color).multiplyScalar(b.intensity),C.distance=b.distance,C.decay=b.decay,b.castShadow){let B=b.shadow,Q=e.get(b);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=T,n.pointShadowMatrix[m]=b.shadow.matrix,S++}n.point[m]=C,m++}else if(b.isHemisphereLight){let C=t.get(b);C.skyColor.copy(b.color).multiplyScalar(z),C.groundColor.copy(b.groundColor).multiplyScalar(z),n.hemi[p]=C,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;let v=n.hash;(v.directionalLength!==f||v.pointLength!==m||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==_||v.numPointShadows!==S||v.numSpotShadows!==y||v.numSpotMaps!==R||v.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,v.directionalLength=f,v.pointLength=m,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=_,v.numPointShadows=S,v.numSpotShadows=y,v.numSpotMaps=R,v.numLightProbes=I,n.version=B_++)}function l(c,d){let h=0,u=0,f=0,m=0,x=0,g=d.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Yd(i){let t=new z_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function d(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function V_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yd(i),t.set(s,[a])):r>=o.length?(a=new Yd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,W_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],X_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],jd=new Kt,io=new F,gh=new F;function q_(i,t,e){let n=new Zs,s=new Vt,r=new Vt,o=new ye,a=new fa,l=new pa,c={},d=e.maxTextureSize,h={[_i]:on,[on]:_i,[We]:We},u=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ae;m.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let p=this.type;this.render=function(E,I,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Wu&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ms);let A=i.getRenderTarget(),L=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Bn),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let z=p!==this.type;z&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(T=>T.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,T=E.length;k<T;k++){let C=E[k],B=C.shadow;if(B===void 0){Gt("WebGLShadowMap:",C,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Q=B.getFrameExtents();s.multiply(Q),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y));let ot=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ot,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ks){if(C.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new qe(s.x,s.y,{format:Ki,type:dn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),B.map.texture.name=C.name+".shadowMap",B.map.depthTexture=new Mi(s.x,s.y,Ln),B.map.depthTexture.name=C.name+".shadowMapDepth",B.map.depthTexture.format=ni,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn}else C.isPointLight?(B.map=new yl(s.x),B.map.depthTexture=new da(s.x,Zn)):(B.map=new qe(s.x,s.y),B.map.depthTexture=new Mi(s.x,s.y,Zn)),B.map.depthTexture.name=C.name+".shadowMap",B.map.depthTexture.format=ni,this.type===ms?(B.map.depthTexture.compareFunction=ot?gl:ml,B.map.depthTexture.minFilter=rn,B.map.depthTexture.magFilter=rn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn);B.camera.updateProjectionMatrix()}let ft=B.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<ft;G++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,G),i.clear();else{G===0&&(i.setRenderTarget(B.map),i.clear());let N=B.getViewport(G);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),w.viewport(o)}if(C.isPointLight){let N=B.camera,Y=B.matrix,xt=C.distance||N.far;xt!==N.far&&(N.far=xt,N.updateProjectionMatrix()),io.setFromMatrixPosition(C.matrixWorld),N.position.copy(io),gh.copy(N.position),gh.add(W_[G]),N.up.copy(X_[G]),N.lookAt(gh),N.updateMatrixWorld(),Y.makeTranslation(-io.x,-io.y,-io.z),jd.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),B._frustum.setFromProjectionMatrix(jd,N.coordinateSystem,N.reversedDepth)}else B.updateMatrices(C);n=B.getFrustum(),y(I,v,B.camera,C,this.type)}B.isPointLightShadow!==!0&&this.type===Ks&&_(B,v),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,L,b)};function _(E,I){let v=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qe(s.x,s.y,{format:Ki,type:dn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,v,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,v,f,x,null)}function S(E,I,v,A){let L=null,b=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)L=b;else if(L=v.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let w=L.uuid,z=I.uuid,k=c[w];k===void 0&&(k={},c[w]=k);let T=k[z];T===void 0&&(T=L.clone(),k[z]=T,I.addEventListener("dispose",R)),L=T}if(L.visible=I.visible,L.wireframe=I.wireframe,A===Ks?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:h[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let w=i.properties.get(L);w.light=v}return L}function y(E,I,v,A,L){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ks)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let z=t.update(E),k=E.material;if(Array.isArray(k)){let T=z.groups;for(let C=0,B=T.length;C<B;C++){let Q=T[C],ot=k[Q.materialIndex];if(ot&&ot.visible){let ft=S(E,ot,A,L);E.onBeforeShadow(i,E,I,v,z,ft,Q),i.renderBufferDirect(v,null,z,ft,E,Q),E.onAfterShadow(i,E,I,v,z,ft,Q)}}}else if(k.visible){let T=S(E,k,A,L);E.onBeforeShadow(i,E,I,v,z,T,null),i.renderBufferDirect(v,null,z,T,E,null),E.onAfterShadow(i,E,I,v,z,T,null)}}let w=E.children;for(let z=0,k=w.length;z<k;z++)y(w[z],I,v,A,L)}function R(E){E.target.removeEventListener("dispose",R);for(let v in c){let A=c[v],L=E.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function Y_(i,t){function e(){let O=!1,pt=new ye,it=null,bt=new ye(0,0,0,0);return{setMask:function(Et){it!==Et&&!O&&(i.colorMask(Et,Et,Et,Et),it=Et)},setLocked:function(Et){O=Et},setClear:function(Et,ut,kt,Nt,Fe){Fe===!0&&(Et*=Nt,ut*=Nt,kt*=Nt),pt.set(Et,ut,kt,Nt),bt.equals(pt)===!1&&(i.clearColor(Et,ut,kt,Nt),bt.copy(pt))},reset:function(){O=!1,it=null,bt.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,it=null,bt=null,Et=null;return{setReversed:function(ut){if(pt!==ut){let kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),pt=ut;let Nt=Et;Et=null,this.setClear(Nt)}},getReversed:function(){return pt},setTest:function(ut){ut?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ut){it!==ut&&!O&&(i.depthMask(ut),it=ut)},setFunc:function(ut){if(pt&&(ut=wd[ut]),bt!==ut){switch(ut){case Ko:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=ut}},setLocked:function(ut){O=ut},setClear:function(ut){Et!==ut&&(Et=ut,pt&&(ut=1-ut),i.clearDepth(ut))},reset:function(){O=!1,it=null,bt=null,Et=null,pt=!1}}}function s(){let O=!1,pt=null,it=null,bt=null,Et=null,ut=null,kt=null,Nt=null,Fe=null;return{setTest:function(Re){O||(Re?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(Re){pt!==Re&&!O&&(i.stencilMask(Re),pt=Re)},setFunc:function(Re,Jn,$n){(it!==Re||bt!==Jn||Et!==$n)&&(i.stencilFunc(Re,Jn,$n),it=Re,bt=Jn,Et=$n)},setOp:function(Re,Jn,$n){(ut!==Re||kt!==Jn||Nt!==$n)&&(i.stencilOp(Re,Jn,$n),ut=Re,kt=Jn,Nt=$n)},setLocked:function(Re){O=Re},setClear:function(Re){Fe!==Re&&(i.clearStencil(Re),Fe=Re)},reset:function(){O=!1,pt=null,it=null,bt=null,Et=null,ut=null,kt=null,Nt=null,Fe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,y=null,R=null,E=null,I=null,v=new vt(0,0,0),A=0,L=!1,b=null,w=null,z=null,k=null,T=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Q=0,ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ot)[1]),B=Q>=1):ot.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),B=Q>=2);let ft=null,G={},N=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),xt=new ye().fromArray(N),ht=new ye().fromArray(Y);function W(O,pt,it,bt){let Et=new Uint8Array(4),ut=i.createTexture();i.bindTexture(O,ut),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<it;kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(pt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ut}let $={};$[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(ds),ge(!1),Pe(Vc),et(i.CULL_FACE),$t(Bn);function et(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Mt(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Ft(O,pt){return u[O]!==pt?(i.bindFramebuffer(O,pt),u[O]=pt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Pt(O,pt){let it=m,bt=!1;if(O){it=f.get(pt),it===void 0&&(it=[],f.set(pt,it));let Et=O.textures;if(it.length!==Et.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,kt=Et.length;ut<kt;ut++)it[ut]=i.COLOR_ATTACHMENT0+ut;it.length=Et.length,bt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,bt=!0);bt&&i.drawBuffers(it)}function ne(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let Dt={[Hi]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};Dt[ju]=i.MIN,Dt[Zu]=i.MAX;let qt={[Ju]:i.ZERO,[$u]:i.ONE,[Ku]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[sd]:i.SRC_ALPHA_SATURATE,[nd]:i.DST_COLOR,[td]:i.DST_ALPHA,[Qu]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[id]:i.ONE_MINUS_DST_COLOR,[ed]:i.ONE_MINUS_DST_ALPHA,[rd]:i.CONSTANT_COLOR,[od]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[ld]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(O,pt,it,bt,Et,ut,kt,Nt,Fe,Re){if(O===Bn){g===!0&&(Mt(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),O!==Xu){if(O!==p||Re!==L){if((_!==Hi||R!==Hi)&&(i.blendEquation(i.FUNC_ADD),_=Hi,R=Hi),Re)switch(O){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case He:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",O);break}else switch(O){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case He:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hc:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",O);break}S=null,y=null,E=null,I=null,v.set(0,0,0),A=0,p=O,L=Re}return}Et=Et||pt,ut=ut||it,kt=kt||bt,(pt!==_||Et!==R)&&(i.blendEquationSeparate(Dt[pt],Dt[Et]),_=pt,R=Et),(it!==S||bt!==y||ut!==E||kt!==I)&&(i.blendFuncSeparate(qt[it],qt[bt],qt[ut],qt[kt]),S=it,y=bt,E=ut,I=kt),(Nt.equals(v)===!1||Fe!==A)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Fe),v.copy(Nt),A=Fe),p=O,L=!1}function Zt(O,pt){O.side===We?Mt(i.CULL_FACE):et(i.CULL_FACE);let it=O.side===on;pt&&(it=!it),ge(it),O.blending===vi&&O.transparent===!1?$t(Bn):$t(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let bt=O.stencilWrite;a.setTest(bt),bt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function Pe(O){O!==Hu?(et(i.CULL_FACE),O!==w&&(O===Vc?i.cullFace(i.BACK):O===Gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),w=O}function Ie(O){O!==z&&(B&&i.lineWidth(O),z=O)}function Le(O,pt,it){O?(et(i.POLYGON_OFFSET_FILL),(k!==pt||T!==it)&&(k=pt,T=it,o.getReversed()&&(pt=-pt),i.polygonOffset(pt,it))):Mt(i.POLYGON_OFFSET_FILL)}function we(O){O?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function be(O){O===void 0&&(O=i.TEXTURE0+C-1),ft!==O&&(i.activeTexture(O),ft=O)}function V(O,pt,it){it===void 0&&(ft===null?it=i.TEXTURE0+C-1:it=ft);let bt=G[it];bt===void 0&&(bt={type:void 0,texture:void 0},G[it]=bt),(bt.type!==O||bt.texture!==pt)&&(ft!==it&&(i.activeTexture(it),ft=it),i.bindTexture(O,pt||$[O]),bt.type=O,bt.texture=pt)}function mn(){let O=G[ft];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function M(){try{i.texSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function X(){try{i.texSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function _t(){try{i.texStorage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function St(){try{i.texStorage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function rt(){try{i.texImage2D(...arguments)}catch(O){jt("WebGLState:",O)}}function ct(){try{i.texImage3D(...arguments)}catch(O){jt("WebGLState:",O)}}function wt(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function Bt(O,pt){h[O]!==pt&&(i.pixelStorei(O,pt),h[O]=pt)}function Tt(O){xt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),xt.copy(O))}function tt(O){ht.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ht.copy(O))}function q(O,pt){let it=c.get(pt);it===void 0&&(it=new WeakMap,c.set(pt,it));let bt=it.get(O);bt===void 0&&(bt=i.getUniformBlockIndex(pt,O.name),it.set(O,bt))}function at(O,pt){let bt=c.get(pt).get(O);l.get(pt)!==bt&&(i.uniformBlockBinding(pt,bt,O.__bindingPointIndex),l.set(pt,bt))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},ft=null,G={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,_=null,S=null,y=null,R=null,E=null,I=null,v=new vt(0,0,0),A=0,L=!1,b=null,w=null,z=null,k=null,T=null,xt.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Mt,bindFramebuffer:Ft,drawBuffers:Pt,useProgram:ne,setBlending:$t,setMaterial:Zt,setFlipSided:ge,setCullFace:Pe,setLineWidth:Ie,setPolygonOffset:Le,setScissorTest:we,activeTexture:be,bindTexture:V,unbindTexture:mn,compressedTexImage2D:he,compressedTexImage3D:D,texImage2D:rt,texImage3D:ct,pixelStorei:Bt,getParameter:wt,updateUBOMapping:q,uniformBlockBinding:at,texStorage2D:_t,texStorage3D:St,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:J,compressedTexSubImage3D:nt,scissor:Tt,viewport:tt,reset:gt}}function j_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,d=new WeakMap,h=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,M){return m?new OffscreenCanvas(D,M):Mr("canvas")}function g(D,M,X){let J=1,nt=he(D);if((nt.width>X||nt.height>X)&&(J=X/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let _t=Math.floor(J*nt.width),St=Math.floor(J*nt.height);u===void 0&&(u=x(_t,St));let rt=M?x(_t,St):u;return rt.width=_t,rt.height=St,rt.getContext("2d").drawImage(D,0,0,_t,St),Gt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+_t+"x"+St+")."),rt}else return"data"in D&&Gt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),D;return D}function p(D){return D.generateMipmaps}function _(D){i.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,M,X,J,nt,_t=!1){if(D!==null){if(i[D]!==void 0)return i[D];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let St;J&&(St=t.get("EXT_texture_norm16"),St||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=M;if(M===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8),X===i.UNSIGNED_SHORT&&St&&(rt=St.R16_EXT),X===i.SHORT&&St&&(rt=St.R16_SNORM_EXT)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),M===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8),X===i.UNSIGNED_SHORT&&St&&(rt=St.RG16_EXT),X===i.SHORT&&St&&(rt=St.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),X===i.UNSIGNED_INT&&(rt=i.RGB32UI),X===i.BYTE&&(rt=i.RGB8I),X===i.SHORT&&(rt=i.RGB16I),X===i.INT&&(rt=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),X===i.UNSIGNED_INT&&(rt=i.RGBA32UI),X===i.BYTE&&(rt=i.RGBA8I),X===i.SHORT&&(rt=i.RGBA16I),X===i.INT&&(rt=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_SHORT&&St&&(rt=St.RGB16_EXT),X===i.SHORT&&St&&(rt=St.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),M===i.RGBA){let ct=_t?yr:le.getTransfer(nt);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=ct===ve?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&St&&(rt=St.RGBA16_EXT),X===i.SHORT&&St&&(rt=St.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function R(D,M){let X;return D?M===null||M===Zn||M===tr?X=i.DEPTH24_STENCIL8:M===Ln?X=i.DEPTH32F_STENCIL8:M===Qs&&(X=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zn||M===tr?X=i.DEPTH_COMPONENT24:M===Ln?X=i.DEPTH_COMPONENT32F:M===Qs&&(X=i.DEPTH_COMPONENT16),X}function E(D,M){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==tn&&D.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function I(D){let M=D.target;M.removeEventListener("dispose",I),A(M),M.isVideoTexture&&d.delete(M),M.isHTMLTexture&&h.delete(M)}function v(D){let M=D.target;M.removeEventListener("dispose",v),b(M)}function A(D){let M=n.get(D);if(M.__webglInit===void 0)return;let X=D.source,J=f.get(X);if(J){let nt=J[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(D),Object.keys(J).length===0&&f.delete(X)}n.remove(D)}function L(D){let M=n.get(D);i.deleteTexture(M.__webglTexture);let X=D.source,J=f.get(X);delete J[M.__cacheKey],o.memory.textures--}function b(D){let M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let nt=0;nt<M.__webglFramebuffer[J].length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[J][nt]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let X=D.textures;for(let J=0,nt=X.length;J<nt;J++){let _t=n.get(X[J]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(D)}let w=0;function z(){w=0}function k(){return w}function T(D){w=D}function C(){let D=w;return D>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),w+=1,D}function B(D){let M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function Q(D,M){let X=n.get(D);if(D.isVideoTexture&&V(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){let J=D.image;if(J===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(X,D,M);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function ot(D,M){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Mt(X,D,M);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function ft(D,M){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Mt(X,D,M);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function G(D,M){let X=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){Ft(X,D,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}let N={[ra]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},Y={[tn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},xt={[md]:i.NEVER,[yd]:i.ALWAYS,[gd]:i.LESS,[ml]:i.LEQUAL,[xd]:i.EQUAL,[gl]:i.GEQUAL,[_d]:i.GREATER,[vd]:i.NOTEQUAL};function ht(D,M){if(M.type===Ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===Pa||M.magFilter===Zr||M.magFilter===Ji||M.minFilter===rn||M.minFilter===Pa||M.minFilter===Zr||M.minFilter===Ji)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,N[M.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,N[M.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,N[M.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Y[M.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==Zr&&M.minFilter!==Ji||M.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function W(D,M){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",I));let J=M.source,nt=f.get(J);nt===void 0&&(nt={},f.set(J,nt));let _t=B(M);if(_t!==D.__cacheKey){nt[_t]===void 0&&(nt[_t]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),nt[_t].usedTimes++;let St=nt[D.__cacheKey];St!==void 0&&(nt[D.__cacheKey].usedTimes--,St.usedTimes===0&&L(M)),D.__cacheKey=_t,D.__webglTexture=nt[_t].texture}return X}function $(D,M,X){return Math.floor(Math.floor(D/X)/M)}function et(D,M,X,J){let _t=D.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,J,M.data);else{_t.sort((Bt,Tt)=>Bt.start-Tt.start);let St=0;for(let Bt=1;Bt<_t.length;Bt++){let Tt=_t[St],tt=_t[Bt],q=Tt.start+Tt.count,at=$(tt.start,M.width,4),gt=$(Tt.start,M.width,4);tt.start<=q+1&&at===gt&&$(tt.start+tt.count-1,M.width,4)===at?Tt.count=Math.max(Tt.count,tt.start+tt.count-Tt.start):(++St,_t[St]=tt)}_t.length=St+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),ct=e.getParameter(i.UNPACK_SKIP_PIXELS),wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Bt=0,Tt=_t.length;Bt<Tt;Bt++){let tt=_t[Bt],q=Math.floor(tt.start/4),at=Math.ceil(tt.count/4),gt=q%M.width,O=Math.floor(q/M.width),pt=at,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,gt,O,pt,it,X,J,M.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function Mt(D,M,X){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);let nt=W(D,M),_t=M.source;e.bindTexture(J,D.__webglTexture,i.TEXTURE0+X);let St=n.get(_t);if(_t.version!==St.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let it=le.getPrimaries(le.workingColorSpace),bt=M.colorSpace===Ei?null:le.getPrimaries(M.colorSpace),Et=M.colorSpace===Ei||it===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ct=g(M.image,!1,s.maxTextureSize);ct=mn(M,ct);let wt=r.convert(M.format,M.colorSpace),Bt=r.convert(M.type),Tt=y(M.internalFormat,wt,Bt,M.normalized,M.colorSpace,M.isVideoTexture);ht(J,M);let tt,q=M.mipmaps,at=M.isVideoTexture!==!0,gt=St.__version===void 0||nt===!0,O=_t.dataReady,pt=E(M,ct);if(M.isDepthTexture)Tt=R(M.format===$i,M.type),gt&&(at?e.texStorage2D(i.TEXTURE_2D,1,Tt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Tt,ct.width,ct.height,0,wt,Bt,null));else if(M.isDataTexture)if(q.length>0){at&&gt&&e.texStorage2D(i.TEXTURE_2D,pt,Tt,q[0].width,q[0].height);for(let it=0,bt=q.length;it<bt;it++)tt=q[it],at?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,tt.width,tt.height,wt,Bt,tt.data):e.texImage2D(i.TEXTURE_2D,it,Tt,tt.width,tt.height,0,wt,Bt,tt.data);M.generateMipmaps=!1}else at?(gt&&e.texStorage2D(i.TEXTURE_2D,pt,Tt,ct.width,ct.height),O&&et(M,ct,wt,Bt)):e.texImage2D(i.TEXTURE_2D,0,Tt,ct.width,ct.height,0,wt,Bt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Tt,q[0].width,q[0].height,ct.depth);for(let it=0,bt=q.length;it<bt;it++)if(tt=q[it],M.format!==Dn)if(wt!==null)if(at){if(O)if(M.layerUpdates.size>0){let Et=rh(tt.width,tt.height,M.format,M.type);for(let ut of M.layerUpdates){let kt=tt.data.subarray(ut*Et/tt.data.BYTES_PER_ELEMENT,(ut+1)*Et/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ut,tt.width,tt.height,1,wt,kt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,tt.width,tt.height,ct.depth,wt,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Tt,tt.width,tt.height,ct.depth,0,tt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,tt.width,tt.height,ct.depth,wt,Bt,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Tt,tt.width,tt.height,ct.depth,0,wt,Bt,tt.data)}else{at&&gt&&e.texStorage2D(i.TEXTURE_2D,pt,Tt,q[0].width,q[0].height);for(let it=0,bt=q.length;it<bt;it++)tt=q[it],M.format!==Dn?wt!==null?at?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,tt.width,tt.height,wt,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Tt,tt.width,tt.height,0,tt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,tt.width,tt.height,wt,Bt,tt.data):e.texImage2D(i.TEXTURE_2D,it,Tt,tt.width,tt.height,0,wt,Bt,tt.data)}else if(M.isDataArrayTexture)if(at){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Tt,ct.width,ct.height,ct.depth),O)if(M.layerUpdates.size>0){let it=rh(ct.width,ct.height,M.format,M.type);for(let bt of M.layerUpdates){let Et=ct.data.subarray(bt*it/ct.data.BYTES_PER_ELEMENT,(bt+1)*it/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,ct.width,ct.height,1,wt,Bt,Et)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,Bt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,ct.width,ct.height,ct.depth,0,wt,Bt,ct.data);else if(M.isData3DTexture)at?(gt&&e.texStorage3D(i.TEXTURE_3D,pt,Tt,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,Bt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,ct.width,ct.height,ct.depth,0,wt,Bt,ct.data);else if(M.isFramebufferTexture){if(gt)if(at)e.texStorage2D(i.TEXTURE_2D,pt,Tt,ct.width,ct.height);else{let it=ct.width,bt=ct.height;for(let Et=0;Et<pt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Tt,it,bt,0,wt,Bt,null),it>>=1,bt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),ct.parentNode!==it){it.appendChild(ct),h.add(M),it.onpaint=bt=>{let Et=bt.changedElements;for(let ut of h)Et.includes(ut.image)&&(ut.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ct);else{let Et=i.RGBA,ut=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ut,kt,ct)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(q.length>0){if(at&&gt){let it=he(q[0]);e.texStorage2D(i.TEXTURE_2D,pt,Tt,it.width,it.height)}for(let it=0,bt=q.length;it<bt;it++)tt=q[it],at?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,wt,Bt,tt):e.texImage2D(i.TEXTURE_2D,it,Tt,wt,Bt,tt);M.generateMipmaps=!1}else if(at){if(gt){let it=he(ct);e.texStorage2D(i.TEXTURE_2D,pt,Tt,it.width,it.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Bt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Tt,wt,Bt,ct);p(M)&&_(J),St.__version=_t.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ft(D,M,X){if(M.image.length!==6)return;let J=W(D,M),nt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);let _t=n.get(nt);if(nt.version!==_t.__version||J===!0){e.activeTexture(i.TEXTURE0+X);let St=le.getPrimaries(le.workingColorSpace),rt=M.colorSpace===Ei?null:le.getPrimaries(M.colorSpace),ct=M.colorSpace===Ei||St===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let wt=M.isCompressedTexture||M.image[0].isCompressedTexture,Bt=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let ut=0;ut<6;ut++)!wt&&!Bt?Tt[ut]=g(M.image[ut],!0,s.maxCubemapSize):Tt[ut]=Bt?M.image[ut].image:M.image[ut],Tt[ut]=mn(M,Tt[ut]);let tt=Tt[0],q=r.convert(M.format,M.colorSpace),at=r.convert(M.type),gt=y(M.internalFormat,q,at,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,pt=_t.__version===void 0||J===!0,it=nt.dataReady,bt=E(M,tt);ht(i.TEXTURE_CUBE_MAP,M);let Et;if(wt){O&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,gt,tt.width,tt.height);for(let ut=0;ut<6;ut++){Et=Tt[ut].mipmaps;for(let kt=0;kt<Et.length;kt++){let Nt=Et[kt];M.format!==Dn?q!==null?O?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,0,0,Nt.width,Nt.height,q,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,gt,Nt.width,Nt.height,0,Nt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,0,0,Nt.width,Nt.height,q,at,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,gt,Nt.width,Nt.height,0,q,at,Nt.data)}}}else{if(Et=M.mipmaps,O&&pt){Et.length>0&&bt++;let ut=he(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,gt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Bt){O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Tt[ut].width,Tt[ut].height,q,at,Tt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,gt,Tt[ut].width,Tt[ut].height,0,q,at,Tt[ut].data);for(let kt=0;kt<Et.length;kt++){let Fe=Et[kt].image[ut].image;O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,0,0,Fe.width,Fe.height,q,at,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,gt,Fe.width,Fe.height,0,q,at,Fe.data)}}else{O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,q,at,Tt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,gt,q,at,Tt[ut]);for(let kt=0;kt<Et.length;kt++){let Nt=Et[kt];O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,0,0,q,at,Nt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,gt,q,at,Nt.image[ut])}}}p(M)&&_(i.TEXTURE_CUBE_MAP),_t.__version=nt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Pt(D,M,X,J,nt,_t){let St=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ct=y(X.internalFormat,St,rt,X.normalized,X.colorSpace),wt=n.get(M),Bt=n.get(X);if(Bt.__renderTarget=M,!wt.__hasExternalTextures){let Tt=Math.max(1,M.width>>_t),tt=Math.max(1,M.height>>_t);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,_t,ct,Tt,tt,M.depth,0,St,rt,null):e.texImage2D(nt,_t,ct,Tt,tt,0,St,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,nt,Bt.__webglTexture,0,we(M)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,nt,Bt.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(D,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),M.depthBuffer){let J=M.depthTexture,nt=J&&J.isDepthTexture?J.type:null,_t=R(M.stencilBuffer,nt),St=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(M),_t,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(M),_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,D)}else{let J=M.textures;for(let nt=0;nt<J.length;nt++){let _t=J[nt],St=r.convert(_t.format,_t.colorSpace),rt=r.convert(_t.type),ct=y(_t.internalFormat,St,rt,_t.normalized,_t.colorSpace);be(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(M),ct,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(M),ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(D,M,X){let J=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(M.depthTexture);if(nt.__renderTarget=M,(!nt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ht(i.TEXTURE_CUBE_MAP,M.depthTexture);let wt=r.convert(M.depthTexture.format),Bt=r.convert(M.depthTexture.type),Tt;M.depthTexture.format===ni?Tt=i.DEPTH_COMPONENT24:M.depthTexture.format===$i&&(Tt=i.DEPTH24_STENCIL8);for(let tt=0;tt<6;tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Tt,M.width,M.height,0,wt,Bt,null)}}else Q(M.depthTexture,0);let _t=nt.__webglTexture,St=we(M),rt=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ct=M.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ni)be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,rt,_t,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ct,rt,_t,0);else if(M.depthTexture.format===$i)be(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,rt,_t,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ct,rt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(D){let M=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){let J=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=J}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let J=0;J<6;J++)Dt(M.__webglFramebuffer[J],D,J);else{let J=D.texture.mipmaps;J&&J.length>0?Dt(M.__webglFramebuffer[0],D,0):Dt(M.__webglFramebuffer,D,0)}else if(X){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),ne(M.__webglDepthbuffer[J],D,!1);else{let nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,_t)}}else{let J=D.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ne(M.__webglDepthbuffer,D,!1);else{let nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(D,M,X){let J=n.get(D);M!==void 0&&Pt(J.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&qt(D)}function Zt(D){let M=D.texture,X=n.get(D),J=n.get(M);D.addEventListener("dispose",v);let nt=D.textures,_t=D.isWebGLCubeRenderTarget===!0,St=nt.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,o.memory.textures++),_t){X.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[rt]=[];for(let ct=0;ct<M.mipmaps.length;ct++)X.__webglFramebuffer[rt][ct]=i.createFramebuffer()}else X.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)X.__webglFramebuffer[rt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(St)for(let rt=0,ct=nt.length;rt<ct;rt++){let wt=n.get(nt[rt]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&be(D)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let rt=0;rt<nt.length;rt++){let ct=nt[rt];X.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[rt]);let wt=r.convert(ct.format,ct.colorSpace),Bt=r.convert(ct.type),Tt=y(ct.internalFormat,wt,Bt,ct.normalized,ct.colorSpace,D.isXRRenderTarget===!0),tt=we(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Tt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,X.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ht(i.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)Pt(X.__webglFramebuffer[rt][ct],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else Pt(X.__webglFramebuffer[rt],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(M)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let rt=0,ct=nt.length;rt<ct;rt++){let wt=nt[rt],Bt=n.get(wt),Tt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Tt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Bt.__webglTexture),ht(Tt,wt),Pt(X.__webglFramebuffer,D,wt,i.COLOR_ATTACHMENT0+rt,Tt,0),p(wt)&&_(Tt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(rt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,J.__webglTexture),ht(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)Pt(X.__webglFramebuffer[ct],D,M,i.COLOR_ATTACHMENT0,rt,ct);else Pt(X.__webglFramebuffer,D,M,i.COLOR_ATTACHMENT0,rt,0);p(M)&&_(rt),e.unbindTexture()}D.depthBuffer&&qt(D)}function ge(D){let M=D.textures;for(let X=0,J=M.length;X<J;X++){let nt=M[X];if(p(nt)){let _t=S(D),St=n.get(nt).__webglTexture;e.bindTexture(_t,St),_(_t),e.unbindTexture()}}}let Pe=[],Ie=[];function Le(D){if(D.samples>0){if(be(D)===!1){let M=D.textures,X=D.width,J=D.height,nt=i.COLOR_BUFFER_BIT,_t=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(D),rt=M.length>1;if(rt)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let ct=D.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[wt]);let Bt=n.get(M[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,nt,i.NEAREST),l===!0&&(Pe.length=0,Ie.length=0,Pe.push(i.COLOR_ATTACHMENT0+wt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pe.push(_t),Ie.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,St.__webglColorRenderbuffer[wt]);let Bt=n.get(M[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let M=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function we(D){return Math.min(s.maxSamples,D.samples)}function be(D){let M=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function V(D){let M=o.render.frame;d.get(D)!==M&&(d.set(D,M),D.update())}function mn(D,M){let X=D.colorSpace,J=D.format,nt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==vr&&X!==Ei&&(le.getTransfer(X)===ve?(J!==Dn||nt!==wn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",X)),M}function he(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=z,this.getTextureUnits=k,this.setTextureUnits=T,this.setTexture2D=Q,this.setTexture2DArray=ot,this.setTexture3D=ft,this.setTextureCube=G,this.rebindTextures=$t,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z_(i,t){function e(n,s=Ei){let r,o=le.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===$c)return i.RGB;if(n===Dn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Ua)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===Jr||n===$r||n===Kr||n===Qr)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===Oa||n===za||n===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===to||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return r.COMPRESSED_R11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===to)return r.COMPRESSED_RG11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ja||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ll)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===eo||n===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:J_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new wh,p={},_=e.getContextAttributes(),S=null,y=null,R=[],E=[],I=new Vt,v=null,A=new un;A.viewport=new ye;let L=new un;L.viewport=new ye;let b=[A,L],w=new Ea,z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=R[W];return $===void 0&&($=new Xs,R[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=R[W];return $===void 0&&($=new Xs,R[W]=$),$.getGripSpace()},this.getHand=function(W){let $=R[W];return $===void 0&&($=new Xs,R[W]=$),$.getHandSpace()};function T(W){let $=E.indexOf(W.inputSource);if($===-1)return;let et=R[$];et!==void 0&&(et.update(W.inputSource,W.frame,c||o),et.dispatchEvent({type:W.type,data:W.inputSource}))}function C(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",B);for(let W=0;W<R.length;W++){let $=E[W];$!==null&&(E[W]=null,R[W].disconnect($))}z=null,k=null,g.reset();for(let W in p)delete p[W];t.setRenderTarget(S),f=null,u=null,h=null,s=null,y=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",C),s.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Mt=null,Ft=null;_.depth&&(Ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?$i:ni,Mt=_.stencil?tr:Zn);let Pt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new qe(u.textureWidth,u.textureHeight,{format:Dn,type:wn,depthTexture:new Mi(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let et={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qe(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(W){for(let $=0;$<W.removed.length;$++){let et=W.removed[$],Mt=E.indexOf(et);Mt>=0&&(E[Mt]=null,R[Mt].disconnect(et))}for(let $=0;$<W.added.length;$++){let et=W.added[$],Mt=E.indexOf(et);if(Mt===-1){for(let Pt=0;Pt<R.length;Pt++)if(Pt>=E.length){E.push(et),Mt=Pt;break}else if(E[Pt]===null){E[Pt]=et,Mt=Pt;break}if(Mt===-1)break}let Ft=R[Mt];Ft&&Ft.connect(et)}}let Q=new F,ot=new F;function ft(W,$,et){Q.setFromMatrixPosition($.matrixWorld),ot.setFromMatrixPosition(et.matrixWorld);let Mt=Q.distanceTo(ot),Ft=$.projectionMatrix.elements,Pt=et.projectionMatrix.elements,ne=Ft[14]/(Ft[10]-1),Dt=Ft[14]/(Ft[10]+1),qt=(Ft[9]+1)/Ft[5],$t=(Ft[9]-1)/Ft[5],Zt=(Ft[8]-1)/Ft[0],ge=(Pt[8]+1)/Pt[0],Pe=ne*Zt,Ie=ne*ge,Le=Mt/(-Zt+ge),we=Le*-Zt;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(we),W.translateZ(Le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ft[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let be=ne+Le,V=Dt+Le,mn=Pe-we,he=Ie+(Mt-we),D=qt*Dt/V*be,M=$t*Dt/V*be;W.projectionMatrix.makePerspective(mn,he,D,M,be,V),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function G(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let $=W.near,et=W.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(et=g.depthFar)),w.near=L.near=A.near=$,w.far=L.far=A.far=et,(z!==w.near||k!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,k=w.far),w.layers.mask=W.layers.mask|6,A.layers.mask=w.layers.mask&-5,L.layers.mask=w.layers.mask&-3;let Mt=W.parent,Ft=w.cameras;G(w,Mt);for(let Pt=0;Pt<Ft.length;Pt++)G(Ft[Pt],Mt);Ft.length===2?ft(w,A,L):w.projectionMatrix.copy(A.projectionMatrix),N(W,w,Mt)};function N(W,$,et){et===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(et.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Gs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)},this.getCameraTexture=function(W){return p[W]};let Y=null;function xt(W,$){if(d=$.getViewerPose(c||o),m=$,d!==null){let et=d.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Mt=!1;et.length!==w.cameras.length&&(w.cameras.length=0,Mt=!0);for(let Dt=0;Dt<et.length;Dt++){let qt=et[Dt],$t=null;if(f!==null)$t=f.getViewport(qt);else{let ge=h.getViewSubImage(u,qt);$t=ge.viewport,Dt===0&&(t.setRenderTargetTextures(y,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(y))}let Zt=b[Dt];Zt===void 0&&(Zt=new un,Zt.layers.enable(Dt),Zt.viewport=new ye,b[Dt]=Zt),Zt.matrix.fromArray(qt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(qt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set($t.x,$t.y,$t.width,$t.height),Dt===0&&(w.matrix.copy(Zt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Mt===!0&&w.cameras.push(Zt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Dt=h.getDepthInformation(et[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(Dt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Dt=0;Dt<et.length;Dt++){let qt=et[Dt].camera;if(qt){let $t=p[qt];$t||($t=new Lr,p[qt]=$t);let Zt=h.getCameraImage(qt);$t.sourceTexture=Zt}}}}for(let et=0;et<R.length;et++){let Mt=E[et],Ft=R[et];Mt!==null&&Ft!==void 0&&Ft.update(Mt,$,c||o)}Y&&Y(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let ht=new Zd;ht.setAnimationLoop(xt),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}},K_=new Kt,ef=new Qt;ef.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),S=_.envMap,y=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ef),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,R){let E=R.program;n.uniformBlockBinding(y,E)}function c(y,R){let E=s[y.id];E===void 0&&(g(y),E=d(y),s[y.id]=E,y.addEventListener("dispose",_));let I=R.program;n.updateUBOMapping(y,I);let v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function d(y){let R=h();y.__bindingPointIndex=R;let E=i.createBuffer(),I=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,E),E}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let R=s[y.id],E=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let v=0,A=E.length;v<A;v++){let L=E[v];if(Array.isArray(L))for(let b=0,w=L.length;b<w;b++)f(L[b],v,b,I);else f(L,v,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,R,E,I){if(x(y,R,E,I)===!0){let v=y.__offset,A=y.value;if(Array.isArray(A)){let L=0;for(let b=0;b<A.length;b++){let w=A[b],z=p(w);m(w,y.__data,L),typeof w!="number"&&typeof w!="boolean"&&!w.isMatrix3&&!ArrayBuffer.isView(w)&&(L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function m(y,R,E){typeof y=="number"||typeof y=="boolean"?R[0]=y:y.isMatrix3?(R[0]=y.elements[0],R[1]=y.elements[1],R[2]=y.elements[2],R[3]=0,R[4]=y.elements[3],R[5]=y.elements[4],R[6]=y.elements[5],R[7]=0,R[8]=y.elements[6],R[9]=y.elements[7],R[10]=y.elements[8],R[11]=0):ArrayBuffer.isView(y)?R.set(new y.constructor(y.buffer,y.byteOffset,R.length)):y.toArray(R,E)}function x(y,R,E,I){let v=y.value,A=R+"_"+E;if(I[A]===void 0)return typeof v=="number"||typeof v=="boolean"?I[A]=v:ArrayBuffer.isView(v)?I[A]=v.slice():I[A]=v.clone(),!0;{let L=I[A];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return I[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function g(y){let R=y.uniforms,E=0,I=16;for(let A=0,L=R.length;A<L;A++){let b=Array.isArray(R[A])?R[A]:[R[A]];for(let w=0,z=b.length;w<z;w++){let k=b[w],T=Array.isArray(k.value)?k.value:[k.value];for(let C=0,B=T.length;C<B;C++){let Q=T[C],ot=p(Q),ft=E%I,G=ft%ot.boundary,N=ft+G;E+=G,N!==0&&I-N<ot.storage&&(E+=I-N),k.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=ot.storage}}}let v=E%I;return v>0&&(E+=I-v),y.__size=E,y.__cache={},this}function p(y){let R={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(R.boundary=4,R.storage=4):y.isVector2?(R.boundary=8,R.storage=8):y.isVector3||y.isColor?(R.boundary=16,R.storage=12):y.isVector4?(R.boundary=16,R.storage=16):y.isMatrix3?(R.boundary=48,R.storage=48):y.isMatrix4?(R.boundary=64,R.storage=64):y.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(R.boundary=16,R.storage=y.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",y),R}function _(y){let R=y.target;R.removeEventListener("dispose",_);let E=o.indexOf(R.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function S(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function nv(){return oi===null&&(oi=new Ys(ev,16,16,Ki,dn),oi.name="DFG_LUT",oi.minFilter=rn,oi.magFilter=rn,oi.wrapS=ei,oi.wrapT=ei,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Ml=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([ka,Fa,Na]),p=new Set([wn,Zn,Qs,tr,La,Da]),_=new Uint32Array(4),S=new Int32Array(4),y=new F,R=null,E=null,I=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,b=!1,w=null,z=null,k=null,T=null;this._outputColorSpace=sn;let C=0,B=0,Q=null,ot=-1,ft=null,G=new ye,N=new ye,Y=null,xt=new vt(0),ht=0,W=e.width,$=e.height,et=1,Mt=null,Ft=null,Pt=new ye(0,0,W,$),ne=new ye(0,0,W,$),Dt=!1,qt=new Zs,$t=!1,Zt=!1,ge=new Kt,Pe=new F,Ie=new ye,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function be(){return Q===null?et:1}let V=n;function mn(P,H){return e.getContext(P,H)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Jn,!1),V===null){let H="webgl2";if(V=mn(H,P),V===null)throw mn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(P){throw jt("WebGLRenderer: "+P.message),P}let he,D,M,X,J,nt,_t,St,rt,ct,wt,Bt,Tt,tt,q,at,gt,O,pt,it,bt,Et,ut;function kt(){he=new cx(V),he.init(),bt=new Z_(V,he),D=new ex(V,he,t,bt),M=new Y_(V,he),D.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),z=V.createFramebuffer(),k=V.createFramebuffer(),T=V.createFramebuffer(),X=new dx(V),J=new D_,nt=new j_(V,he,M,J,D,bt,X),_t=new lx(L),St=new g0(V),Et=new Qg(V,St),rt=new hx(V,St,X,Et),ct=new px(V,rt,St,Et,X),O=new fx(V,D,nt),q=new nx(J),wt=new L_(L,_t,he,D,Et,q),Bt=new Q_(L,J),Tt=new N_,tt=new V_(he),gt=new Kg(L,_t,M,ct,m,l),at=new q_(L,ct,D),ut=new tv(V,X,D,M),pt=new tx(V,he,X),it=new ux(V,he,X),X.programs=wt.programs,L.capabilities=D,L.extensions=he,L.properties=J,L.renderLists=Tt,L.shadowMap=at,L.state=M,L.info=X}kt(),x!==wn&&(A=new gx(x,e.width,e.height,a,s,r));let Nt=new Th(L,V);this.xr=Nt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let P=he.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=he.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(P){P!==void 0&&(et=P,this.setSize(W,$,!1))},this.getSize=function(P){return P.set(W,$)},this.setSize=function(P,H,K=!0){if(Nt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,$=H,e.width=Math.floor(P*et),e.height=Math.floor(H*et),K===!0&&(e.style.width=P+"px",e.style.height=H+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(W*et,$*et).floor()},this.setDrawingBufferSize=function(P,H,K){W=P,$=H,et=K,e.width=Math.floor(P*K),e.height=Math.floor(H*K),this.setViewport(0,0,P,H)},this.setEffects=function(P){if(x===wn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let H=0;H<P.length;H++)if(P[H].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(G)},this.getViewport=function(P){return P.copy(Pt)},this.setViewport=function(P,H,K,j){P.isVector4?Pt.set(P.x,P.y,P.z,P.w):Pt.set(P,H,K,j),M.viewport(G.copy(Pt).multiplyScalar(et).round())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,H,K,j){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,H,K,j),M.scissor(N.copy(ne).multiplyScalar(et).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(P){M.setScissorTest(Dt=P)},this.setOpaqueSort=function(P){Mt=P},this.setTransparentSort=function(P){Ft=P},this.getClearColor=function(P){return P.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(P=!0,H=!0,K=!0){let j=0;if(P){let Z=!1;if(Q!==null){let Ct=Q.texture.format;Z=g.has(Ct)}if(Z){let Ct=Q.texture.type,Lt=p.has(Ct),Rt=gt.getClearColor(),Ot=gt.getClearAlpha(),zt=Rt.r,ie=Rt.g,re=Rt.b;Lt?(_[0]=zt,_[1]=ie,_[2]=re,_[3]=Ot,V.clearBufferuiv(V.COLOR,0,_)):(S[0]=zt,S[1]=ie,S[2]=re,S[3]=Ot,V.clearBufferiv(V.COLOR,0,S))}else j|=V.COLOR_BUFFER_BIT}H&&(j|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),w=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Jn,!1),gt.dispose(),Tt.dispose(),tt.dispose(),J.dispose(),_t.dispose(),ct.dispose(),Et.dispose(),ut.dispose(),wt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",su),Nt.removeEventListener("sessionend",ru),rs.stop()};function Fe(P){P.preventDefault(),Qc("WebGLRenderer: Context Lost."),b=!0}function Re(){Qc("WebGLRenderer: Context Restored."),b=!1;let P=X.autoReset,H=at.enabled,K=at.autoUpdate,j=at.needsUpdate,Z=at.type;kt(),X.autoReset=P,at.enabled=H,at.autoUpdate=K,at.needsUpdate=j,at.type=Z}function Jn(P){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $n(P){let H=P.target;H.removeEventListener("dispose",$n),rp(H)}function rp(P){op(P),J.remove(P)}function op(P){let H=J.get(P).programs;H!==void 0&&(H.forEach(function(K){wt.releaseProgram(K)}),P.isShaderMaterial&&wt.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,K,j,Z,Ct){H===null&&(H=Le);let Lt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Rt=cp(P,H,K,j,Z);M.setMaterial(j,Lt);let Ot=K.index,zt=1;if(j.wireframe===!0){if(Ot=rt.getWireframeAttribute(K),Ot===void 0)return;zt=2}let ie=K.drawRange,re=K.attributes.position,Ht=ie.start*zt,Se=(ie.start+ie.count)*zt;Ct!==null&&(Ht=Math.max(Ht,Ct.start*zt),Se=Math.min(Se,(Ct.start+Ct.count)*zt)),Ot!==null?(Ht=Math.max(Ht,0),Se=Math.min(Se,Ot.count)):re!=null&&(Ht=Math.max(Ht,0),Se=Math.min(Se,re.count));let ze=Se-Ht;if(ze<0||ze===1/0)return;Et.setup(Z,j,Rt,K,Ot);let ke,Te=pt;if(Ot!==null&&(ke=St.get(Ot),Te=it,Te.setIndex(ke)),Z.isMesh)j.wireframe===!0?(M.setLineWidth(j.wireframeLinewidth*be()),Te.setMode(V.LINES)):Te.setMode(V.TRIANGLES);else if(Z.isLine){let ln=j.linewidth;ln===void 0&&(ln=1),M.setLineWidth(ln*be()),Z.isLineSegments?Te.setMode(V.LINES):Z.isLineLoop?Te.setMode(V.LINE_LOOP):Te.setMode(V.LINE_STRIP)}else Z.isPoints?Te.setMode(V.POINTS):Z.isSprite&&Te.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Te.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let ln=Z._multiDrawStarts,It=Z._multiDrawCounts,Rn=Z._multiDrawCount,xe=Ot?St.get(Ot).bytesPerElement:1,Fn=J.get(j).currentProgram.getUniforms();for(let Kn=0;Kn<Rn;Kn++)Fn.setValue(V,"_gl_DrawID",Kn),Te.render(ln[Kn]/xe,It[Kn])}else if(Z.isInstancedMesh)Te.renderInstances(Ht,ze,Z.count);else if(K.isInstancedBufferGeometry){let ln=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,It=Math.min(K.instanceCount,ln);Te.renderInstances(Ht,ze,It)}else Te.render(Ht,ze)};function iu(P,H,K){P.transparent===!0&&P.side===We&&P.forceSinglePass===!1?(P.side=on,P.needsUpdate=!0,wo(P,H,K),P.side=_i,P.needsUpdate=!0,wo(P,H,K),P.side=We):wo(P,H,K)}this.compile=function(P,H,K=null){K===null&&(K=P),E=tt.get(K),E.init(H),v.push(E),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),P!==K&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights();let j=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Lt=0;Lt<Ct.length;Lt++){let Rt=Ct[Lt];iu(Rt,K,Z),j.add(Rt)}else iu(Ct,K,Z),j.add(Ct)}),E=v.pop(),j},this.compileAsync=function(P,H,K=null){let j=this.compile(P,H,K);return new Promise(Z=>{function Ct(){if(j.forEach(function(Lt){J.get(Lt).currentProgram.isReady()&&j.delete(Lt)}),j.size===0){Z(P);return}setTimeout(Ct,10)}he.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ic=null;function ap(P){ic&&ic(P)}function su(){rs.stop()}function ru(){rs.start()}let rs=new Zd;rs.setAnimationLoop(ap),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(P){ic=P,Nt.setAnimationLoop(P),P===null?rs.stop():rs.start()},Nt.addEventListener("sessionstart",su),Nt.addEventListener("sessionend",ru),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w!==null&&w.renderStart(P,H);let K=Nt.enabled===!0&&Nt.isPresenting===!0,j=A!==null&&(Q===null||K)&&A.begin(L,Q);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(H),H=Nt.getCamera()),P.isScene===!0&&P.onBeforeRender(L,P,H,Q),E=tt.get(P,v.length),E.init(H),E.state.textureUnits=nt.getTextureUnits(),v.push(E),ge.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),qt.setFromProjectionMatrix(ge,Wn,H.reversedDepth),Zt=this.localClippingEnabled,$t=q.init(this.clippingPlanes,Zt),R=Tt.get(P,I.length),R.init(),I.push(R),Nt.enabled===!0&&Nt.isPresenting===!0){let Lt=L.xr.getDepthSensingMesh();Lt!==null&&sc(Lt,H,-1/0,L.sortObjects)}sc(P,H,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(Mt,Ft,H.reversedDepth),we=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,we&&gt.addToRenderList(R,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&q.beginShadows();let Z=E.state.shadowsArray;if(at.render(Z,P,H),$t===!0&&q.endShadows(),(j&&A.hasRenderPass())===!1){let Lt=R.opaque,Rt=R.transmissive;if(E.setupLights(),H.isArrayCamera){let Ot=H.cameras;if(Rt.length>0)for(let zt=0,ie=Ot.length;zt<ie;zt++){let re=Ot[zt];au(Lt,Rt,P,re)}we&&gt.render(P);for(let zt=0,ie=Ot.length;zt<ie;zt++){let re=Ot[zt];ou(R,P,re,re.viewport)}}else Rt.length>0&&au(Lt,Rt,P,H),we&&gt.render(P),ou(R,P,H)}Q!==null&&B===0&&(nt.updateMultisampleRenderTarget(Q),nt.updateRenderTargetMipmap(Q)),j&&A.end(L),P.isScene===!0&&P.onAfterRender(L,P,H),Et.resetDefaultState(),ot=-1,ft=null,v.pop(),v.length>0?(E=v[v.length-1],nt.setTextureUnits(E.state.textureUnits),$t===!0&&q.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?R=I[I.length-1]:R=null,w!==null&&w.renderEnd()};function sc(P,H,K,j){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLightProbeGrid)E.pushLightProbeGrid(P);else if(P.isLight)E.pushLight(P),P.castShadow&&E.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||qt.intersectsSprite(P)){j&&Ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);let Lt=ct.update(P),Rt=P.material;Rt.visible&&R.push(P,Lt,Rt,K,Ie.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||qt.intersectsObject(P))){let Lt=ct.update(P),Rt=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ie.copy(P.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ie.copy(Lt.boundingSphere.center)),Ie.applyMatrix4(P.matrixWorld).applyMatrix4(ge)),Array.isArray(Rt)){let Ot=Lt.groups;for(let zt=0,ie=Ot.length;zt<ie;zt++){let re=Ot[zt],Ht=Rt[re.materialIndex];Ht&&Ht.visible&&R.push(P,Lt,Ht,K,Ie.z,re)}}else Rt.visible&&R.push(P,Lt,Rt,K,Ie.z,null)}}let Ct=P.children;for(let Lt=0,Rt=Ct.length;Lt<Rt;Lt++)sc(Ct[Lt],H,K,j)}function ou(P,H,K,j){let{opaque:Z,transmissive:Ct,transparent:Lt}=P;E.setupLightsView(K),$t===!0&&q.setGlobalState(L.clippingPlanes,K),j&&M.viewport(G.copy(j)),Z.length>0&&So(Z,H,K),Ct.length>0&&So(Ct,H,K),Lt.length>0&&So(Lt,H,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function au(P,H,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){let Ht=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new qe(1,1,{generateMipmaps:!0,type:Ht?dn:wn,minFilter:Ji,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Ct=E.state.transmissionRenderTarget[j.id],Lt=j.viewport||G;Ct.setSize(Lt.z*L.transmissionResolutionScale,Lt.w*L.transmissionResolutionScale);let Rt=L.getRenderTarget(),Ot=L.getActiveCubeFace(),zt=L.getActiveMipmapLevel();L.setRenderTarget(Ct),L.getClearColor(xt),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),we&&gt.render(K);let ie=L.toneMapping;L.toneMapping=jn;let re=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),$t===!0&&q.setGlobalState(L.clippingPlanes,j),So(P,K,j),nt.updateMultisampleRenderTarget(Ct),nt.updateRenderTargetMipmap(Ct),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Se=0,ze=H.length;Se<ze;Se++){let ke=H[Se],{object:Te,geometry:ln,material:It,group:Rn}=ke;if(It.side===We&&Te.layers.test(j.layers)){let xe=It.side;It.side=on,It.needsUpdate=!0,lu(Te,K,j,ln,It,Rn),It.side=xe,It.needsUpdate=!0,Ht=!0}}Ht===!0&&(nt.updateMultisampleRenderTarget(Ct),nt.updateRenderTargetMipmap(Ct))}L.setRenderTarget(Rt,Ot,zt),L.setClearColor(xt,ht),re!==void 0&&(j.viewport=re),L.toneMapping=ie}function So(P,H,K){let j=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ct=P.length;Z<Ct;Z++){let Lt=P[Z],{object:Rt,geometry:Ot,group:zt}=Lt,ie=Lt.material;ie.allowOverride===!0&&j!==null&&(ie=j),Rt.layers.test(K.layers)&&lu(Rt,H,K,Ot,ie,zt)}}function lu(P,H,K,j,Z,Ct){P.onBeforeRender(L,H,K,j,Z,Ct),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(L,H,K,j,P,Ct),Z.transparent===!0&&Z.side===We&&Z.forceSinglePass===!1?(Z.side=on,Z.needsUpdate=!0,L.renderBufferDirect(K,H,j,Z,P,Ct),Z.side=_i,Z.needsUpdate=!0,L.renderBufferDirect(K,H,j,Z,P,Ct),Z.side=We):L.renderBufferDirect(K,H,j,Z,P,Ct),P.onAfterRender(L,H,K,j,Z,Ct)}function wo(P,H,K){H.isScene!==!0&&(H=Le);let j=J.get(P),Z=E.state.lights,Ct=E.state.shadowsArray,Lt=Z.state.version,Rt=wt.getParameters(P,Z.state,Ct,H,K,E.state.lightProbeGridArray),Ot=wt.getProgramCacheKey(Rt),zt=j.programs;j.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?H.environment:null,j.fog=H.fog;let ie=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;j.envMap=_t.get(P.envMap||j.environment,ie),j.envMapRotation=j.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,zt===void 0&&(P.addEventListener("dispose",$n),zt=new Map,j.programs=zt);let re=zt.get(Ot);if(re!==void 0){if(j.currentProgram===re&&j.lightsStateVersion===Lt)return hu(P,Rt),re}else Rt.uniforms=wt.getUniforms(P),w!==null&&P.isNodeMaterial&&w.build(P,K,Rt),P.onBeforeCompile(Rt,L),re=wt.acquireProgram(Rt,Ot),zt.set(Ot,re),j.uniforms=Rt.uniforms;let Ht=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ht.clippingPlanes=q.uniform),hu(P,Rt),j.needsLights=up(P),j.lightsStateVersion=Lt,j.needsLights&&(Ht.ambientLightColor.value=Z.state.ambient,Ht.lightProbe.value=Z.state.probe,Ht.directionalLights.value=Z.state.directional,Ht.directionalLightShadows.value=Z.state.directionalShadow,Ht.spotLights.value=Z.state.spot,Ht.spotLightShadows.value=Z.state.spotShadow,Ht.rectAreaLights.value=Z.state.rectArea,Ht.ltc_1.value=Z.state.rectAreaLTC1,Ht.ltc_2.value=Z.state.rectAreaLTC2,Ht.pointLights.value=Z.state.point,Ht.pointLightShadows.value=Z.state.pointShadow,Ht.hemisphereLights.value=Z.state.hemi,Ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ht.spotLightMatrix.value=Z.state.spotLightMatrix,Ht.spotLightMap.value=Z.state.spotLightMap,Ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.lightProbeGrid=E.state.lightProbeGridArray.length>0,j.currentProgram=re,j.uniformsList=null,re}function cu(P){if(P.uniformsList===null){let H=P.currentProgram.getUniforms();P.uniformsList=nr.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function hu(P,H){let K=J.get(P);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function lp(P,H){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let K=0,j=P.length;K<j;K++){let Z=P[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function cp(P,H,K,j,Z){H.isScene!==!0&&(H=Le),nt.resetTextureUnits();let Ct=H.fog,Lt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?H.environment:null,Rt=Q===null?L.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:le.workingColorSpace,Ot=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,zt=_t.get(j.envMap||Lt,Ot),ie=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,re=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ht=!!K.morphAttributes.position,Se=!!K.morphAttributes.normal,ze=!!K.morphAttributes.color,ke=jn;j.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ke=L.toneMapping);let Te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ln=Te!==void 0?Te.length:0,It=J.get(j),Rn=E.state.lights;if($t===!0&&(Zt===!0||P!==ft)){let Ce=P===ft&&j.id===ot;q.setState(j,P,Ce)}let xe=!1;j.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Rn.state.version||It.outputColorSpace!==Rt||Z.isBatchedMesh&&It.batching===!1||!Z.isBatchedMesh&&It.batching===!0||Z.isBatchedMesh&&It.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&It.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&It.instancing===!1||!Z.isInstancedMesh&&It.instancing===!0||Z.isSkinnedMesh&&It.skinning===!1||!Z.isSkinnedMesh&&It.skinning===!0||Z.isInstancedMesh&&It.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&It.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&It.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&It.instancingMorph===!1&&Z.morphTexture!==null||It.envMap!==zt||j.fog===!0&&It.fog!==Ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==q.numPlanes||It.numIntersection!==q.numIntersection)||It.vertexAlphas!==ie||It.vertexTangents!==re||It.morphTargets!==Ht||It.morphNormals!==Se||It.morphColors!==ze||It.toneMapping!==ke||It.morphTargetsCount!==ln||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,It.__version=j.version);let Fn=It.currentProgram;xe===!0&&(Fn=wo(j,H,Z),w&&j.isNodeMaterial&&w.onUpdateProgram(j,Fn,It));let Kn=!1,Li=!1,ws=!1,Ee=Fn.getUniforms(),Ve=It.uniforms;if(M.useProgram(Fn.program)&&(Kn=!0,Li=!0,ws=!0),j.id!==ot&&(ot=j.id,Li=!0),It.needsLights){let Ce=lp(E.state.lightProbeGridArray,Z);It.lightProbeGrid!==Ce&&(It.lightProbeGrid=Ce,Li=!0)}if(Kn||ft!==P){M.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ee.setValue(V,"projectionMatrix",P.projectionMatrix),Ee.setValue(V,"viewMatrix",P.matrixWorldInverse);let Ui=Ee.map.cameraPosition;Ui!==void 0&&Ui.setValue(V,Pe.setFromMatrixPosition(P.matrixWorld)),D.logarithmicDepthBuffer&&Ee.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ee.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),ft!==P&&(ft=P,Li=!0,ws=!0)}if(It.needsLights&&(Rn.state.directionalShadowMap.length>0&&Ee.setValue(V,"directionalShadowMap",Rn.state.directionalShadowMap,nt),Rn.state.spotShadowMap.length>0&&Ee.setValue(V,"spotShadowMap",Rn.state.spotShadowMap,nt),Rn.state.pointShadowMap.length>0&&Ee.setValue(V,"pointShadowMap",Rn.state.pointShadowMap,nt)),Z.isSkinnedMesh){Ee.setOptional(V,Z,"bindMatrix"),Ee.setOptional(V,Z,"bindMatrixInverse");let Ce=Z.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Ee.setValue(V,"boneTexture",Ce.boneTexture,nt))}Z.isBatchedMesh&&(Ee.setOptional(V,Z,"batchingTexture"),Ee.setValue(V,"batchingTexture",Z._matricesTexture,nt),Ee.setOptional(V,Z,"batchingIdTexture"),Ee.setValue(V,"batchingIdTexture",Z._indirectTexture,nt),Ee.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ee.setValue(V,"batchingColorTexture",Z._colorsTexture,nt));let Di=K.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&O.update(Z,K,Fn),(Li||It.receiveShadow!==Z.receiveShadow)&&(It.receiveShadow=Z.receiveShadow,Ee.setValue(V,"receiveShadow",Z.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&H.environment!==null&&(Ve.envMapIntensity.value=H.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=nv()),Li){if(Ee.setValue(V,"toneMappingExposure",L.toneMappingExposure),It.needsLights&&hp(Ve,ws),Ct&&j.fog===!0&&Bt.refreshFogUniforms(Ve,Ct),Bt.refreshMaterialUniforms(Ve,j,et,$,E.state.transmissionRenderTarget[P.id]),It.needsLights&&It.lightProbeGrid){let Ce=It.lightProbeGrid;Ve.probesSH.value=Ce.texture,Ve.probesMin.value.copy(Ce.boundingBox.min),Ve.probesMax.value.copy(Ce.boundingBox.max),Ve.probesResolution.value.copy(Ce.resolution)}nr.upload(V,cu(It),Ve,nt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(nr.upload(V,cu(It),Ve,nt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ee.setValue(V,"center",Z.center),Ee.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Ee.setValue(V,"normalMatrix",Z.normalMatrix),Ee.setValue(V,"modelMatrix",Z.matrixWorld),j.uniformsGroups!==void 0){let Ce=j.uniformsGroups;for(let Ui=0,Ts=Ce.length;Ui<Ts;Ui++){let uu=Ce[Ui];ut.update(uu,Fn),ut.bind(uu,Fn)}}return Fn}function hp(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function up(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(P,H,K){let j=J.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),J.get(P.texture).__webglTexture=H,J.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,H){let K=J.get(P);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(P,H=0,K=0){Q=P,C=H,B=K;let j=null,Z=!1,Ct=!1;if(P){let Rt=J.get(P);if(Rt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(V.FRAMEBUFFER,Rt.__webglFramebuffer),G.copy(P.viewport),N.copy(P.scissor),Y=P.scissorTest,M.viewport(G),M.scissor(N),M.setScissorTest(Y),ot=-1;return}else if(Rt.__webglFramebuffer===void 0)nt.setupRenderTarget(P);else if(Rt.__hasExternalTextures)nt.rebindTextures(P,J.get(P.texture).__webglTexture,J.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ie=P.depthTexture;if(Rt.__boundDepthTexture!==ie){if(ie!==null&&J.has(ie)&&(P.width!==ie.image.width||P.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(P)}}let Ot=P.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Ct=!0);let zt=J.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(zt[H])?j=zt[H][K]:j=zt[H],Z=!0):P.samples>0&&nt.useMultisampledRTT(P)===!1?j=J.get(P).__webglMultisampledFramebuffer:Array.isArray(zt)?j=zt[K]:j=zt,G.copy(P.viewport),N.copy(P.scissor),Y=P.scissorTest}else G.copy(Pt).multiplyScalar(et).floor(),N.copy(ne).multiplyScalar(et).floor(),Y=Dt;if(K!==0&&(j=z),M.bindFramebuffer(V.FRAMEBUFFER,j)&&M.drawBuffers(P,j),M.viewport(G),M.scissor(N),M.setScissorTest(Y),Z){let Rt=J.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,K)}else if(Ct){let Rt=H;for(let Ot=0;Ot<P.textures.length;Ot++){let zt=J.get(P.textures[Ot]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ot,zt.__webglTexture,K,Rt)}}else if(P!==null&&K!==0){let Rt=J.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rt.__webglTexture,K)}ot=-1},this.readRenderTargetPixels=function(P,H,K,j,Z,Ct,Lt,Rt=0){if(!(P&&P.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){M.bindFramebuffer(V.FRAMEBUFFER,Ot);try{let zt=P.textures[Rt],ie=zt.format,re=zt.type;if(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Rt),!D.textureFormatReadable(ie)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(re)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-j&&K>=0&&K<=P.height-Z&&V.readPixels(H,K,j,Z,bt.convert(ie),bt.convert(re),Ct)}finally{let zt=Q!==null?J.get(Q).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(P,H,K,j,Z,Ct,Lt,Rt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(H>=0&&H<=P.width-j&&K>=0&&K<=P.height-Z){M.bindFramebuffer(V.FRAMEBUFFER,Ot);let zt=P.textures[Rt],ie=zt.format,re=zt.type;if(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Rt),!D.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ht=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.bufferData(V.PIXEL_PACK_BUFFER,Ct.byteLength,V.STREAM_READ),V.readPixels(H,K,j,Z,bt.convert(ie),bt.convert(re),0);let Se=Q!==null?J.get(Q).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,Se);let ze=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Sd(V,ze,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ct),V.deleteBuffer(Ht),V.deleteSync(ze),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,H=null,K=0){let j=Math.pow(2,-K),Z=Math.floor(P.image.width*j),Ct=Math.floor(P.image.height*j),Lt=H!==null?H.x:0,Rt=H!==null?H.y:0;nt.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,Lt,Rt,Z,Ct),M.unbindTexture()},this.copyTextureToTexture=function(P,H,K=null,j=null,Z=0,Ct=0){let Lt,Rt,Ot,zt,ie,re,Ht,Se,ze,ke=P.isCompressedTexture?P.mipmaps[Ct]:P.image;if(K!==null)Lt=K.max.x-K.min.x,Rt=K.max.y-K.min.y,Ot=K.isBox3?K.max.z-K.min.z:1,zt=K.min.x,ie=K.min.y,re=K.isBox3?K.min.z:0;else{let Ve=Math.pow(2,-Z);Lt=Math.floor(ke.width*Ve),Rt=Math.floor(ke.height*Ve),P.isDataArrayTexture?Ot=ke.depth:P.isData3DTexture?Ot=Math.floor(ke.depth*Ve):Ot=1,zt=0,ie=0,re=0}j!==null?(Ht=j.x,Se=j.y,ze=j.z):(Ht=0,Se=0,ze=0);let Te=bt.convert(H.format),ln=bt.convert(H.type),It;H.isData3DTexture?(nt.setTexture3D(H,0),It=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(nt.setTexture2DArray(H,0),It=V.TEXTURE_2D_ARRAY):(nt.setTexture2D(H,0),It=V.TEXTURE_2D),M.activeTexture(V.TEXTURE0),M.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);let Rn=M.getParameter(V.UNPACK_ROW_LENGTH),xe=M.getParameter(V.UNPACK_IMAGE_HEIGHT),Fn=M.getParameter(V.UNPACK_SKIP_PIXELS),Kn=M.getParameter(V.UNPACK_SKIP_ROWS),Li=M.getParameter(V.UNPACK_SKIP_IMAGES);M.pixelStorei(V.UNPACK_ROW_LENGTH,ke.width),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ke.height),M.pixelStorei(V.UNPACK_SKIP_PIXELS,zt),M.pixelStorei(V.UNPACK_SKIP_ROWS,ie),M.pixelStorei(V.UNPACK_SKIP_IMAGES,re);let ws=P.isDataArrayTexture||P.isData3DTexture,Ee=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){let Ve=J.get(P),Di=J.get(H),Ce=J.get(Ve.__renderTarget),Ui=J.get(Di.__renderTarget);M.bindFramebuffer(V.READ_FRAMEBUFFER,Ce.__webglFramebuffer),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ts=0;Ts<Ot;Ts++)ws&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(P).__webglTexture,Z,re+Ts),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(H).__webglTexture,Ct,ze+Ts)),V.blitFramebuffer(zt,ie,Lt,Rt,Ht,Se,Lt,Rt,V.DEPTH_BUFFER_BIT,V.NEAREST);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||P.isRenderTargetTexture||J.has(P)){let Ve=J.get(P),Di=J.get(H);M.bindFramebuffer(V.READ_FRAMEBUFFER,k),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,T);for(let Ce=0;Ce<Ot;Ce++)ws?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.__webglTexture,Z,re+Ce):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ve.__webglTexture,Z),Ee?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Di.__webglTexture,Ct,ze+Ce):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Di.__webglTexture,Ct),Z!==0?V.blitFramebuffer(zt,ie,Lt,Rt,Ht,Se,Lt,Rt,V.COLOR_BUFFER_BIT,V.NEAREST):Ee?V.copyTexSubImage3D(It,Ct,Ht,Se,ze+Ce,zt,ie,Lt,Rt):V.copyTexSubImage2D(It,Ct,Ht,Se,zt,ie,Lt,Rt);M.bindFramebuffer(V.READ_FRAMEBUFFER,null),M.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ee?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(It,Ct,Ht,Se,ze,Lt,Rt,Ot,Te,ln,ke.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(It,Ct,Ht,Se,ze,Lt,Rt,Ot,Te,ke.data):V.texSubImage3D(It,Ct,Ht,Se,ze,Lt,Rt,Ot,Te,ln,ke):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ct,Ht,Se,Lt,Rt,Te,ln,ke.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ct,Ht,Se,ke.width,ke.height,Te,ke.data):V.texSubImage2D(V.TEXTURE_2D,Ct,Ht,Se,Lt,Rt,Te,ln,ke);M.pixelStorei(V.UNPACK_ROW_LENGTH,Rn),M.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xe),M.pixelStorei(V.UNPACK_SKIP_PIXELS,Fn),M.pixelStorei(V.UNPACK_SKIP_ROWS,Kn),M.pixelStorei(V.UNPACK_SKIP_IMAGES,Li),Ct===0&&H.generateMipmaps&&V.generateMipmap(It),M.unbindTexture()},this.initRenderTarget=function(P){J.get(P).__webglFramebuffer===void 0&&nt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?nt.setTextureCube(P,0):P.isData3DTexture?nt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?nt.setTexture2DArray(P,0):nt.setTexture2D(P,0),M.unbindTexture()},this.resetState=function(){C=0,B=0,Q=null,M.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var yt={laneWidth:2,trackWidth:6,lanes:[-1,0,1],startSpeed:11,maxSpeed:27,speedRampDistance:2600,boostSpeedMul:1.55,jumpHeight:1.75,jumpDuration:.74,fastFallGravityMul:3.2,slideDuration:.85,laneChangeTime:.15,turnEarlyWindow:2.2,turnWallMargin:.6,turnHeadingTime:.28,stumbleWindow:3.5,stumbleSlowdown:.55,stumbleSlowTime:.8,shieldDuration:9,magnetDuration:10,boostDuration:5,magnetRadius:6.5,coinScore:5,distanceScorePerMetre:1,multiplierEvery:400,maxMultiplier:12,aheadDistance:190,behindPieces:2,playerRadius:.42,playerHeight:1.8,slideHeight:.8,camBack:6.2,camHeight:3.1,camLookAhead:7,camLookHeight:1.1,fovBase:62,fovMax:76};var ts=Math.PI*2,fe=(i,t,e)=>i<t?t:i>e?e:i,me=(i,t,e)=>i+(t-i)*e,Be=(i,t,e)=>{let n=fe((e-i)/(t-i),0,1);return n*n*(3-2*n)},ue=(i,t,e,n)=>me(i,t,1-Math.exp(-e*n)),Eh=i=>(i=(i+Math.PI)%ts,i<0&&(i+=ts),i-Math.PI),es=(i,t,e,n)=>i+Eh(t-i)*(1-Math.exp(-e*n));function ns(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(e.range(n,s+1)),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e.sign=()=>e()<.5?-1:1,e}function wl(i){return(i%4+4)%4*Math.PI*.5}function Ah(i,t=new F){let e=wl(i);return t.set(-Math.sin(e),0,-Math.cos(e))}function Rh(i,t=new F){let e=wl(i);return t.set(Math.cos(e),0,-Math.sin(e))}function bn(i){return Math.floor(i).toLocaleString("en-US")}var sr=class{constructor(){this.map=new Map}on(t,e){return(this.map.get(t)||this.map.set(t,[]).get(t)).push(e),()=>this.off(t,e)}off(t,e){let n=this.map.get(t);if(n){let s=n.indexOf(e);s>=0&&n.splice(s,1)}}emit(t,e){let n=this.map.get(t);if(n)for(let s of n.slice())s(e)}},Tl=()=>/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100;var an=yt.trackWidth,Sn=yt.laneWidth;function ro(i){return yt.startSpeed+(yt.maxSpeed-yt.startSpeed)*(1-Math.exp(-Math.max(0,i)/yt.speedRampDistance))}function iv(i){return 1-Math.exp(-Math.max(0,i)/2200)}var Je={root:{action:"jump",severity:"stumble",height:.55,depth:.9,label:"root"},log:{action:"jump",severity:"stumble",height:.85,depth:1.3,label:"fallen log"},boulder:{action:"jump",severity:"stumble",height:.8,depth:1.4,label:"boulder"},spikes:{action:"jump",severity:"kill",height:.6,depth:1,label:"spike trap"},fire:{action:"jump",severity:"kill",height:.9,depth:1.7,label:"fire trench"},brazier:{action:"jump",severity:"kill",height:.9,depth:1.2,label:"burning brazier"},gap:{action:"jump",severity:"fall",height:0,depth:4,label:"gap"},branch:{action:"slide",severity:"stumble",height:1.25,depth:.8,label:"low branch"},lintel:{action:"slide",severity:"kill",height:1.3,depth:1,label:"stone lintel"},pillar:{action:"dodge",severity:"kill",height:3.2,depth:1.2,label:"pillar"},statue:{action:"dodge",severity:"kill",height:2.6,depth:1.3,label:"statue"},rubble:{action:"dodge",severity:"kill",height:2.2,depth:1.6,label:"rubble"},trunk:{action:"dodge",severity:"kill",height:4,depth:1.4,label:"tree trunk"}};var Ch=1;function Oe(i,t,e,n={}){let s=Je[i],r=e.slice().sort((o,a)=>o-a);return{id:Ch++,type:i,u:t,lanes:r,action:s.action,severity:s.severity,height:s.height,depth:n.depth||s.depth,vMin:r[0]*Sn-Sn*.5,vMax:r[r.length-1]*Sn+Sn*.5,hit:!1,destroyed:!1,...n}}var Al=class{constructor(t=1){this.onPieceAdded=null,this.onPieceRemoved=null,this.reset(t)}reset(t=1){if(this.pieces)for(let n of Array.from(this.pieces))this._remove(n);this.seed=t,this.rng=ns(t*7919+13),this.pieces=new Set,this.grid=new Map,this.root=null,this.stats={generated:0};let e=this._generatePiece(null,{origin:new F(0,0,0),heading:0,startDistance:0,contentStart:0},{safe:!0});return this.root=e,this.ensureAhead(e,0,1/0),e}worldPosition(t,e,n,s=0,r=new F){return r.copy(t.origin),r.addScaledVector(t.fwd,e),r.addScaledVector(t.right,n),r.y+=s,r}sampleBehind(t,e,n,s,r={}){let o=t,a=e-s,l=0;for(;a<0&&o.prev&&l++<16;){let c=o.prev;a=(c.end==="straight"?c.length:c.length-an*.5)+a,o=c}return a=Math.max(a,0),r.piece=o,r.u=a,r.v=n,r.pos=this.worldPosition(o,a,n,0,r.pos||new F),r.fwd=o.fwd,r}ensureAhead(t,e,n=1){let s=0,r=yt.aheadDistance,o=(a,l)=>{if(l<=0||s>=n)return;let c=a.end==="straight"?["straight"]:a.end==="tee"?["left","right"]:[a.end];for(let d of c){let h=a.next[d];if(!h){if(s>=n)return;h=this._generateAfter(a,d),s++}o(h,l-h.length)}};return o(t,r-(t.length-e)),s}advance(t,e){for(let s of Object.keys(t.next)){let r=t.next[s];r&&r!==e&&(this._removeSubtree(r),t.next[s]=null)}let n=e;for(let s=0;s<yt.behindPieces&&n.prev;s++)n=n.prev;if(n.prev){let s=n.prev;n.prev=null,this._removeChain(s)}}_removeChain(t){let e=t;for(;e;){let n=e.prev;this._remove(e),e=n}}_removeSubtree(t){for(let e of Object.keys(t.next)){let n=t.next[e];n&&this._removeSubtree(n)}this._remove(t)}_remove(t){this.pieces.has(t)&&(this.pieces.delete(t),this._vacate(t),this.onPieceRemoved&&this.onPieceRemoved(t))}_cellKeys(t,e,n,s,r,o,a,l){for(let d=s;d<=r;d+=3)for(let h=o;h<=a;h+=3){let u=t.x+e.x*d+n.x*h,f=t.z+e.z*d+n.z*h;l.push(Math.floor(u/6)+4096<<13|Math.floor(f/6)+4096)}return l}_occupy(t){let e=t.contentStart>0?-an*.5:0;t.cells=this._cellKeys(t.origin,t.fwd,t.right,e,t.length,-(an*.5+2),an*.5+2,[]);for(let n of t.cells){let s=this.grid.get(n);s||(s=new Set,this.grid.set(n,s)),s.add(t.id)}}_vacate(t){if(t.cells){for(let e of t.cells){let n=this.grid.get(e);n&&(n.delete(t.id),n.size||this.grid.delete(e))}t.cells=null}}_isFree(t,e,n,s,r,o,a){let l=this._cellKeys(t,e,n,s,r,o,a,[]);for(let c of l)if(this.grid.has(c))return!1;return!0}_generateAfter(t,e){let n={origin:new F,heading:t.heading,startDistance:0,contentStart:0};t.end==="straight"?(n.origin.copy(t.origin).addScaledVector(t.fwd,t.length),n.startDistance=t.startDistance+t.length):(n.origin.copy(t.origin).addScaledVector(t.fwd,t.length-an*.5),n.heading=t.heading+(e==="left"?1:-1),n.startDistance=t.startDistance+t.length-an*.5,n.contentStart=an*.5);let s=this._generatePiece(t,n,{branch:e});return t.next[e]=s,s}_generatePiece(t,e,n={}){let s=this.rng,r=(e.heading%4+4)%4,o=iv(e.startDistance),a=e.contentStart>0,l,c;if(!t)l="temple",c=0;else if(l=t.kind,c=t.kindRun+1,c>=(l==="bridge"?2:3)||c>=2&&s.chance(.35)){let b={temple:["ruins","jungle","jungle","cliff","bridge"],jungle:["cliff","temple","bridge","bridge","ruins"],cliff:["bridge","bridge","jungle","ruins","temple"],bridge:["jungle","cliff","ruins"],ruins:["temple","jungle","cliff","bridge","bridge"]}[l],w=s.pick(b);w==="bridge"&&(a||o<.08)&&(w="jungle"),l=w,c=0}let d=ro(e.startDistance),h;n.safe?h=64:l==="bridge"?h=s.range(22,34):h=s.range(34,58),a&&(h=Math.max(h,30,1.5*d)),h=Math.round(h);let u=Ah(r),f=Rh(r),m=e.origin.clone().addScaledVector(u,h-an*.5),x=e.origin.clone().addScaledVector(u,h),g=(L,b)=>this._isFree(L,Ah(b),Rh(b),8,80,-(an*.5+2),an*.5+2),p=this._isFree(x,u,f,2,80,-(an*.5+2),an*.5+2),_=g(m,r+1),S=g(m,r-1),y=t?t.lastTurn:null,R=t?t.turnRun:0,E="straight",I=t?t.end==="tee"?0:t.sinceTee+1:3;if(!n.safe&&l!=="bridge"){let L=Math.min(.55,.42+.13*o);if(s.chance(L)||!p){let w=[];_&&!(y==="left"&&R>=2)&&w.push("left"),S&&!(y==="right"&&R>=2)&&w.push("right"),w.length===2&&I>=3&&s.chance(.3)?E="tee":w.length?E=s.pick(w):_?E="left":S?E="right":E="straight"}}else!n.safe&&!p&&(h=Math.max(20,Math.round(h*.7)));let v=E==="left"||E==="right"?E:null,A={id:Ch++,kind:l,kindRun:c,sinceTee:I,branch:n.branch||null,safe:!!n.safe,origin:e.origin.clone(),heading:r,angle:wl(r),fwd:u,right:f,startDistance:e.startDistance,length:h,contentStart:e.contentStart,end:E,tileStart:E==="straight"?1/0:h-an,lastTurn:v||(E==="tee"?null:y),turnRun:v?v===y?R+1:1:E==="tee"?0:R,obstacles:[],coins:[],powerups:[],seed:Math.floor(s()*1e9),difficulty:o,side:sv(l,s),prev:t,next:{},visual:null,coinSlots:null,cells:null};A.sideWidth={left:0,right:0};for(let L of["left","right"]){if(A.side[L]!=="drop")continue;if(A.branch===L){A.side[L]="cliffwall";continue}let b=L==="left"?-1:1,w=A.contentStart>0?A.contentStart+6:0,z=0;for(let k of[58,40,26]){let T=b<0?-(an*.5+k):an*.5+3,C=b<0?-(an*.5+3):an*.5+k;if(this._isFree(A.origin,u,f,w,h,T,C)){z=k;break}}z?A.sideWidth[L]=z:A.side[L]="cliffwall"}return l==="bridge"&&(A.side.left!=="drop"||A.side.right!=="drop")&&(A.kind=A.side.left==="drop"||A.side.right==="drop"?"cliff":"jungle",A.kind==="jungle"&&(A.side={left:"jungle",right:"jungle"})),this._occupy(A),A.obstacleTail=1/0,n.safe||this._placeObstacles(A,s),this._placeCoins(A,s),this._placePowerups(A,s,t),this.pieces.add(A),this.stats.generated++,this.onPieceAdded&&this.onPieceAdded(A),A}_placeObstacles(t,e){let n=t.difficulty,s=ro(t.startDistance),r=me(1.05,.58,n),o;if(t.contentStart>0)o=t.contentStart+Math.max(7,s*.85);else{let u=t.prev?t.prev.obstacleTail:1/0;o=Math.max(4,s*r-u)}let a=t.end==="straight"?t.length-3:t.tileStart-5-s*.25,l=o+e.range(0,5),c=null,d=me(.55,1,n);for(;l<a;){let u=ro(t.startDistance+l),f=me(1,.45,n);if(e.chance(d)){let m=rv(t.kind,n,e,c),x=m.place(t,l,e,n,u,a);c=m.name,l+=x+u*f+e.range(0,u*.45)}else l+=u*.5}t.obstacles=t.obstacles.filter(u=>u.u+u.depth*.5<=a),t.obstacles.sort((u,f)=>u.u-f.u);let h=t.obstacles[t.obstacles.length-1];t.obstacleTail=h?t.length-(h.u+h.depth*.5):1/0}_placeCoins(t,e){let n=t.difficulty,s=t.contentStart+(t.contentStart>0?3:2),r=t.end==="straight"?t.length-1:t.tileStart-1.5,o=t.obstacles,a=o.map(u=>[u.u-u.depth*.5-1.2,u.u+u.depth*.5+1.2]),l=[],c=s;for(let[u,f]of a)u-c>=6&&l.push([c,u]),c=Math.max(c,f);r-c>=6&&l.push([c,r]);let d=.95,h=(u,f,m=d)=>{t.coins.push({u,v:f,y:m,taken:!1})};for(let[u,f]of l){if(e.chance(.2-.05*n))continue;let m=f-u,x=e.pick(m>20?["line","wave","double","line","zig"]:["line","line","double"]),g=1.6,p=Math.floor(Math.min(m,24)/g),_=u+(m-p*g)*.5+g*.5,S=e.pick([-1,0,1]);if(x==="line")for(let y=0;y<p;y++)h(_+y*g,S*Sn);else if(x==="double"){let y=S===0?e.sign():0;for(let R=0;R<p;R++)h(_+R*g,S*Sn),h(_+R*g,y*Sn)}else if(x==="wave")for(let y=0;y<p;y++){let R=y/Math.max(1,p-1);h(_+y*g,Math.sin(R*Math.PI*2)*Sn)}else if(x==="zig")for(let y=0;y<p;y++)y%5===0&&(S=fe(S+e.sign(),-1,1)),h(_+y*g,S*Sn)}for(let u of o)if(u.action==="jump"&&e.chance(.75)){let f=u.lanes[Math.floor(e()*u.lanes.length)],m=Math.max(2.4,u.depth*.5+2.2),x=7;for(let g=0;g<=x;g++){let p=g/x,_=u.u-m+p*m*2,S=d+Math.sin(p*Math.PI)*(yt.jumpHeight*.85);h(_,f*Sn,S)}}else if(u.action==="slide"&&e.chance(.7)){let f=u.lanes[Math.floor(e()*u.lanes.length)];for(let m=-2;m<=2;m++)h(u.u+m*1.2,f*Sn,.45)}else if(u.action==="dodge"&&e.chance(.6)){let f=o.filter(x=>Math.abs(x.u-u.u)<.05),m=[-1,0,1].filter(x=>!f.some(g=>g.lanes.includes(x)));if(m.length){let x=e.pick(m);for(let g=-2;g<=2;g++)h(u.u+g*1.4,x*Sn)}else{let x=f.find(g=>g.action==="slide");if(x)for(let g=-2;g<=2;g++)h(u.u+g*1.2,x.lanes[0]*Sn,.45)}}t.coins=t.coins.filter(u=>{if(u.u<s-.5||u.u>r+.5)return!1;for(let f of o)if(!(Math.abs(u.u-f.u)>f.depth*.5+.3||!(u.v>f.vMin-.2&&u.v<f.vMax+.2))&&(f.action==="dodge"||f.action==="slide"&&u.y>f.height-.3||f.action==="jump"&&u.y<f.height+.2&&f.type!=="gap"))return!1;return!0}),t.coins.sort((u,f)=>u.u-f.u)}_placePowerups(t,e,n){let s=n?n.powerupGap+n.length:0;t.powerupGap=s;let r=me(330,520,e());if(t.safe||s<r||t.kind==="bridge"&&e.chance(.5))return;let o=[],a=t.contentStart+6,l=t.end==="straight"?t.length-4:t.tileStart-4;for(let f=a;f<l;f+=2)t.obstacles.some(x=>Math.abs(x.u-f)<x.depth*.5+3.5)||o.push(f);if(!o.length)return;let c=e.pick(o),d=e(),h=d<.4?"magnet":d<.75?"shield":"boost",u=e.pick([-1,0,1]);t.powerups.push({id:Ch++,type:h,u:c,v:u*Sn,y:1.05,taken:!1}),t.coins=t.coins.filter(f=>!(Math.abs(f.u-c)<1.2&&Math.abs(f.v-u*Sn)<1)),t.powerupGap=-t.length+(t.length-c)}};function sv(i,t){let e=()=>{switch(i){case"temple":return t.pick(["wall","wall","wall","jungle"]);case"jungle":return t.pick(["jungle","jungle","cliffwall","open"]);case"cliff":return t.pick(["drop","drop","cliffwall"]);case"bridge":return"drop";case"ruins":return t.pick(["wall","jungle","open","drop"]);default:return"jungle"}},n=e(),s=e();return i==="cliff"&&n===s&&(s=n==="drop"?"cliffwall":"drop"),{left:n,right:s}}var Tn=[-1,0,1],Ms=i=>i.pick(Tn),El=(i,t)=>{let e=Tn.slice();for(let n=e.length-1;n>0;n--){let s=Math.floor(i()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e.slice(0,t)},bs=i=>{let t=i.slice().sort((s,r)=>s-r),e=[],n=[t[0]];for(let s=1;s<t.length;s++)t[s]===t[s-1]+1?n.push(t[s]):(e.push(n),n=[t[s]]);return e.push(n),e},nf=[{name:"root",minD:0,kinds:["jungle","cliff","ruins","temple"],w:3,place:(i,t,e)=>{let n=e.pick([1,2,3,3]);for(let s of bs(El(e,n)))i.obstacles.push(Oe("root",t,s));return Je.root.depth}},{name:"log",minD:.03,kinds:["jungle","cliff","ruins"],w:2,place:(i,t)=>(i.obstacles.push(Oe("log",t,Tn)),Je.log.depth)},{name:"boulder",minD:.05,kinds:["jungle","cliff","ruins","temple"],w:2,place:(i,t,e)=>{let n=e.pick([1,1,2]);for(let s of bs(El(e,n)))i.obstacles.push(Oe("boulder",t,s));return Je.boulder.depth}},{name:"branch",minD:.04,kinds:["jungle","cliff"],w:2,place:(i,t)=>(i.obstacles.push(Oe("branch",t,Tn)),Je.branch.depth)},{name:"lintel",minD:.12,kinds:["temple","ruins"],w:2,place:(i,t)=>(i.obstacles.push(Oe("lintel",t,Tn)),Je.lintel.depth)},{name:"pillar",minD:.08,kinds:["temple","ruins","cliff"],w:3,place:(i,t,e)=>(i.obstacles.push(Oe("pillar",t,[Ms(e)])),Je.pillar.depth)},{name:"trunk",minD:.08,kinds:["jungle"],w:3,place:(i,t,e)=>(i.obstacles.push(Oe("trunk",t,[Ms(e)])),Je.trunk.depth)},{name:"statue",minD:.15,kinds:["temple","ruins"],w:2,place:(i,t,e)=>(i.obstacles.push(Oe("statue",t,[Ms(e)])),Je.statue.depth)},{name:"fire",minD:.12,kinds:["temple","ruins"],w:2.5,place:(i,t)=>(i.obstacles.push(Oe("fire",t,Tn)),Je.fire.depth)},{name:"brazier",minD:.1,kinds:["temple","ruins","cliff"],w:2,place:(i,t,e)=>{let n=e.pick([1,1,2]);for(let s of bs(El(e,n)))i.obstacles.push(Oe("brazier",t,s));return Je.brazier.depth}},{name:"gap",minD:.1,kinds:["temple","ruins","cliff","jungle"],w:2.5,place:(i,t,e,n)=>{let s=me(3.4,5.2,n)+e.range(-.3,.3);return i.obstacles.push(Oe("gap",t,Tn,{depth:s})),s}},{name:"bridgegap",minD:0,kinds:["bridge"],w:6,place:(i,t,e,n)=>{let s=me(3.2,5,n);return i.obstacles.push(Oe("gap",t,Tn,{depth:s,bridge:!0})),s}},{name:"bridgeplank",minD:.2,kinds:["bridge"],w:2,place:(i,t,e)=>(i.obstacles.push(Oe("log",t,Tn,{plank:!0})),Je.log.depth)},{name:"rubble",minD:.25,kinds:["temple","ruins","cliff"],w:2.5,place:(i,t,e)=>{let n=Ms(e),s=Tn.filter(r=>r!==n);for(let r of bs(s))i.obstacles.push(Oe("rubble",t,r));return Je.rubble.depth}},{name:"spikes",minD:.35,kinds:["temple","ruins"],w:2,place:(i,t,e)=>{let n=e.pick([1,2,2]);for(let s of bs(El(e,n)))i.obstacles.push(Oe("spikes",t,s));return Je.spikes.depth}},{name:"pillar+root",minD:.4,kinds:["temple","ruins","cliff","jungle"],w:2.5,place:(i,t,e)=>{let n=Ms(e),s=i.kind==="jungle"?"trunk":"pillar";i.obstacles.push(Oe(s,t,[n]));for(let r of bs(Tn.filter(o=>o!==n)))i.obstacles.push(Oe("root",t,r));return Je.pillar.depth}},{name:"pillar+bar",minD:.5,kinds:["temple","ruins","jungle"],w:2.5,place:(i,t,e)=>{let n=Ms(e),s=i.kind==="jungle"?"trunk":"pillar",r=i.kind==="jungle"?"branch":"lintel";i.obstacles.push(Oe(s,t,[n]));for(let o of bs(Tn.filter(a=>a!==n)))i.obstacles.push(Oe(r,t,o));return Je.pillar.depth}},{name:"zigzag",minD:.3,kinds:["temple","ruins","cliff","jungle"],w:2.5,place:(i,t,e,n,s,r=1/0)=>{let o=i.kind==="jungle"?"trunk":"pillar",a=s*me(.6,.45,n),l=Math.max(1,Math.min(n>.6?3:2,1+Math.floor((r-t-Je.pillar.depth)/a))),c=Ms(e);for(let d=0;d<l;d++)i.obstacles.push(Oe(o,t+d*a,[c])),c=fe(c+(c===0?e.sign():-Math.sign(c)),-1,1);return(l-1)*a+Je.pillar.depth}},{name:"fire+gap",minD:.55,kinds:["temple","ruins"],w:1.5,place:(i,t,e,n,s,r=1/0)=>{i.obstacles.push(Oe("fire",t,Tn));let o=s*.9;return t+o+1.8<=r?(i.obstacles.push(Oe("gap",t+o,Tn,{depth:3.6})),o+3.6):Je.fire.depth}}];function rv(i,t,e,n){let s=nf.filter(a=>a.kinds.includes(i)&&t>=a.minD&&a.name!==n);if(!s.length)return nf[0];let r=0;for(let a of s)r+=a.w;let o=e()*r;for(let a of s)if(o-=a.w,o<=0)return a;return s[s.length-1]}var ov=yt.trackWidth,sf=yt.laneWidth,rf=8*yt.jumpHeight/(yt.jumpDuration*yt.jumpDuration),av=4*yt.jumpHeight/yt.jumpDuration,Rl=class{constructor(t,e){this.track=t,this.events=e,this.worldPos=new F,this.reset(t.root)}reset(t){this.piece=t,this.u=4,this.lane=0,this.lateral=0,this.lateralVel=0,this.y=0,this.vy=0,this.state="run",this.deathType=null,this.deathSide=0,this.deadTime=0,this.alive=!0,this.speed=0,this.targetSpeed=yt.startSpeed,this.distance=0,this.slideTimer=0,this.fastFall=!1,this.bufferedJump=0,this.bufferedSlide=!1,this.queuedTurn=null,this.turnLean=0,this.turnTimer=0,this.stumbleTimer=0,this.slowTimer=0,this.shield=!1,this.boost=!1,this.boostFactor=1,this.time=0,this.runTime=0,this.lastFootstep=0,this.updateWorld()}get turnWindowStart(){return this.piece.tileStart-Math.max(yt.turnEarlyWindow,this.speed*.35)}get inTurnWindow(){return this.piece.end!=="straight"&&this.u>=this.turnWindowStart}get inTile(){return this.piece.end!=="straight"&&this.u>=this.piece.tileStart}get onGround(){return this.y<=1e-4&&this.state!=="jump"&&this.state!=="fall"}get hitboxHeight(){return this.state==="slide"?yt.slideHeight:yt.playerHeight}get speed01(){return fe((this.speed-yt.startSpeed)/(yt.maxSpeed-yt.startSpeed),0,1.3)}updateWorld(){return this.track.worldPosition(this.piece,this.u,this.lateral,this.y,this.worldPos),this.worldPos}handleAction(t){if(this.alive)switch(t){case"left":case"right":this._sideways(t==="left"?-1:1);break;case"up":this._jump();break;case"down":this._slide();break}}_sideways(t){let e=t<0?"left":"right",n=this.piece;if(this.inTurnWindow){if(n.end==="tee"||n.end===e){this.inTile?this._turn(e):this.queuedTurn=e;return}if(this.inTile){this.deathSide=t,this._die("hit");return}}let s=fe(this.lane+t,-1,1);s!==this.lane?(this.lane=s,this.events.emit("lanechange",t)):this.events.emit("bump",t)}_jump(){if(this.state!=="fall"){if(this.state==="jump"){this.bufferedJump=this.vy<0?10:.35;return}this.state="jump",this.vy=av,this.fastFall=!1,this.slideTimer=0,this.bufferedSlide=!1,this.events.emit("jump")}}_slide(){if(this.state==="jump"){this.fastFall=!0,this.bufferedSlide=!0,this.events.emit("fastfall");return}this.state!=="fall"&&(this.state="slide",this.slideTimer=yt.slideDuration,this.events.emit("slide"))}_turn(t){let e=this.piece,n=e.next[t]||this.track._generateAfter(e,t),s=e.length-ov*.5,r=this.u-s,o=this.lateral,a,l;t==="left"?(a=-o,l=r):(a=o,l=-r),this.track.advance(e,n),this.piece=n,this.u=a,this.lateral=l,this.lane=fe(Math.round(l/sf),-1,1),this.queuedTurn=null,this.turnLean=t==="left"?-1:1,this.turnTimer=.4,this.events.emit("turn",t),this.events.emit("piece",n)}update(t){if(this.time+=t,!this.alive){this._updateDead(t),this.updateWorld();return}this.runTime+=t;let e=ro(this.distance),n=this.boost?1+(yt.boostSpeedMul-1)*fe(this.boostFactor,0,1):1;this.targetSpeed=e*n*(this.slowTimer>0?yt.stumbleSlowdown:1),this.speed=ue(this.speed,this.targetSpeed,this.slowTimer>0?14:3.5,t),this.slowTimer>0&&(this.slowTimer-=t),this.stumbleTimer>0&&(this.stumbleTimer-=t),this.turnTimer>0&&(this.turnTimer-=t,this.turnTimer<=0&&(this.turnLean=0));let s=this.speed*t;this.u+=s,this.distance+=s;let r=this.lane*sf,o=this.lateral;if(this.lateral=ue(this.lateral,r,3/yt.laneChangeTime,t),this.lateralVel=(this.lateral-o)/Math.max(t,1e-4),this.state==="jump"){let l=rf*(this.fastFall?yt.fastFallGravityMul:1);this.vy-=l*t,this.y+=this.vy*t,this.y<=0&&(this.y=0,this.vy=0,this.state=this.bufferedSlide?"slide":"run",this.bufferedSlide&&(this.slideTimer=yt.slideDuration,this.bufferedSlide=!1,this.events.emit("slide")),this.fastFall=!1,this.events.emit("land"),this.bufferedJump>0&&(this.bufferedJump=0,this._jump()))}else this.state==="slide"&&(this.slideTimer-=t,this.slideTimer<=0&&(this.state="run"));if(this.bufferedJump>0&&(this.bufferedJump-=t),this.boost){if(this.state!=="jump"){let l=this.speed*.34;for(let c of this.piece.obstacles)if(c.type==="gap"&&c.u-c.depth*.5>this.u&&c.u-c.depth*.5-this.u<l){this._jump();break}}if(this.inTile&&!this.queuedTurn){let l=this.piece,c=l.end==="tee"?this.lane<=0?"left":"right":l.end;this._turn(c)}}let a=this.piece;if(a.end==="straight"){if(this.u>=a.length){let l=a.next.straight||this.track._generateAfter(a,"straight");this.track.advance(a,l),this.u-=a.length,this.piece=l,this.events.emit("piece",l)}}else this.queuedTurn&&this.u>=a.tileStart+1.2?this._turn(this.queuedTurn):this.u>=a.length-yt.turnWallMargin&&(this.deathSide=0,this._die("hit"));this.alive&&this._collide(),this.track.ensureAhead(this.piece,this.u,1),this.updateWorld()}_collide(){let t=yt.playerRadius,e=this.u,n=this.lateral;for(let s of this.piece.obstacles){if(s.hit||s.destroyed)continue;let r=s.depth*.5;if(s.type==="gap"){if(this.y<=.001&&this.state!=="jump"&&e>s.u-r+.25&&e<s.u+r-.25){if(this.boost){this._jump();continue}s.hit=!0,this._die("fall",s);return}continue}if(Math.abs(s.u-e)>r+t||!(n+t>s.vMin+.2&&n-t<s.vMax-.2))continue;let o=!1;if(s.action==="jump"?o=this.y>s.height-.08:s.action==="slide"&&(o=this.state==="slide"),o)continue;if(s.hit=!0,this.boost){s.destroyed=!0,this.events.emit("smash",s);continue}if(this.shield){s.destroyed=!0,this.shield=!1,this.events.emit("shieldbreak",s);continue}if(s.severity==="stumble"){if(this._stumble(s),!this.alive)return;continue}let a=s.type==="fire"||s.type==="brazier"?"burn":"hit";this._die(a,s);return}}_stumble(t){if(this.stumbleTimer>0){this._die("caught",t);return}this.stumbleTimer=yt.stumbleWindow,this.slowTimer=yt.stumbleSlowTime,this.speed*=.75,this.state==="slide"&&(this.state="run"),this.events.emit("stumble",t)}_die(t,e=null){this.alive&&(this.alive=!1,this.state=t==="fall"?"fall":"dead",this.deathType=t,this.deadTime=0,this.queuedTurn=null,this.events.emit("die",{type:t,obstacle:e,side:this.deathSide}))}_updateDead(t){if(this.deadTime+=t,this.deathType==="fall"){let e=Math.max(0,this.speed*(1-this.deadTime*1.6));this.u+=e*t,this.lateral+=this.deathSide*6*t,this.vy-=rf*.9*t,this.y+=this.vy*t,this.speed=e}else this.speed=Math.max(0,this.speed-60*t),this.deathType==="hit"&&this.deadTime<.25&&(this.deathSide?this.lateral-=this.deathSide*2.5*t:this.u-=3.5*t)}};var Cl=class{constructor(t){this.camera=t,this.angle=0,this.pos=new F,this.look=new F,this.fwd=new F(0,0,-1),this.right=new F(1,0,0),this.shake=0,this.shakeSeed=0,this.fov=yt.fovBase,this._tmp=new F,this._tmp2=new F,this._deathAnchor=new F,this._deathTime=0}reset(t,e){this.angle=t,this._updateFrame(),this.pos.copy(e).addScaledVector(this.fwd,-yt.camBack).add(new F(0,yt.camHeight,0)),this.look.copy(e).addScaledVector(this.fwd,yt.camLookAhead).add(new F(0,yt.camLookHeight,0)),this.fov=yt.fovBase,this.shake=0,this._deathTime=0,this._apply()}addShake(t){this.shake=Math.min(1.5,this.shake+t)}_updateFrame(){let t=this.angle;this.fwd.set(-Math.sin(t),0,-Math.cos(t)),this.right.set(Math.cos(t),0,-Math.sin(t))}update(t,e){if(e.dead){if(this._deathTime+=t,e.deathType==="fall"){let n=this._tmp2.copy(e.playerPos);n.y+=.6,this.look.lerp(n,1-Math.exp(-6*t));let s=this._tmp.copy(e.anchor).addScaledVector(this.fwd,-yt.camBack*.8);s.y+=yt.camHeight+.5,this.pos.lerp(s,1-Math.exp(-3*t))}else{let n=this._tmp2.copy(e.playerPos);n.y+=1,this.look.lerp(n,1-Math.exp(-5*t));let s=this._tmp.copy(e.playerPos).addScaledVector(this.fwd,-4.2).addScaledVector(this.right,1.6);s.y+=2.2,this.pos.lerp(s,1-Math.exp(-2.2*t))}this.fov=ue(this.fov,yt.fovBase-4,3,t)}else{this.angle=es(this.angle,e.targetAngle,1/yt.turnHeadingTime*1.1,t),this._updateFrame();let n=this.camera.aspect<1?1:0,s=yt.camBack+e.speed01*.9+(e.boost?.8:0)+n*1.8,r=yt.camHeight+e.playerY*.35+n*.8,o=this._tmp.copy(e.anchor).addScaledVector(this.fwd,-s);o.y+=r;let a=this._tmp2.copy(e.anchor).addScaledVector(this.fwd,yt.camLookAhead+n*3);a.y+=yt.camLookHeight+e.playerY*.5,this.pos.x=ue(this.pos.x,o.x,16,t),this.pos.y=ue(this.pos.y,o.y,10,t),this.pos.z=ue(this.pos.z,o.z,16,t),this.look.x=ue(this.look.x,a.x,18,t),this.look.y=ue(this.look.y,a.y,12,t),this.look.z=ue(this.look.z,a.z,18,t);let l=me(yt.fovBase,yt.fovMax,fe(e.speed01,0,1))+(e.boost?6:0);this.fov=ue(this.fov,l,3,t),this._deathTime=0}this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.4)),this._apply()}updateMenu(t,e,n){let s=n*.22,r=5.2,o=this._tmp.set(e.x+Math.sin(s)*r,e.y+2+Math.sin(n*.5)*.2,e.z+Math.cos(s)*r),a=this._tmp2.set(e.x,e.y+1.1,e.z);this.pos.lerp(o,1-Math.exp(-3*t)),this.look.lerp(a,1-Math.exp(-4*t)),this.fov=ue(this.fov,yt.fovBase-6,2,t),this.angle=s+Math.PI,this._updateFrame(),this._apply()}_apply(){let t=this.camera;if(t.position.copy(this.pos),this.shake>0){this.shakeSeed+=1;let e=this.shake*this.shake*.35;t.position.x+=Math.sin(this.shakeSeed*12.9898)*.5*e,t.position.y+=Math.sin(this.shakeSeed*78.233)*.5*e,t.position.z+=Math.sin(this.shakeSeed*37.719)*.5*e}t.lookAt(this.look),Math.abs(t.fov-this.fov)>.01&&(t.fov=this.fov,t.updateProjectionMatrix())}};function li(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ae,c=0;for(let d=0;d<i.length;++d){let h=i[d],u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(e){let d=0,h=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+d);d+=i[u].attributes.position.count}l.setIndex(h)}for(let d in r){let h=of(r[d]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,h)}for(let d in o){let h=o[d][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<h;++u){let f=[];for(let x=0;x<o[d].length;++x)f.push(o[d][x][u]);let m=of(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}}return l}function of(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let d=i[c];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}let o=new t(r),a=new ce(o,e,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let h=l/e;for(let u=0,f=d.count;u<f;u++)for(let m=0;m<e;m++){let x=d.getComponent(u,m);a.setComponent(u+h,m,x)}}else o.set(d.array,l);l+=d.count*e}return s!==void 0&&(a.gpuType=s),a}var af=new Kt,Ph=new en,lv=new _n,Ih=new F,lf=new F,Pl=new vt,cf=new Map;function Ut(i,...t){let e=i+":"+t.join(","),n=cf.get(e);if(n)return n;switch(i){case"box":n=new si(1,1,1,...t);break;case"cyl":n=new bi(t[0]??1,t[1]??1,1,t[2]??8,t[3]??1,t[4]??!1);break;case"cone":n=new Yn(1,1,t[0]??7,1);break;case"sphere":n=new wi(1,t[0]??8,t[1]??6);break;case"ico":n=new Si(1,t[0]??0);break;case"dodeca":n=new Ur(1,t[0]??0);break;case"plane":n=new vn(1,1,t[0]??1,t[1]??1);break;case"tetra":n=new Fr(1,t[0]??0);break;case"torus":n=new Ti(1,t[0]??.2,t[1]??6,t[2]??12);break;default:throw new Error("unknown geo "+i)}return n.index&&(n=n.toNonIndexed()),cf.set(e,n),n}var Un=class{constructor(){this.parts=[]}add(t,{position:e=[0,0,0],rotation:n=[0,0,0],quaternion:s=null,scale:r=[1,1,1],color:o=16777215,sway:a=0,jitter:l=0}={}){let c=t.clone();s?Ph.copy(s):Ph.setFromEuler(lv.set(n[0],n[1],n[2])),typeof r=="number"?Ih.set(r,r,r):Ih.set(r[0],r[1],r[2]),lf.set(e[0],e[1],e[2]),af.compose(lf,Ph,Ih),c.applyMatrix4(af);let d=c.attributes.position.count,h=new Float32Array(d*3),u=new Float32Array(d);Pl.set(o);let f=c.attributes.position,m=1/0,x=-1/0;if(a)for(let g=0;g<d;g++){let p=f.getY(g);p<m&&(m=p),p>x&&(x=p)}for(let g=0;g<d;g++){let p=Pl.r,_=Pl.g,S=Pl.b;if(l){let y=1+(cv(g*7+d)-.5)*l;p*=y,_*=y,S*=y}if(h[g*3]=p,h[g*3+1]=_,h[g*3+2]=S,a){let y=x>m?(f.getY(g)-m)/(x-m):1;u[g]=typeof a=="function"?a(y):a*y}}return c.setAttribute("color",new ce(h,3)),c.setAttribute("aSway",new ce(u,1)),this.parts.push(c),this}box(t,e,n,s={}){return this.add(Ut("box"),{...s,scale:[t,e,n]})}cylinder(t,e,n,s=8,r={}){return this.add(Ut("cyl",t,e,s,1,!!r.open),{...r,scale:[1,n,1]})}sphere(t,e={}){return this.add(Ut("sphere",e.ws||8,e.hs||6),{...e,scale:[t,t,t]})}cone(t,e,n=7,s={}){return this.add(Ut("cone",n),{...s,scale:[t,e,t]})}build(){if(!this.parts.length)return null;let t=li(this.parts,!1);for(let e of this.parts)e.dispose();return this.parts.length=0,t&&t.computeBoundingSphere(),t}toMesh(t){let e=this.build();if(!e)return null;let n=new te(e,t);return n.castShadow=!0,n.receiveShadow=!0,n}};function cv(i){let t=i*2654435761>>>0;return t^=t>>>15,t=Math.imul(t,2246822519)>>>0,t^=t>>>13,t/4294967296}var Il=null;function hf(){return Il||(Il=new yn({vertexColors:!0,roughness:.92,metalness:.02,flatShading:!0}),Il)}var oo={time:{value:0},wind:{value:1}},Ss=new Set;function uf(i,t=1){oo.time.value=i,oo.wind.value=t;for(let e of Ss)e.uniforms&&e.uniforms.uTime&&(e.uniforms.uTime.value=i)}function Ll(i){return i.onBeforeCompile=t=>{t.uniforms.uTime=oo.time,t.uniforms.uWind=oo.wind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aSway;
uniform float uTime;
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 swayWorld = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
        #else
          vec3 swayWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        #endif
        float swayPhase = uTime * 1.7 + swayWorld.x * 0.35 + swayWorld.z * 0.27;
        float swayAmt = aSway * uWind * 0.18;
        transformed.x += sin(swayPhase) * swayAmt + sin(swayPhase * 2.3 + 1.7) * swayAmt * 0.35;
        transformed.z += cos(swayPhase * 0.8 + 0.6) * swayAmt * 0.7;
        transformed.y -= abs(sin(swayPhase)) * swayAmt * 0.15;`)},i.customProgramCacheKey=()=>"windsway",i}function df(i,t=3){return i.onBeforeCompile=e=>{e.uniforms.uTime=oo.time,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <beginnormal_vertex>",`
        float spinPhase = uTime * ${t.toFixed(2)};
        #ifdef USE_INSTANCING
          spinPhase += instanceMatrix[3].x * 0.9 + instanceMatrix[3].z * 0.7;
        #endif
        float spinC = cos(spinPhase), spinS = sin(spinPhase);
        vec3 objectNormal = vec3(normal.x * spinC - normal.z * spinS, normal.y, normal.x * spinS + normal.z * spinC);
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(tangent.xyz);
        #endif`).replace("#include <begin_vertex>",`
        vec3 transformed = vec3(position.x * spinC - position.z * spinS, position.y, position.x * spinS + position.z * spinC);`)},i.customProgramCacheKey=()=>"spin"+t,i}function Dl({color1:i=16765514,color2:t=16734746,color3:e=4852224}={}){let n=new _e({uniforms:{uTime:{value:0},uC1:{value:new vt(i)},uC2:{value:new vt(t)},uC3:{value:new vt(e)}},vertexShader:`
      uniform float uTime;
      varying float vY;
      varying float vFlick;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        vY = uv.y;
        vec3 p = position;
        #ifdef USE_INSTANCING
          vec3 wp = (modelMatrix * instanceMatrix * vec4(position,1.0)).xyz;
        #else
          vec3 wp = (modelMatrix * vec4(position,1.0)).xyz;
        #endif
        float seed = hash(floor(wp.xz * 3.1));
        float t = uTime * 6.0 + seed * 20.0;
        float w = uv.y * uv.y;
        p.x += sin(t + p.y * 4.0) * 0.18 * w;
        p.z += cos(t * 1.3 + p.y * 3.0) * 0.15 * w;
        p.y *= 0.85 + 0.25 * sin(t * 1.7 + seed * 6.0) * w + 0.12 * sin(t * 4.1);
        vFlick = 0.85 + 0.15 * sin(t * 3.0);
        #ifdef USE_INSTANCING
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        #else
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        #endif
      }`,fragmentShader:`
      uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;
      varying float vY; varying float vFlick;
      void main(){
        vec3 c = mix(uC1, uC2, smoothstep(0.05, 0.6, vY));
        c = mix(c, uC3, smoothstep(0.55, 1.0, vY));
        float a = (1.0 - vY) * 0.95 + 0.05;
        gl_FragColor = vec4(c * 1.9 * vFlick, a);
      }`,transparent:!0,depthWrite:!1,blending:He,side:We,toneMapped:!1});return Ss.add(n),n}function ff({color:i=2060154,deep:t=732730,foam:e=12577262}={}){let n=new _e({uniforms:{uTime:{value:0},uColor:{value:new vt(i)},uDeep:{value:new vt(t)},uFoam:{value:new vt(e)},uFogColor:{value:new vt(12572872)},uFogNear:{value:40},uFogFar:{value:160}},vertexShader:`
      varying vec3 vW; varying vec2 vUv; varying float vDist;
      void main(){ vUv = uv; vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; vec4 mv = viewMatrix * wp; vDist = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      uniform float uTime; uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFoam;
      uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar;
      varying vec3 vW; varying vec2 vUv; varying float vDist;
      float n(vec2 p){ return sin(p.x) * sin(p.y); }
      void main(){
        vec2 p = vW.xz * 0.35;
        float t = uTime;
        float r = n(p * 1.3 + vec2(t * 0.6, t * 0.4)) * 0.5 + n(p * 2.7 - vec2(t * 0.9, t * 0.3)) * 0.3 + n(p * 5.1 + vec2(t * 1.5, -t)) * 0.2;
        vec3 c = mix(uDeep, uColor, 0.55 + 0.45 * r);
        float foam = smoothstep(0.62, 0.9, r);
        c = mix(c, uFoam, foam * 0.5);
        float rp = max(0.0, r);
        c += vec3(0.08) * rp * rp * rp;
        float f = smoothstep(uFogNear, max(uFogNear + 1.0, uFogFar), vDist);
        c = clamp(mix(c, uFogColor, f), 0.0, 1.0);
        gl_FragColor = vec4(c, 0.9);
      }`,transparent:!0,depthWrite:!1});return Ss.add(n),n}function pf({color:i=14284031,tint:t=5941704}={}){let e=new _e({uniforms:{uTime:{value:0},uColor:{value:new vt(i)},uTint:{value:new vt(t)},uFogColor:{value:new vt(12572872)},uFogNear:{value:40},uFogFar:{value:160}},vertexShader:`
      varying vec2 vUv; varying float vDist;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.0); vDist = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      uniform float uTime; uniform vec3 uColor; uniform vec3 uTint;
      uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar;
      varying vec2 vUv; varying float vDist;
      float hash(float x){ return fract(sin(x * 91.17) * 43758.5453); }
      void main(){
        float speed = 1.6;
        float y = vUv.y + uTime * speed;
        float col = floor(vUv.x * 18.0);
        float streak = 0.5 + 0.5 * sin((y * 9.0 + hash(col) * 6.28) * 3.14159);
        float streak2 = 0.5 + 0.5 * sin((y * 21.0 + hash(col + 7.0) * 6.28) * 3.14159 + vUv.x * 30.0);
        float s = streak * 0.6 + streak2 * 0.4;
        float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
        float bottom = smoothstep(0.0, 0.25, vUv.y);
        float alpha = (0.35 + 0.55 * s) * edge * mix(0.35, 1.0, bottom);
        vec3 c = mix(uTint, uColor, s * 0.9 + 0.1);
        float f = smoothstep(uFogNear, max(uFogNear + 1.0, uFogFar), vDist);
        gl_FragColor = vec4(clamp(mix(c, uFogColor, f * 0.8), 0.0, 1.0), clamp(alpha, 0.0, 1.0));
      }`,transparent:!0,depthWrite:!1,side:We});return Ss.add(e),e}function ao(i=6737151,t=2,e=1.6){let n=new _e({uniforms:{uTime:{value:0},uColor:{value:new vt(i)},uPower:{value:t},uInt:{value:e}},vertexShader:`
      varying vec3 vN; varying vec3 vV;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      uniform vec3 uColor; uniform float uPower; uniform float uInt; uniform float uTime;
      varying vec3 vN; varying vec3 vV;
      void main(){ float f = pow(max(0.001, 1.0 - abs(dot(vN, vV))), uPower); float pulse = 0.85 + 0.15 * sin(uTime * 5.0); gl_FragColor = vec4(uColor * uInt * pulse, clamp(f * 0.9 + 0.05, 0.0, 1.0)); }`,transparent:!0,depthWrite:!1,blending:He,side:We,toneMapped:!1});return Ss.add(n),n}function mf(i,t,e){for(let n of Ss)n.uniforms.uFogColor&&(n.uniforms.uFogColor.value.set(i),n.uniforms.uFogNear.value=t,n.uniforms.uFogFar.value=e)}function Lh(i){Ss.delete(i)}var Wt={skin:15117694,skinDark:13867628,hair:3810328,eye:1840144,mouth:10246728,shirt:15325096,shirtShade:13678975,scarf:13908524,trousers:7035451,belt:4861723,buckle:14857288,leather:9132587,leatherDark:6963488,boot:4074010,bootTrim:6176809,sole:2365200,hat:5256483,hatBand:2759185,rope:12887914,gold:16769162,goldDark:12618282,gem:3135114},lt={hips:0,spine:1,head:2,shL:3,shR:4,elL:5,elR:6,hipL:7,hipR:8,kneeL:9,kneeR:10,ankL:11,ankR:12},co=13,Ue=co*3,rr=Ue+3,Ri=.92,Uh=.3,Nh=.27,Fh=.42,kh=.41,hv=4*yt.jumpHeight/yt.jumpDuration;function On(i={}){let t=new Float32Array(rr);t[Ue+1]=Ri;for(let e in i){let n=i[e];if(e==="pos"){t[Ue]=n[0],t[Ue+1]=n[1],t[Ue+2]=n[2];continue}let s=lt[e]*3;typeof n=="number"?t[s]=n:(t[s]=n[0],t[s+1]=n[1],t[s+2]=n[2])}return t}var is=(i,t)=>{i.set(t)},lo=(i,t,e)=>{for(let n=0;n<rr;n++)i[n]+=(t[n]-i[n])*e},uv=(i,t,e,n,s,r,o)=>{for(let a=0;a<rr;a++)i[a]=t[a]*e+n[a]*s+r[a]*o},Jt=(i,t,e,n=0,s=0)=>{i[t*3]+=e,i[t*3+1]+=n,i[t*3+2]+=s},ae=(i,t,e,n=0,s=0)=>{i[t*3]=e,i[t*3+1]=n,i[t*3+2]=s},pn={idle:On({spine:-.02,head:.02,shL:[.08,0,-.14],elL:[.35,0,.1],shR:[.5,0,.55],elR:2.05,hipL:[0,0,.03],hipR:[0,0,-.03],kneeL:-.04,kneeR:-.04}),crouch:On({hips:-.3,pos:[0,Ri-.2,0],spine:-.3,head:.25,shL:[-.9,0,-.3],elL:.6,shR:[.2,0,.5],elR:2,hipL:.9,hipR:.9,kneeL:-1.4,kneeR:-1.4,ankL:.3,ankR:.3}),rise:On({hips:-.1,pos:[0,Ri+.02,0],spine:.05,head:.05,shL:[1.7,0,-.5],elL:.5,shR:[.9,0,.6],elR:1.9,hipL:1,kneeL:-1.3,ankL:-.2,hipR:-.55,kneeR:-.35,ankR:-.5}),tuck:On({hips:-.35,spine:-.35,head:.35,shL:[.9,0,-.5],elL:1.2,shR:[.7,0,.6],elR:2,hipL:1.55,hipR:1.55,kneeL:-2.2,kneeR:-2.2,ankL:-.3,ankR:-.3}),fall:On({hips:.05,spine:.05,head:-.05,shL:[.6,0,-1.1],elL:.6,shR:[.6,0,.9],elR:1.8,hipL:.45,hipR:.35,kneeL:-.5,kneeR:-.5,ankL:-.25,ankR:-.25}),slide:On({hips:1.4,pos:[0,.34,.12],spine:-.55,head:-.55,shL:[2.3,0,-.5],elL:.4,shR:[.95,0,.35],elR:2.1,hipR:[-.2,0,-.05],kneeR:-.1,ankR:-.3,hipL:[.4,0,.12],kneeL:-1.3,ankL:.1}),hitA:On({hips:.35,pos:[0,Ri-.05,.05],spine:.35,head:.5,shL:[1.5,0,-.5],elL:.4,shR:[1.5,0,.5],elR:.6,hipL:.3,hipR:-.2,kneeL:-.5,kneeR:-.5}),hitB:On({hips:1.5,pos:[0,.28,.35],spine:.1,head:.4,shL:[.6,0,-1.3],elL:.5,shR:[.6,0,1.2],elR:.8,hipL:.6,hipR:.45,kneeL:-1.1,kneeR:-.9,ankL:-.2,ankR:-.2}),hitC:On({hips:1.55,pos:[0,.22,.4],spine:.05,head:-.25,shL:[.4,0,-1.4],elL:.3,shR:[.5,0,1],elR:1.4,hipL:.25,hipR:.15,kneeL:-.45,kneeR:-.3,ankL:-.3,ankR:-.3}),caughtA:On({hips:.15,pos:[0,Ri+.03,0],spine:.15,head:.45,shL:[2.5,0,-.6],elL:.7,shR:[2.4,0,.7],elR:.9,hipL:.1,hipR:-.1,kneeL:-.15,kneeR:-.15,ankL:-.4,ankR:-.4}),caughtB:On({hips:-.9,pos:[0,.42,.05],spine:-.9,head:-.6,shL:[2.6,0,-.5],elL:2.2,shR:[2.5,0,.6],elR:2.3,hipL:.4,hipR:.45,kneeL:-1.1,kneeR:-1.1,ankL:-.5,ankR:-.5}),burnB:On({hips:-1.4,pos:[0,.3,-.25],spine:.15,head:-.1,shL:[2.2,0,-.7],elL:.5,shR:[2,0,.8],elR:1,hipL:.35,hipR:.15,kneeL:-.7,kneeR:-.7,ankL:-.4,ankR:-.4})},gf=new Map;function dv(i,t){let e=i.toFixed(3)+","+t.toFixed(3),n=gf.get(e);if(n)return n;n=Ut("box").clone();let s=n.attributes.position;for(let r=0;r<s.count;r++)s.getY(r)>0&&s.setXYZ(r,s.getX(r)*i,s.getY(r),s.getZ(r)*t);return n.computeVertexNormals(),gf.set(e,n),n}function Dh(i,t,e,n,s,r,o){i.add(dv(e/t,r/s),{...o,scale:[t,n,s]})}function ci(i,t,e,n,s,r,o=8,a=0,l=0){i.cylinder(t,e,n-s,o,{position:[a,(n+s)*.5,l],color:r})}function fv(i,t){let e=[];for(let s=0;s<co;s++){let r=i[s].build();if(!r)continue;let o=r.attributes.position.count,a=new Uint16Array(o*4),l=new Float32Array(o*4);for(let c=0;c<o;c++)a[c*4]=s,l[c*4]=1;r.setAttribute("skinIndex",new ce(a,4)),r.setAttribute("skinWeight",new ce(l,4)),r.applyMatrix4(t[s].matrixWorld),e.push(r)}let n=li(e,!1);for(let s of e)s.dispose();return n.computeBoundingSphere(),n}function pv(i){let t=[];for(let e=0;e<co;e++)t.push(new Un);{let e=t[lt.hips];Dh(e,.3,.36,.24,.2,.24,{position:[0,-.06,0],color:Wt.trousers}),e.box(.38,.06,.26,{position:[0,.075,0],color:Wt.belt}),e.box(.07,.05,.02,{position:[0,.075,-.135],color:Wt.buckle}),e.box(.19,.17,.09,{position:[-.235,-.04,.05],rotation:[0,.15,.08],color:Wt.leather,jitter:.08}),e.box(.2,.06,.1,{position:[-.235,.03,.045],rotation:[0,.15,.08],color:Wt.leatherDark}),e.box(.04,.04,.015,{position:[-.24,-.06,-.005],rotation:[0,.15,0],color:Wt.buckle})}{let e=t[lt.spine];Dh(e,.34,.44,.42,.22,.26,{position:[0,.17,0],color:Wt.shirt}),e.sphere(.085,{position:[-.27,.35,0],color:Wt.shirtShade,ws:6,hs:4}),e.sphere(.085,{position:[.27,.35,0],color:Wt.shirtShade,ws:6,hs:4}),e.box(.07,.58,.29,{position:[.02,.19,0],rotation:[0,0,-.6],color:Wt.leather}),e.box(.21,.05,.21,{position:[0,.395,0],color:Wt.shirtShade}),e.box(.13,.13,.05,{position:[0,.32,-.135],rotation:[.15,0,Math.PI/4],color:Wt.scarf}),e.box(.09,.06,.05,{position:[-.03,.245,-.145],rotation:[.25,.1,.3],color:Wt.scarf}),e.add(Ut("torus",.22,5,10),{position:[.11,.18,.15],rotation:[Math.PI/2,0,0],scale:.075,color:Wt.rope,jitter:.1})}{let e=t[lt.head];ci(e,.06,.065,.06,-.05,Wt.skinDark,6),Dh(e,.23,.27,.26,.24,.27,{position:[0,.16,0],color:Wt.skin}),e.box(.28,.13,.13,{position:[0,.235,.085],color:Wt.hair}),e.box(.29,.06,.28,{position:[0,.275,0],color:Wt.hair}),e.box(.035,.04,.02,{position:[-.055,.185,-.135],color:Wt.eye}),e.box(.035,.04,.02,{position:[.055,.185,-.135],color:Wt.eye}),e.box(.06,.016,.012,{position:[-.055,.222,-.137],rotation:[0,0,.12],color:Wt.hair}),e.box(.06,.016,.012,{position:[.055,.222,-.137],rotation:[0,0,-.12],color:Wt.hair}),e.box(.038,.05,.04,{position:[0,.155,-.15],color:Wt.skinDark}),e.box(.07,.014,.012,{position:[0,.105,-.138],color:Wt.mouth}),e.box(.02,.05,.04,{position:[-.145,.165,.01],color:Wt.skinDark}),e.box(.02,.05,.04,{position:[.145,.165,.01],color:Wt.skinDark})}for(let e of[-1,1]){let n=t[e<0?lt.shL:lt.shR],s=t[e<0?lt.elL:lt.elR];ci(n,.07,.064,.02,-.16,Wt.shirt),ci(n,.078,.078,-.155,-.2,Wt.shirtShade),ci(n,.054,.05,-.19,-Uh-.02,Wt.skin),s.sphere(.056,{color:Wt.skin,ws:6,hs:4}),ci(s,.052,.046,-.02,-Nh+.02,Wt.skin),ci(s,.052,.052,-.19,-.225,Wt.leather),s.box(.085,.1,.075,{position:[0,-Nh-.03,-.005],color:Wt.skinDark})}for(let e of[-1,1]){let n=t[e<0?lt.hipL:lt.hipR],s=t[e<0?lt.kneeL:lt.kneeR],r=t[e<0?lt.ankL:lt.ankR];n.sphere(.09,{color:Wt.trousers,ws:6,hs:4}),ci(n,.088,.072,-.02,-Fh,Wt.trousers),s.sphere(.072,{color:Wt.trousers,ws:6,hs:4}),ci(s,.07,.06,-.02,-.22,Wt.trousers),ci(s,.085,.085,-.2,-.235,Wt.bootTrim),ci(s,.078,.072,-.23,-kh-.01,Wt.boot),r.box(.13,.085,.2,{position:[0,-.028,-.03],color:Wt.boot}),r.box(.135,.07,.1,{position:[0,-.036,-.16],color:Wt.bootTrim}),r.box(.14,.02,.28,{position:[0,-.06,-.06],color:Wt.sole})}return fv(t,i)}function mv(){let i=new Un;return i.add(Ut("cyl",1,1,10,1,!1),{position:[0,0,.01],rotation:[-.1,0,0],scale:[.235,.025,.26],color:Wt.hat,jitter:.06}),i.cylinder(.125,.16,.16,8,{position:[0,.09,0],color:Wt.hat}),i.cylinder(.168,.168,.045,8,{position:[0,.035,0],color:Wt.hatBand}),i.box(.12,.03,.17,{position:[0,.165,0],color:Wt.hatBand}),i.build()}function gv(){let i=new Un;return i.box(.11,.03,.09,{position:[0,.015,0],color:Wt.goldDark}),i.cylinder(.045,.06,.1,6,{position:[0,.08,0],color:Wt.gold}),i.box(.14,.03,.03,{position:[0,.105,-.01],color:Wt.gold}),i.sphere(.045,{position:[0,.165,0],color:Wt.gold,ws:6,hs:4}),i.cone(.05,.05,6,{position:[0,.235,0],color:Wt.goldDark}),i.box(.018,.018,.01,{position:[-.017,.17,-.043],color:Wt.gem}),i.box(.018,.018,.01,{position:[.017,.17,-.043],color:Wt.gem}),i.build()}function xv(i){let t=ns(1234),e=[],n=[],s=[],r=[],o=(l,c,d,h,u)=>{let f=e.length/3;e.push(...l,...c,...d,...h),n.push(0,0,1,1),s.push(u,u,u,u),r.push(f,f+1,f+2,f,f+2,f+3)};for(let l=0;l<i;l++){let c=l/i*Math.PI*2+t()*.5,d=.28+t()*.35,h=Math.cos(c)*d,u=.25+t()*1.25,f=1.3+t()*1.6,m=.035+t()*.045,x=t();o([h-m,u,0],[h+m,u,0],[h+m,u,f],[h-m,u,f],x),o([h,u-m,0],[h,u+m,0],[h,u+m,f],[h,u-m,f],x)}let a=new Ae;return a.setAttribute("position",new oe(e,3)),a.setAttribute("aT",new oe(n,1)),a.setAttribute("aSeed",new oe(s,1)),a.setIndex(r),a}function _v(){return new _e({uniforms:{uTime:{value:0},uAlpha:{value:0},uLen:{value:1},uColor:{value:new vt(16766570)},uColor2:{value:new vt(16742938)}},vertexShader:`
      attribute float aT; attribute float aSeed;
      uniform float uTime; uniform float uLen;
      varying float vT; varying float vF;
      void main(){
        vT = aT;
        vec3 p = position;
        float stretch = uLen * (0.75 + 0.25 * sin(uTime * 9.0 + aSeed * 7.0));
        p.z *= stretch;
        p.x += sin(uTime * 16.0 + aSeed * 20.0 + aT * 5.0) * 0.07 * aT;
        p.y += cos(uTime * 13.0 + aSeed * 17.0 + aT * 4.0) * 0.05 * aT;
        vF = 0.7 + 0.3 * sin(uTime * 22.0 + aSeed * 40.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uAlpha; uniform vec3 uColor; uniform vec3 uColor2;
      varying float vT; varying float vF;
      void main(){
        float a = pow(max(0.001, 1.0 - vT), 1.6) * uAlpha * vF;
        gl_FragColor = vec4(mix(uColor * 1.6, uColor2, vT) * a, a);
      }`,transparent:!0,depthWrite:!1,blending:He,side:We,toneMapped:!1})}function vv(i){let t=new Nr(.045,0),e=[];for(let s=0;s<i;s++){let r=t.clone(),o=new Float32Array(r.attributes.position.count).fill(s/i);r.setAttribute("aSeed",new ce(o,1)),e.push(r)}let n=li(e,!1);for(let s of e)s.dispose();return t.dispose(),n}function yv(){return new _e({uniforms:{uTime:{value:0},uAlpha:{value:0},uColor:{value:new vt(16734944)}},vertexShader:`
      attribute float aSeed;
      uniform float uTime;
      varying float vA;
      void main(){
        float ang = uTime * 2.6 + aSeed * 6.2831;
        float r = 0.74 + 0.12 * sin(uTime * 3.0 + aSeed * 9.0);
        float h = 0.12 + 0.6 * (0.5 + 0.5 * sin(uTime * 1.7 + aSeed * 12.0));
        vec3 c = vec3(cos(ang) * r, h, sin(ang) * r);
        vA = 0.6 + 0.4 * sin(uTime * 11.0 + aSeed * 30.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position + c, 1.0);
      }`,fragmentShader:`
      uniform float uAlpha; uniform vec3 uColor;
      varying float vA;
      void main(){ float a = uAlpha * vA; gl_FragColor = vec4(uColor * (1.0 + vA) * a, a); }`,transparent:!0,depthWrite:!1,blending:He,toneMapped:!1})}function xf(){let i=new Ne,t=new Ne;i.add(t);let e=(tt,q,at,gt)=>{let O=new Wi;return O.position.set(tt,q,at),gt&&gt.add(O),O},n=new Array(co),s=n[lt.hips]=e(0,Ri,0,null),r=n[lt.spine]=e(0,.1,0,s),o=n[lt.head]=e(0,.42,0,r);n[lt.shL]=e(-.27,.35,0,r),n[lt.shR]=e(.27,.35,0,r),n[lt.elL]=e(0,-Uh,0,n[lt.shL]),n[lt.elR]=e(0,-Uh,0,n[lt.shR]),n[lt.hipL]=e(-.13,-.02,0,s),n[lt.hipR]=e(.13,-.02,0,s),n[lt.kneeL]=e(0,-Fh,0,n[lt.hipL]),n[lt.kneeR]=e(0,-Fh,0,n[lt.hipR]),n[lt.ankL]=e(0,-kh,0,n[lt.kneeL]),n[lt.ankR]=e(0,-kh,0,n[lt.kneeR]),s.updateMatrixWorld(!0);let a=new yn({vertexColors:!0,flatShading:!0,roughness:.8,metalness:0}),l=pv(n),c=new Gi(l,a);c.add(s),c.updateMatrixWorld(!0),c.bind(new fs(n)),c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,t.add(c);let d=mv(),h=new te(d,a);h.castShadow=!0;let u=new F(0,.285,-.01);o.add(h),h.position.copy(u);let f=new yn({vertexColors:!0,color:16766042,emissive:16751130,emissiveIntensity:1.1,metalness:.6,roughness:.35,flatShading:!0}),m=gv(),x=new te(m,f);x.castShadow=!0,x.position.set(0,-Nh-.02,-.03),x.rotation.set(Math.PI-.55,0,0),n[lt.elR].add(x);let g=new Si(1,2),p=ao(7327999,2.2,1.7),_=new te(g,p);_.position.y=.95,_.visible=!1,i.add(_);let S=ao(16761418,2.6,1.3),y=new te(g,S);y.position.y=.9,y.scale.set(.62,1.05,.62),y.visible=!1,i.add(y);let R=xv(12),E=_v(),I=new te(R,E);I.visible=!1,I.frustumCulled=!1,i.add(I);let v=new Ti(.72,.045,6,28),A=new Ye({color:16732120,transparent:!0,opacity:0,blending:He,depthWrite:!1,toneMapped:!1}),L=A.clone(),b=new te(v,A);b.rotation.x=Math.PI/2,b.position.y=.04,b.visible=!1;let w=new te(v,L);w.rotation.x=Math.PI/2,w.position.y=.05,w.visible=!1,i.add(b,w);let z=vv(6),k=yv(),T=new te(z,k);T.visible=!1,T.frustumCulled=!1,i.add(T);let C=new Float32Array(rr),B=new Float32Array(rr);is(B,pn.idle);let Q="idle",ot=0,ft=10,G=48,N=0,Y=0,xt="idle",ht=99,W=99,$=99,et=99,Mt=0,Ft=99,Pt=99,ne=0,Dt=0,qt=0,$t=0,Zt=null,ge=0,Pe=0,Ie=0,Le=0,we=!1,be=new F,V=0,mn=new Kt;function he(tt,q){Q=tt,ot=0,ft=q}function D(tt){let q=fe(tt.speed01,0,1),at=Be(.4,3.5,tt.speed),gt=Math.sin(N),O=Math.cos(N),pt=Math.cos(N*2),it=.72+.35*q,bt=1.35+.45*q,Et=.1+.3*fe(tt.speed01,0,1.2);ae(C,lt.hips,-Et,-.14*gt,-.06*O),C[Ue]=0,C[Ue+1]=Ri-.85*(1-Math.cos(Et))-.015+.04*pt,C[Ue+2]=-.5*Math.sin(Et),ae(C,lt.spine,-.04-.08*q,.22*gt,.05*O),ae(C,lt.head,Et*.75-.05+.03*pt,-.12*gt,0),ae(C,lt.hipL,it*gt,0,.02),ae(C,lt.hipR,-it*gt,0,-.02);let ut=.5+.5*Math.cos(N+.4),kt=1-ut;ae(C,lt.kneeL,-(bt*ut*ut+.12)),ae(C,lt.kneeR,-(bt*kt*kt+.12)),ae(C,lt.ankL,.22*gt),ae(C,lt.ankR,-.22*gt);let Nt=.9*(.6+.4*q);ae(C,lt.shL,-Nt*gt+.25,0,-.22),ae(C,lt.elL,1.5-.3*gt,0,0),ae(C,lt.shR,.55+.1*gt,0,.45),ae(C,lt.elR,2+.1*gt,.15,0),at<1&&(lo(C,pn.idle,1-at),M(1-at))}function M(tt){let q=Y;Jt(C,lt.spine,.025*Math.sin(q*2.2)*tt,0,0),Jt(C,lt.head,.04*Math.sin(q*1.1)*tt,(.25*Math.sin(q*.6)+.1*Math.sin(q*1.7))*tt,0),Jt(C,lt.hips,0,0,.02*Math.sin(q*.8)*tt),C[Ue]+=.02*Math.sin(q*.8)*tt,Jt(C,lt.shL,.05*Math.sin(q*2.2)*tt,0,0),Jt(C,lt.shR,.06*Math.sin(q*1.5)*tt,0,0),Jt(C,lt.elR,.08*Math.sin(q*1.5+1)*tt,0,0)}function X(tt){if(Ft<.07){is(C,pn.crouch);return}let q=fe(tt.vy/hv,-1.6,1),at=Be(1,.3,Math.abs(q)),gt=q>0?1-at:0,O=q<0?1-at:0;uv(C,pn.rise,gt,pn.tuck,at,pn.fall,O);let pt=Be(1.05,1.5,-q);pt>0&&(Jt(C,lt.spine,-.45*pt),Jt(C,lt.shL,1.2*pt,0,.4*pt),Jt(C,lt.shR,.8*pt),Jt(C,lt.head,.3*pt))}function J(){is(C,pn.slide);let tt=Pt;Jt(C,lt.hips,.08*Math.sin(tt*9),0,.04*Math.sin(tt*7)),Jt(C,lt.shL,.15*Math.sin(tt*11),0,0),C[Ue+1]+=.02*Math.sin(tt*9)}function nt(tt){let q=ge;if(tt==="fall")ae(C,lt.hips,0,0,.2*Math.sin(q*5)),C[Ue]=0,C[Ue+1]=Ri,C[Ue+2]=0,ae(C,lt.spine,.2*Math.sin(q*7),.3*Math.sin(q*5),0),ae(C,lt.head,.4*Math.sin(q*9),.2*Math.sin(q*6),0),ae(C,lt.shL,2.2+.7*Math.sin(q*14),0,-.9-.4*Math.cos(q*11)),ae(C,lt.elL,.7+.5*Math.sin(q*13)),ae(C,lt.shR,2+.7*Math.sin(q*14+2),0,.9+.4*Math.cos(q*12)),ae(C,lt.elR,.8+.5*Math.sin(q*12)),ae(C,lt.hipL,.6*Math.sin(q*11)),ae(C,lt.hipR,-.6*Math.sin(q*11)),ae(C,lt.kneeL,-.9-.6*Math.sin(q*13)),ae(C,lt.kneeR,-.9+.6*Math.sin(q*13)),ae(C,lt.ankL,-.3),ae(C,lt.ankR,-.3);else if(tt==="burn"){ae(C,lt.hips,-.1+.1*Math.sin(q*9),.25*Math.sin(q*7),.1*Math.sin(q*11)),C[Ue]=0,C[Ue+1]=Ri-.05+.1*Math.abs(Math.sin(q*13)),C[Ue+2]=0,ae(C,lt.spine,-.15+.1*Math.sin(q*8),.2*Math.sin(q*6),0),ae(C,lt.head,.3+.2*Math.sin(q*15),.3*Math.sin(q*10),0),ae(C,lt.shL,2.2+.5*Math.sin(q*19),0,-.6-.3*Math.sin(q*14)),ae(C,lt.elL,.8+.4*Math.sin(q*17)),ae(C,lt.shR,2.1+.5*Math.sin(q*19+2),0,.7+.3*Math.sin(q*13)),ae(C,lt.elR,.9+.4*Math.sin(q*16));let at=Math.abs(Math.sin(q*13)),gt=Math.abs(Math.cos(q*13));ae(C,lt.hipL,.5*at),ae(C,lt.hipR,.5*gt),ae(C,lt.kneeL,-.9*at),ae(C,lt.kneeR,-.9*gt),ae(C,lt.ankL,-.3*at),ae(C,lt.ankR,-.3*gt);let O=Be(.7,1.3,q);if(O>0){lo(C,pn.burnB,O);let pt=Math.exp(-(q-1.3)*1.2)*O;Jt(C,lt.spine,.03*Math.sin(q*27)*pt),Jt(C,lt.head,.05*Math.sin(q*19)*pt)}}else if(tt==="caught"){q<.22?is(C,pn.caughtA):(is(C,pn.caughtA),lo(C,pn.caughtB,Be(.22,.75,q)));let at=Be(.6,1,q);Jt(C,lt.spine,.03*Math.sin(q*28)*at),Jt(C,lt.head,0,.06*Math.sin(q*20)*at,0),C[Ue+1]+=.01*Math.sin(q*25)*at}else is(C,pn.hitA),q>.12&&lo(C,pn.hitB,Be(.12,.5,q)),q>.5&&lo(C,pn.hitC,Be(.5,.95,q)),q>.5&&q<.8&&(C[Ue+1]+=.1*Math.sin(Math.PI*(q-.5)/.3))}function _t(tt){if(ht<.32){let at=Math.sin(Math.PI*ht/.32);Jt(C,lt.hips,-.3*at),C[Ue+1]-=.2*at,Jt(C,lt.spine,-.25*at),Jt(C,lt.head,.3*at),Jt(C,lt.shL,.3*at,0,-.7*at),Jt(C,lt.shR,0,0,.5*at),Jt(C,lt.hipL,.5*at),Jt(C,lt.hipR,.5*at),Jt(C,lt.kneeL,-1*at),Jt(C,lt.kneeR,-1*at),Jt(C,lt.ankL,.3*at),Jt(C,lt.ankR,.3*at)}if(W<.3){let at=Math.sin(Math.PI*W/.3);C[Ue+1]+=.1*at,Jt(C,lt.shL,.6*at,0,-.3*at),Jt(C,lt.spine,.1*at)}if($<1){let at=$,gt=Math.sin(Math.PI*fe(at/.5,0,1)),O=Math.exp(-2.5*at)*Math.sin(24*at);Jt(C,lt.hips,-.6*gt,.25*gt,0),C[Ue+2]-=.3*gt,C[Ue+1]-=.13*gt,Jt(C,lt.spine,-.25*gt),Jt(C,lt.head,.45*gt+.1*O),Jt(C,lt.shL,1.8*gt+.5*O,0,-.7*gt),Jt(C,lt.elL,-.9*gt),Jt(C,lt.shR,.9*gt,0,.5*gt+.3*O),Jt(C,lt.elR,-.3*gt),Jt(C,lt.hipL,.5*gt),Jt(C,lt.kneeR,-.5*gt)}if(et<.5){let at=Math.sin(Math.PI*et/.5)*Mt;Jt(C,lt.spine,0,-.5*at,0),Jt(C,lt.head,0,-.45*at,0),Jt(C,lt.hips,0,-.25*at,0),Mt>0?Jt(C,lt.shL,0,0,-.8*Math.abs(at)):Jt(C,lt.shR,0,0,.6*Math.abs(at))}Jt(C,lt.hips,0,0,-.33*ne-.028*Dt),Jt(C,lt.head,0,0,.12*ne+.01*Dt);let q=tt.stumble01;if(q>0){let at=Be(.55,.7,q)*Be(.95,.85,q);Jt(C,lt.head,0,.9*at,0),Jt(C,lt.spine,0,.25*at,0)}}function St(){we||(we=!0,h.updateWorldMatrix(!0,!1),i.attach(h),be.set(.6,3.2,1.8),V=-9)}function rt(){we=!1,o.add(h),h.position.copy(u),h.rotation.set(0,0,0)}function ct(tt){we&&(h.position.addScaledVector(be,tt),be.y-=9.8*tt,h.rotation.x+=V*tt,h.rotation.z+=V*.3*tt,h.position.y<.02&&be.y<0&&(h.position.y=.02,be.y=Math.abs(be.y)>.8?-be.y*.3:0,be.x*=.4,be.z*=.4,V*=.3),h.position.y<=.021&&be.y===0&&(h.rotation.x=ue(h.rotation.x,Math.round(h.rotation.x/Math.PI)*Math.PI,8,tt),h.rotation.z=ue(h.rotation.z,Math.round(h.rotation.z/Math.PI)*Math.PI,8,tt)))}function wt(tt,q){let at=q.time;if(Pe=ue(Pe,q.shield?1:0,q.shield?9:16,tt),_.visible=Pe>.02,_.visible){let gt=(.5+.5*Pe)*1.15*(1+.03*Math.sin(at*4));_.scale.setScalar(gt),_.rotation.y=at*.6,_.rotation.x=Math.sin(at*.7)*.3,p.uniforms.uInt.value=1.7*Pe}if(Ie=ue(Ie,q.boost?1:0,q.boost?8:10,tt),y.visible=I.visible=Ie>.02,y.visible&&(S.uniforms.uInt.value=1.3*Ie,E.uniforms.uAlpha.value=Ie*(q.dead?.3:1),E.uniforms.uLen.value=.7+.6*fe(q.speed01,0,1.3),E.uniforms.uTime.value=at),Le=ue(Le,q.magnet?1:0,10,tt),b.visible=w.visible=T.visible=Le>.02,b.visible){b.scale.setScalar((.85+.1*Math.sin(at*7))*(.3+.7*Le)),A.opacity=.85*Le;let gt=at*1.4%1;w.scale.setScalar(.5+1.1*gt),L.opacity=Math.pow(1-gt,1.5)*.7*Le,k.uniforms.uAlpha.value=Le,k.uniforms.uTime.value=at}f.emissiveIntensity=1+.3*Math.sin(at*5)+.4*Ie}function Bt(tt){for(let q=0;q<co;q++){let at=n[q],gt=q*3;at.rotation.set(B[gt],B[gt+1],B[gt+2])}s.rotation.x+=qt,s.rotation.y+=$t,s.position.set(B[Ue],B[Ue+1],B[Ue+2])}let Tt={group:i,height:1.8,setState(tt,q){switch(tt){case"run":he("run",10);break;case"jump":Ft=0,he("jump",22);break;case"slide":Pt=0,he("slide",20);break;case"turn":et=0,Mt=q==="left"?-1:1;break;case"stumble":$=0;break;case"fall":case"hit":case"burn":case"caught":Zt=tt,ge=0,qt=$t=0,he(tt,tt==="hit"?14:10);break}},reset(){he("run",10),N=0,ht=W=$=et=Ft=Pt=99,ne=Dt=qt=$t=0,Zt=null,ge=0,xt="run",is(B,pn.idle),a.color.setScalar(1),a.emissive.setRGB(0,0,0),a.emissiveIntensity=1,rt(),t.rotation.set(0,0,0),t.position.set(0,0,0),Bt(0)},update(tt,q){Y+=tt,ot+=tt,ht+=tt,W+=tt,$+=tt,et+=tt,Ft+=tt,Pt+=tt;let at=q.state;q.dead||(xt==="jump"&&at!=="jump"?(ht=0,he(at==="slide"?"slide":"run",26)):xt==="slide"&&at==="run"&&(W=0,he("run",18))),q.dead&&!Zt&&Tt.setState(q.deathType==="fall"?"fall":q.deathType||"hit"),xt=at,ne=ue(ne,q.dead?0:q.turnLean,12,tt),Dt=ue(Dt,q.dead?0:fe(q.lateralVel,-14,14),20,tt);let gt=fe(1.7*q.speed/yt.startSpeed,0,4.2);if(N+=tt*gt*Math.PI*2,N>1e4&&(N-=1e4),q.dead){if(ge+=tt,nt(Zt),Zt==="fall"&&(qt-=tt*(3.5+2*Be(0,1,ge)),$t+=tt*1.2),Zt==="hit"&&ge>.12&&St(),Zt==="burn"){let it=Be(.2,1.4,ge);a.color.setScalar(1-.85*it);let bt=(1-it)*(.5+.5*Math.abs(Math.sin(ge*25)))*.9+.12*(1-Be(1.4,3.5,ge));a.emissive.setRGB(1,.35,.05),a.emissiveIntensity=bt}}else at==="jump"?X(q):at==="slide"?J():at==="idle"?(is(C,pn.idle),M(1)):D(q);!q.dead&&at!=="idle"&&_t(q);let O=me(ft,G,Be(0,.3,ot)),pt=1-Math.exp(-O*tt);for(let it=0;it<rr;it++)B[it]+=(C[it]-B[it])*pt;Bt(tt),ct(tt),wt(tt,q)},dispose(){i.removeFromParent(),l.dispose(),d.dispose(),m.dispose(),g.dispose(),R.dispose(),v.dispose(),z.dispose(),a.dispose(),f.dispose(),E.dispose(),A.dispose(),L.dispose(),k.dispose(),Lh(p),Lh(S),p.dispose(),S.dispose()}};return Tt.reset(),Tt}var Mv=yt.trackWidth,_f=Mv*.5-.6,vf=3.6,bv=14;function Bh(i){return vf+(bv-vf)*Math.pow(1-fe(i,0,1),1.7)}function yf(i,t,e,n){return i<0||i>n?0:Be(0,t,i)*(1-Be(e,n,i))}var Xt={root:0,chest:1,head:2,jaw:3,armL:4,foreL:5,armR:6,foreR:7,legL:8,shinL:9,legR:10,shinR:11,tail0:12},Mf=17,Ul=[-1,0,1,2,1,4,1,6,0,8,0,10,0,12,13,14,15],Oh=[[0,.6,.1],[0,.3,-.55],[0,.14,-.3],[0,-.08,-.06],[-.34,-.04,-.02],[0,-.46,0],[.34,-.04,-.02],[0,-.46,0],[-.22,-.06,.06],[0,-.34,0],[.22,-.06,.06],[0,-.34,0],[0,.06,.28],[0,0,.26],[0,0,.26],[0,0,.26],[0,0,.26]],bf=[{lane:-1.45,back:0,size:1,fur:2888728,mane:5578794,belly:5912632,seat:[0,.62,.05],horns:1},{lane:1.5,back:.35,size:.94,fur:1972772,mane:3943494,belly:5127756,seat:[.78,.22,.25],horns:.8},{lane:.15,back:1.35,size:1.06,fur:2365970,mane:4993048,belly:6045744,seat:[-.78,.22,.3],horns:1.25},{lane:-.9,back:2.3,size:.9,fur:1839638,mane:4070428,belly:4862e3,seat:[.1,.28,.95],horns:.65}],ho=14866620,Sv=9179672,Sf=14208176,wv=new Kt,wf=new en,Tv=new _n,zh=new F,Tf=new F,Nl=new vt,zn=new F,$e=new F,hS=new F;function Me(i,t,e,n,{position:s=[0,0,0],rotation:r=[0,0,0],scale:o=1,color:a=16777215,jitter:l=0}={}){let c=t.clone();wf.setFromEuler(Tv.set(r[0],r[1],r[2])),typeof o=="number"?zh.setScalar(o):zh.set(o[0],o[1],o[2]),Tf.set(s[0],s[1],s[2]),c.applyMatrix4(wv.compose(Tf,wf,zh));let d=c.attributes.position.count,h=new Float32Array(d*3),u=new Uint16Array(d*4),f=new Float32Array(d*4);Nl.set(a);let m=1;for(let x=0;x<d;x++)x%3===0&&(m=l?1+(n()-.5)*l:1),h[x*3]=Nl.r*m,h[x*3+1]=Nl.g*m,h[x*3+2]=Nl.b*m,u[x*4]=e,f[x*4]=1;return c.setAttribute("color",new ce(h,3)),c.setAttribute("skinIndex",new ce(u,4)),c.setAttribute("skinWeight",new ce(f,4)),i.push(c),c}function Ev(i,t,e,n,s,r){let o=I=>e+I,a=Ut("sphere",5,4),l=Ut("ico",0),c=Ut("box"),d=Ut("cyl",1,1,5,1,!1),h=Ut("cone",4),u=Ut("cone",3),f=Ut("cyl",.75,1,4,1,!0),m=s.fur,x=s.mane,g=s.belly,p=n[Xt.root],_=n[Xt.chest],S=n[Xt.head],y=n[Xt.jaw];Me(i,a,o(Xt.root),r,{position:[p.x,p.y+.02,p.z],scale:[.3,.27,.36],color:m,jitter:.25}),Me(i,a,o(Xt.chest),r,{position:[0,.77,-.2],rotation:[.5,0,0],scale:[.31,.29,.5],color:m,jitter:.25}),Me(i,a,o(Xt.chest),r,{position:[_.x,_.y,_.z-.02],scale:[.42,.34,.38],color:m,jitter:.25}),Me(i,a,o(Xt.chest),r,{position:[_.x,_.y+.14,_.z+.12],scale:[.3,.2,.32],color:x,jitter:.3}),Me(i,a,o(Xt.chest),r,{position:[_.x,_.y-.2,_.z],scale:[.3,.18,.3],color:g,jitter:.2});for(let I=0;I<6;I++){let v=I/5,A=(v-.5)*.5;Me(i,h,o(Xt.chest),r,{position:[_.x+A,_.y+.22+Math.cos((v-.5)*3)*.06,_.z+.02+Math.abs(A)*.2],rotation:[-.55-r()*.3,0,(v-.5)*1.3],scale:[.09,.28+r()*.1,.09],color:x,jitter:.35})}for(let I=0;I<4;I++){let v=I/3,A=I<2?Xt.chest:Xt.root;Me(i,u,o(A),r,{position:[0,me(_.y+.28,p.y+.26,v),me(_.z+.2,p.z+.06,v)],rotation:[.55,0,0],scale:[.05,.2-v*.05,.05],color:ho,jitter:.15})}Me(i,d,o(Xt.chest),r,{position:[0,(_.y+S.y)/2,(_.z+S.z)/2],rotation:[-1.13,0,0],scale:[.13,.36,.13],color:m,jitter:.2}),Me(i,a,o(Xt.head),r,{position:[S.x,S.y+.02,S.z-.02],scale:[.25,.23,.27],color:m,jitter:.25}),Me(i,c,o(Xt.head),r,{position:[S.x,S.y+.1,S.z-.2],rotation:[.35,0,0],scale:[.36,.08,.13],color:m,jitter:.2}),Me(i,c,o(Xt.head),r,{position:[S.x,S.y-.06,S.z-.27],scale:[.22,.12,.22],color:g,jitter:.2}),Me(i,c,o(Xt.head),r,{position:[y.x,y.y+.02,y.z-.1],scale:[.16,.1,.16],color:Sv}),Me(i,c,o(Xt.jaw),r,{position:[y.x,y.y-.02,y.z-.16],scale:[.2,.07,.22],color:g,jitter:.2});for(let[I,v]of[[-.085,.11],[.085,.11],[0,.07]])Me(i,u,o(Xt.head),r,{position:[S.x+I,S.y-.13,S.z-.36],rotation:[Math.PI,0,0],scale:[.028,v,.028],color:ho});for(let I of[-.065,0,.065])Me(i,u,o(Xt.jaw),r,{position:[y.x+I,y.y+.03,y.z-.25],scale:[.022,.07,.022],color:ho});let R=s.horns;for(let I of[-1,1]){let v=new F(S.x+I*.13,S.y+.19,S.z-.05),A=new _n(-.35,0,-I*.5),L=new _n(-.95,0,-I*1),b=.22*R,w=.18*R;Me(i,h,o(Xt.head),r,{position:[v.x,v.y,v.z],rotation:[A.x,A.y,A.z],scale:[.07*R,b,.07*R],color:ho,jitter:.15});let z=new F(0,b*.45,0).applyEuler(A).add(v),k=new F(0,w*.4,0).applyEuler(L).add(z);Me(i,h,o(Xt.head),r,{position:[k.x,k.y,k.z],rotation:[L.x,L.y,L.z],scale:[.045*R,w,.045*R],color:ho,jitter:.15}),Me(i,h,o(Xt.head),r,{position:[S.x+I*.23,S.y+.05,S.z],rotation:[-.3,0,-I*1.25],scale:[.06,.15,.06],color:m,jitter:.2})}for(let I of[-1,1]){let v=[S.x+I*.1,S.y+.06,S.z-.24];Me(t,l,o(Xt.head),r,{position:v,scale:.05,color:new vt(4,.42,.18)}),Me(t,l,o(Xt.head),r,{position:v,scale:.095,color:new vt(.55,.05,.02)})}for(let I of[-1,1]){let v=I<0?Xt.armL:Xt.armR,A=I<0?Xt.foreL:Xt.foreR,L=n[v],b=n[A];Me(i,d,o(v),r,{position:[L.x,L.y-.23,L.z],scale:[.08,.46,.08],color:m,jitter:.25}),Me(i,a,o(A),r,{position:[b.x,b.y,b.z],scale:.075,color:m,jitter:.2}),Me(i,d,o(A),r,{position:[b.x,b.y-.23,b.z],scale:[.065,.46,.065],color:m,jitter:.25}),Me(i,c,o(A),r,{position:[b.x,b.y-.47,b.z-.05],scale:[.15,.06,.18],color:m,jitter:.2});for(let w of[-.05,0,.05])Me(i,u,o(A),r,{position:[b.x+w,b.y-.47,b.z-.19],rotation:[-Math.PI/2,0,0],scale:[.02,.13,.02],color:Sf})}for(let I of[-1,1]){let v=I<0?Xt.legL:Xt.legR,A=I<0?Xt.shinL:Xt.shinR,L=n[v],b=n[A];Me(i,d,o(v),r,{position:[L.x,L.y-.17,L.z],scale:[.105,.34,.105],color:m,jitter:.25}),Me(i,a,o(A),r,{position:[b.x,b.y,b.z],scale:.075,color:m,jitter:.2}),Me(i,d,o(A),r,{position:[b.x,b.y-.17,b.z],scale:[.06,.34,.06],color:m,jitter:.25}),Me(i,c,o(A),r,{position:[b.x,b.y-.35,b.z-.05],scale:[.12,.06,.22],color:m,jitter:.2});for(let w of[-.035,.035])Me(i,u,o(A),r,{position:[b.x+w,b.y-.35,b.z-.19],rotation:[-Math.PI/2,0,0],scale:[.02,.1,.02],color:Sf})}for(let I=0;I<5;I++){let v=n[Xt.tail0+I],A=.06-I*.009;Me(i,f,o(Xt.tail0+I),r,{position:[v.x,v.y,v.z+.13],rotation:[Math.PI/2,0,0],scale:[A,.27,A],color:m,jitter:.25})}let E=n[Xt.tail0+4];Me(i,h,o(Xt.tail0+4),r,{position:[E.x,E.y,E.z+.33],rotation:[Math.PI/2,0,0],scale:[.045,.16,.045],color:x,jitter:.3})}function Ef(i){let t=new Ne;t.name="monkeys",i.add(t);let e=new yn({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),n=new Ye({vertexColors:!0,transparent:!0,blending:He,depthWrite:!1,toneMapped:!1,fog:!1}),s=[],r=[],o=[],a=[];for(let b=0;b<bf.length;b++){let w=bf[b],z=ns(7919*(b+1)),k=new Ne;t.add(k);let T=[],C=[];for(let B=0;B<Mf;B++){let Q=new Wi;Q.position.fromArray(Oh[B]),Ul[B]<0?k.add(Q):T[Ul[B]].add(Q),C[B]=new F().fromArray(Oh[B]),Ul[B]>=0&&C[B].add(C[Ul[B]]),T.push(Q)}T[Xt.head].rotation.order="YXZ",s.push(...T),Ev(r,o,b*Mf,C,w,z),a.push({k:b,look:w,root:k,bones:T,rng:z,size:w.size,seat:w.seat,lane:w.lane,back:w.back,mode:"idle",modeT:0,phase:z()*ts,phase0:z()*ts,cadence:.92+z()*.16,wobble:z()*ts,dist:Bh(1)+w.back,v:w.lane,heading:0,roll:0,bob:0,sample:{pos:new F},pos:new F,prevSample:new F,jumpOff:new F,hasPrev:!1,prevPos:new F,speedEst:0,screechT:99,screechNext:2+z()*4,reachT:99,reachNext:1+z()*2,reachSide:b%2?1:-1,lunge:0,leapFrom:new F,leapDur:.4,leapDelay:.04+b*.1,arc:1,fwdDir:new F(0,0,-1),skidV:0,skidV0:1,skidA:1,lookYaw:0,lookPitch:0})}t.updateMatrixWorld(!0);let l=new fs(s),c=new Kt,d=li(r,!1),h=li(o,!1);for(let b of r)b.dispose();for(let b of o)b.dispose();let u=new Gi(d,e);u.castShadow=!0,u.receiveShadow=!0,u.frustumCulled=!1,u.bind(l,c),t.add(u);let f=new Gi(h,n);f.frustumCulled=!1,f.renderOrder=5,f.bind(l,c),t.add(f);for(let b of a)b.root.scale.setScalar(b.size);let m=!1,x=!1,g=0,p=new F,_={t:0,phase:0,run:1,crouch:0,screech:0,reach:0,reachSide:1,brace:0,leap:0,pile:0,peer:0,jaw:0,pitch:0,bobExtra:0,lookYaw:0,lookPitch:0,breathe:0};function S(b,w){let z=b.bones,k=w.phase,T=w.run,C=w.t,B=Math.sin(k),Q=Math.cos(k),ot=T*(.03+.2*Math.max(0,B))-w.crouch*.16+w.bobExtra-w.pile*.1;b.root.position.set(b.pos.x,b.pos.y+ot*b.size,b.pos.z),b.root.rotation.set(0,b.heading,0);let ft=T*(.16*B-.04)+w.pitch+w.screech*.25+w.brace*.45-w.peer*.25-w.crouch*.06;z[Xt.root].rotation.set(ft,0,b.roll),z[Xt.chest].rotation.set(T*.06*Q+w.reach*.15+w.breathe,0,0),z[Xt.chest].position.y=Oh[Xt.chest][1]+w.breathe*.12,z[Xt.head].rotation.set(-.12+T*.08*B+w.screech*.9-w.peer*.6-w.pile*.35+w.lookPitch,w.lookYaw,0),z[Xt.jaw].rotation.x=-(.12+w.screech*.65+w.jaw+T*.12*Math.max(0,-B));for(let N=-1;N<=1;N+=2){let Y=N<0?Xt.armL:Xt.armR,xt=N<0?Xt.foreL:Xt.foreR,ht=k+(N<0?.4:0),W=N<0?0:1.9,$=T*(.85*Math.sin(ht+.35)+.4)+(1-T)*.72,et=T*(.3+.85*Math.max(0,Math.sin(ht-.9)))+(1-T)*-.12;N===w.reachSide&&($=me($,2.15,w.reach),et=me(et,.1,w.reach)),$=me($,1.7,w.screech*.55),et=me(et,.4,w.screech*.55),$=me($,1.15,w.brace),et=me(et,-.25,w.brace),$=me($,2.45,w.leap),et=me(et,.05,w.leap),$=me($,1.55+.65*Math.sin(C*13+W+b.phase0),w.pile),et=me(et,.75+.6*Math.sin(C*13+W+1.3+b.phase0),w.pile),z[Y].rotation.set($,0,-N*(.12+w.leap*.35+w.screech*.4)),z[xt].rotation.set(et,0,0)}for(let N=-1;N<=1;N+=2){let Y=N<0?Xt.legL:Xt.legR,xt=N<0?Xt.shinL:Xt.shinR,ht=k+(N<0?.25:0),W=T*(.75-.75*Math.sin(ht-.3))+(1-T)*1.15,$=T*-(.95+.7*Math.max(0,Math.sin(ht+1.9)))+(1-T)*-1.95;W=me(W,1.35,w.brace),$=me($,-2.05,w.brace),W=me(W,-.35,w.leap),$=me($,-.8,w.leap),W=me(W,1.25+.15*Math.sin(C*9+N),w.pile),$=me($,-2,w.pile),z[Y].rotation.set(W,0,-N*.08),z[xt].rotation.set($,0,0)}let G=.5+w.pile*1.5+w.peer*.8+w.screech;for(let N=0;N<5;N++){let Y=N===0?-.95:-.42,xt=T*.28*Math.sin(k-N*.85)+.1*Math.sin(C*3.1+N*.9+b.phase0),ht=.2*Math.sin(C*(2.2+w.pile*6+w.peer*2)+N*.7+b.phase0)*G;z[Xt.tail0+N].rotation.set(Y+xt+w.leap*.55+w.brace*-.2,ht,0)}}function y(b,w){b.t=w,b.run=1,b.crouch=0,b.screech=0,b.reach=0,b.brace=0,b.leap=0,b.pile=0,b.peer=0,b.jaw=0,b.pitch=0,b.bobExtra=0,b.lookYaw=0,b.lookPitch=0,b.breathe=0}function R(b,w,z,k,T){return b.screechNext-=w*z,b.screechNext<=0&&(b.screechT=0,b.screechNext=k+b.rng()*(T-k),L.onScreech&&L.onScreech(b.k)),b.screechT+=w,yf(b.screechT,.12,.38,.7)}function E(b,w,z,k){$e.subVectors(w,b.pos);let T=-Math.sin(b.heading),C=-Math.cos(b.heading),B=$e.x*T+$e.z*C,Q=$e.x*C*-1+$e.z*T,ot=Math.atan2(Q,Math.max(.3,B));z.lookYaw=fe(-ot*k,-.75,.75),z.lookPitch=fe(Math.atan2($e.y-.6,Math.max(.5,Math.hypot($e.x,$e.z)))*k*.6,-.5,.5)}function I(b,w,z){let k=w.playerAngle,T=-Math.sin(k),C=-Math.cos(k),B=Math.cos(k),Q=-Math.sin(k),ot=b.seat;return z.set(w.playerPos.x+B*ot[0]-T*ot[2],w.playerPos.y+ot[1],w.playerPos.z+Q*ot[0]-C*ot[2])}function v(b,w,z,k,T,C){let B;C?B=1.3+b.back*.3:B=Bh(k)+b.back+Math.sin(T*.6+b.wobble)*.45*(1-k*.5)-b.lunge*.9;let Q=C?24:11;B<b.dist?b.dist=Math.max(B,ue(b.dist,B,4.5,w),b.dist-Q*w):b.dist=ue(b.dist,B,1.1,w),z.sample(b.dist,b.sample);let ot=b.sample,ft=fe(ot.v*.45+b.lane+Math.sin(T*.9+b.wobble*2)*.25,-_f,_f);if(b.v=ue(b.v,ft,3.5,w),zn.copy(ot.pos).addScaledVector(ot.piece.right,b.v-ot.v),b.hasPrev){let ht=(yt.startSpeed+(yt.maxSpeed-yt.startSpeed)*z.speed01+Q)*w*1.5+1;$e.subVectors(zn,b.prevSample),$e.lengthSq()>ht*ht&&b.jumpOff.sub($e)}b.prevSample.copy(zn),b.hasPrev=!0,b.jumpOff.multiplyScalar(Math.exp(-7*w)),b.pos.copy(zn).add(b.jumpOff);let G=Math.atan2(-ot.fwd.x,-ot.fwd.z),N=b.heading;b.heading=es(b.heading,G,9,w);let Y=Eh(b.heading-N)/Math.max(w,1e-4);b.roll=ue(b.roll,fe(Y*.07,-.35,.35),8,w);let xt=(2.3+fe(z.speed01,0,1.3)*1.2)*b.cadence*(C?1.3:1);b.phase+=w*ts*xt}function A(b){p.copy(b.playerPos);for(let w of a){let z=Math.max(4,w.speedEst);if(b.deathType==="fall"){w.fwdDir.set(-Math.sin(w.heading),0,-Math.cos(w.heading)),zn.subVectors(p,w.pos);let k=Math.max(.35,zn.dot(w.fwdDir)-(.9+w.k*.55));w.skidV0=w.skidV=z,w.skidA=z*z/(2*k),w.mode="skid"}else w.mode="charge";w.modeT=0}}let L={group:t,pack:a,body:u,eyes:f,onScreech:null,reset(){m=!1,x=!1,g=0;for(let b of a)b.mode="chase",b.modeT=0,b.dist=Bh(1)+b.back,b.v=b.lane,b.heading=0,b.roll=0,b.hasPrev=!1,b.jumpOff.set(0,0,0),b.speedEst=0,b.lunge=0,b.screechT=99,b.screechNext=1.5+b.rng()*4,b.reachT=99,b.reachNext=.8+b.rng()*1.5},pounce(){x=!0;for(let b of a)(b.mode==="chase"||b.mode==="idle")&&(b.mode="charge",b.modeT=0)},setThreat(b){g=Math.max(g,fe(b,0,1))},stats(){return{triangles:d.attributes.position.count/3+h.attributes.position.count/3,bones:s.length}},dispose(){i.remove(t),d.dispose(),h.dispose(),e.dispose(),n.dispose(),l.boneTexture&&l.boneTexture.dispose()},update(b,w){let z=w.time;g=Math.max(0,g-b*.25);let k=fe(Math.max(w.threat||0,g),0,1);if(w.dead&&!m&&A(w),m=!!w.dead,w.dead){if(x)for(let T of a)(T.mode==="chase"||T.mode==="idle")&&(T.mode="charge",T.modeT=0)}else{x=!1;let T=!w.running;for(let C of a)C.mode!==(T?"idle":"chase")&&(C.mode=T?"idle":"chase",C.modeT=0,C.hasPrev=!1)}n.opacity=.88+.12*Math.sin(z*6.3);for(let T of a){let C=_;switch(y(C,z),T.prevPos.copy(T.pos),T.modeT+=b,T.mode){case"chase":{v(T,b,w,k,z,!1);let B=Be(4.8,2.7,T.dist);T.reachNext-=b*(B>.2?1:.2),T.reachNext<=0&&(T.reachT=0,T.reachNext=1.3+T.rng()*2,T.reachSide=-T.reachSide),T.reachT+=b,C.reach=yf(T.reachT,.15,.4,.75)*B,T.lunge=C.reach,C.reachSide=T.reachSide,C.screech=R(T,b,1,3,8),C.jaw=.1*B,E(T,w.playerPos,C,.6);break}case"charge":{if(v(T,b,w,1,z,!0),C.jaw=.4,C.reach=.3,C.reachSide=T.reachSide,E(T,w.playerPos,C,.8),T.modeT>=T.leapDelay&&(T.dist<4.5||T.modeT>.8)){T.leapFrom.copy(T.pos);let B=I(T,w,zn).distanceTo(T.pos);T.leapDur=fe(.2+B*.06,.28,.6),T.arc=.6+B*.12,T.mode="leap",T.modeT=0}break}case"leap":{let B=fe(T.modeT/T.leapDur,0,1),Q=B*B*(3-2*B);I(T,w,zn),T.pos.lerpVectors(T.leapFrom,zn,Q),T.pos.y+=T.arc*4*B*(1-B),$e.subVectors(zn,T.leapFrom),T.heading=es(T.heading,Math.atan2(-$e.x,-$e.z),14,b),T.roll=ue(T.roll,0,8,b),C.leap=Be(0,.2,B),C.run=1-C.leap,C.pitch=me(.4,-.55,B),C.jaw=.55,B>=1&&(T.mode="pile",T.modeT=0);break}case"pile":{I(T,w,zn),T.pos.lerp(zn,1-Math.exp(-12*b)),$e.subVectors(w.playerPos,T.pos);let Q=Math.hypot($e.x,$e.z)>.25?Math.atan2(-$e.x,-$e.z):w.playerAngle+Math.PI;T.heading=es(T.heading,Q+.25*Math.sin(z*5+T.phase0),10,b),T.roll=ue(T.roll,.15*Math.sin(z*7+T.phase0),8,b),C.run=0,C.pile=Be(0,.25,T.modeT),C.pitch=.3+.1*Math.sin(z*11+T.phase0),C.bobExtra=.05*Math.abs(Math.sin(z*7+T.phase0)),C.jaw=.25+.35*Math.max(0,Math.sin(z*11+T.phase0)),C.screech=R(T,b,1.5,2,5),C.lookYaw=.4*Math.sin(z*9+T.phase0);break}case"skid":{T.skidV=Math.max(0,T.skidV-T.skidA*b),T.pos.addScaledVector(T.fwdDir,T.skidV*b);let B=1-T.skidV/T.skidV0;T.phase+=b*ts*3*(1-B),T.roll=ue(T.roll,0,8,b),C.run=1-B,C.brace=B,C.pitch=.25*B,C.jaw=.5*B,E(T,w.playerPos,C,.8),T.skidV<=.01&&(T.mode="edge",T.modeT=0);break}case"edge":{C.run=0,C.crouch=1;let B=Be(0,.6,T.modeT);C.brace=1-B,C.peer=B,C.bobExtra=.02*Math.sin(z*2.2+T.phase0),C.jaw=.25,C.screech=R(T,b,1.2,2.5,6),E(T,w.playerPos,C,.9*B),T.heading=es(T.heading,T.heading+.3*Math.sin(z*1.3+T.phase0)*B*b,1,b);break}default:{let B=2.6+T.back*.55;T.dist=ue(T.dist,B,3,b),w.sample(T.dist,T.sample);let Q=T.sample;T.v=ue(T.v,T.lane,3,b),T.pos.copy(Q.pos).addScaledVector(Q.piece.right,T.v-Q.v),T.heading=es(T.heading,Math.atan2(-Q.fwd.x,-Q.fwd.z),9,b),T.roll=ue(T.roll,0,8,b),C.run=0,C.crouch=1,C.breathe=.05*Math.sin(z*1.4+T.phase0),C.bobExtra=.012*Math.sin(z*1.4+T.phase0),C.screech=R(T,b,.6,4,10),C.jaw=.06,C.lookYaw=.35*Math.sin(z*.55+T.phase0),C.lookPitch=.1+.08*Math.sin(z*.8+T.phase0);break}}b>1e-4&&(T.speedEst=ue(T.speedEst,T.pos.distanceTo(T.prevPos)/b,5,b)),S(T,C)}}};L.reset();for(let b of a)b.mode="idle";return L}var Ke=yt.trackWidth,ee=Ke*.5,dt={stone:10195842,stoneLight:11774613,stoneDark:7432794,stoneMoss:8228698,carved:8748136,dirt:8216894,dirtLight:10256215,sand:12759690,grass:5143606,grassLight:6986557,grassDark:3826217,bark:6045736,barkDark:4074267,leaf:4164408,leafLight:6794561,leafDark:2910763,palm:5216826,rock:9077364,rockDark:7038299,rockLight:11051154,wood:9134646,woodDark:6177060,rope:12099696,iron:3881528,gold:14263866,abyss:526858,vine:4028979,mist:14677247,flower:[16735866,16763210,13851903,16777215,16747578]},Fl=13096898,Af=38,Rf=150,Pf=Ll(hf()),kl=null,Ol=null,Hh=null,Gh=null,If=null,Wh=null,Bl=null,Xh=null,qh=null;function Yh(){kl||(kl=Dl(),Ol=ff({color:2916230,deep:866884,foam:14087157}),Hh=pf(),Gh=new Ye({map:Cf(),color:16751162,transparent:!0,opacity:.4,blending:He,depthWrite:!1,fog:!1,toneMapped:!1,side:We}),If=new Ye({color:dt.abyss}),Wh=new Ye({map:Cf(),color:13626101,transparent:!0,opacity:.35,blending:He,depthWrite:!1,toneMapped:!1}),Bl=new Yn(.34,1.15,7,3,!0),Bl.translate(0,.575,0),Xh=new vn(1.5,1.5),qh=new Dr(1,10))}var uo=null;function Cf(){if(uo)return uo;let i=64,t=document.createElement("canvas");t.width=i,t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i),uo=new Ir(t),uo.colorSpace=sn,uo}function Lf(i,t,e){Yh(),i.background=new vt(Fl),i.fog=new wr(Fl,Af,Rf),mf(Fl,Af,Rf);let n=new _e({uniforms:{uTop:{value:new vt(5214166)},uMid:{value:new vt(10406370)},uHorizon:{value:new vt(Fl)},uSun:{value:new F(.45,.55,.3).normalize()},uSunColor:{value:new vt(16773320)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_Position.z = gl_Position.w * 0.9999; }",fragmentShader:`
      uniform vec3 uTop, uMid, uHorizon, uSun, uSunColor; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 c = mix(uHorizon, uMid, smoothstep(-0.02, 0.18, h));
        c = mix(c, uTop, smoothstep(0.15, 0.7, h));
        float s = max(0.001, dot(normalize(vDir), uSun));
        c += uSunColor * (pow(s, 180.0) * 1.2 + pow(s, 8.0) * 0.18);
        gl_FragColor = vec4(c, 1.0);
      }`,side:on,depthWrite:!1,fog:!1}),s=new te(new wi(360,28,14),n);s.frustumCulled=!1,s.renderOrder=-10,i.add(s);let r=new Or(14084607,5597754,1.15);i.add(r);let o=new $s(16770232,2.5);o.castShadow=e!=="low";let a=e==="high"?2048:1024;o.shadow.mapSize.set(a,a),o.shadow.camera.near=5,o.shadow.camera.far=220;let l=46;o.shadow.camera.left=-l,o.shadow.camera.right=l,o.shadow.camera.top=l,o.shadow.camera.bottom=-l,o.shadow.bias=-6e-4,o.shadow.normalBias=.03,i.add(o),i.add(o.target);let c=new F(48,75,32),d=Av();i.add(d);let h=new te(new vn(700,700),new Ye({color:4152630}));h.rotation.x=-Math.PI/2,h.position.y=-14,h.renderOrder=-5,i.add(h);let u=new $s(16773596,.55);i.add(u),i.add(u.target);let f=new F;return{update(m,x){s.position.copy(x.camera.position),d.position.set(x.playerPos.x,0,x.playerPos.z),h.position.x=x.playerPos.x,h.position.z=x.playerPos.z,u.position.copy(x.camera.position),u.position.y+=12,u.target.position.copy(x.playerPos),u.target.updateMatrixWorld(),o.position.copy(x.playerPos).add(c),f.copy(x.playerPos).addScaledVector(x.piece?x.piece.fwd:c,14),o.target.position.copy(f),o.target.updateMatrixWorld()},setQuality(m){o.castShadow=m!=="low";let x=m==="high"?2048:1024;o.shadow.mapSize.x!==x&&(o.shadow.mapSize.set(x,x),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null))},dispose(){i.remove(s,r,o,o.target,d,h,u,u.target),s.geometry.dispose(),n.dispose(),h.geometry.dispose(),h.material.dispose()}}}function Av(){let i=new Un,t=Rv(4242);for(let a=0;a<26;a++){let l=a/26*Math.PI*2+t()*.2,c=190+t()*60,d=45+t()*60,h=40+t()*40;i.cone(h,d,6,{position:[Math.cos(l)*c,d*.5-8,Math.sin(l)*c],rotation:[0,t()*6,0],color:t()<.5?9414317:10203574,jitter:.08})}for(let a=0;a<70;a++){let l=a/70*Math.PI*2+t()*.1,c=105+t()*45,d=12+t()*16;i.cone(6+t()*8,d,5,{position:[Math.cos(l)*c,d*.5-4,Math.sin(l)*c],color:t()<.5?7311480:8166531,jitter:.12})}let e=120,n=-150;for(let a=0;a<6;a++){let l=42-a*6;i.box(l,6,l,{position:[e,3+a*6-4,n],color:9345680,jitter:.08})}i.box(4,8,4,{position:[e,40,n],color:10134938});let s=i.build(),r=new Ye({vertexColors:!0,fog:!1}),o=new te(s,r);return o.frustumCulled=!1,o}function Rv(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Df(i,t){Yh();let e=t.rng,n=t.quality||"high",s=n==="low"?.55:n==="medium"?.8:1,r=new Ne,o=new Un,a=[],l=i.kind,c=i.end==="straight"?i.length:i.tileStart,d=i.contentStart,h=i.obstacles.filter(_=>_.type==="gap").map(_=>[_.u-_.depth*.5,_.u+_.depth*.5]).map(([_,S])=>[Math.max(_,d),Math.min(S,c)]).filter(([_,S])=>S-_>.05),u=16,f={left:d,right:d},m={b:o,extras:a,rng:e,density:s,kind:l,piece:i,quality:n,FIELD_W:u},x=[],g=d;for(let[_,S]of h)_-g>.05&&x.push([g,_]),g=Math.max(g,S);c-g>.05&&x.push([g,c]);for(let[_,S]of x)Cv(m,_,S);for(let[_,S]of h)Pv(m,_,S);if(l!=="bridge"&&!(i.side.left==="drop"&&i.side.right==="drop"))o.box(Ke+4,1,i.length+Ke,{position:[0,-8,-(i.length*.5)],color:dt.abyss});else{let _=new te(new vn(Ke+4.4,i.length+Ke),Ol);_.rotation.x=-Math.PI/2,_.position.set(0,-11,-(i.length*.5)),_.renderOrder=1,a.push(_)}i.end!=="straight"&&Iv(m);for(let _ of["left","right"]){let S=_==="left"?-1:1,y=i.side[_],R=f[_],E=i.length,I=i.length;switch(i.end!=="straight"&&((i.end==="tee"?["left","right"]:[i.end]).includes(_)?(E=i.tileStart,I=i.tileStart-u):I=i.tileStart),y){case"wall":Lv(m,S,R,E,I);break;case"cliffwall":Dv(m,S,R,E,I);break;case"jungle":Uv(m,S,R,E,I);break;case"open":Nv(m,S,R,E,I);break;case"drop":Fv(m,S,R,E,I,i.sideWidth&&i.sideWidth[_]||58);break}}l==="bridge"&&kv(m,d,c,h),l==="ruins"&&Bv(m,d,c),i.safe&&Ov(m);let p=o.toMesh(Pf);p&&(p.frustumCulled=!0,r.add(p));for(let _ of a)r.add(_);return r.userData.piece=i.id,r}function Uf(i){i.traverse(t=>{t.geometry&&!t.userData.sharedGeo&&t.geometry.dispose(),t.material&&t.userData.ownMaterial&&t.material.dispose()})}function Cv(i,t,e){let{b:n,rng:s,kind:r}=i,o=e-t;if(r==="temple"||r==="ruins"||r==="cliff"){let a=r==="cliff"?dt.rock:dt.stone;n.box(Ke,.6,o,{position:[0,-.32,-(t+e)*.5],color:dt.stoneDark});let l=Math.max(1,Math.round(o/2)),c=o/l;for(let d=0;d<l;d++){let h=-(t+(d+.5)*c);for(let u=-1;u<=1;u++){let f=s(),m=f<.12?dt.stoneMoss:f<.3?dt.stoneDark:f<.55?dt.stoneLight:a,x=s()<.15?-.05:0;n.box(1.9,.12,c-.1,{position:[u*2,-.06+x,h],color:m,jitter:.08,rotation:[0,0,0]})}}if(r==="ruins")for(let d=0;d<o/6;d++)n.box(.4+s()*.5,.15,.3+s()*.4,{position:[(s()-.5)*5,.05,-(t+s()*o)],rotation:[0,s()*3,0],color:dt.stoneMoss,jitter:.2})}else if(r==="jungle"){n.box(Ke,.6,o,{position:[0,-.31,-(t+e)*.5],color:dt.dirt,jitter:.06}),n.box(Ke-1.2,.04,o,{position:[0,-.005,-(t+e)*.5],color:dt.dirtLight,jitter:.1});for(let a=0;a<o*.6*i.density;a++){let l=-(t+s()*o),c=s()<.5?-1:1;s()<.5?n.add(Ut("dodeca"),{position:[c*(2.4+s()*.5),.05,l],scale:.08+s()*.1,color:dt.rock,jitter:.2}):n.cone(.12,.3,4,{position:[c*(2.5+s()*.4),.12,l],color:dt.grassLight,jitter:.2,sway:1})}}else if(r==="bridge"){for(let l=t+.62*.5;l<e;l+=.62){let c=s()<.05;n.box(Ke+.6,.12,.5,{position:[0,-.06,-l],rotation:[0,0,c?(s()-.5)*.08:0],color:s()<.3?dt.woodDark:dt.wood,jitter:.15})}for(let l of[-2.6,0,2.6])n.box(.25,.25,o,{position:[l,-.24,-(t+e)*.5],color:dt.woodDark})}}function Pv(i,t,e){let{b:n,rng:s,kind:r}=i;if(r==="bridge"){for(let o of[t,e])for(let a=-2;a<=2;a++)n.box(.5,.1,.3+s()*.3,{position:[a*1.2+(s()-.5)*.4,-.05,-o+(o===t?-.1:.1)],rotation:[(s()-.5)*.6,0,0],color:dt.woodDark,jitter:.2});return}for(let o of[t,e])for(let a=-ee+.4;a<=ee-.4;a+=.8)n.box(.7,.35,.5,{position:[a+(s()-.5)*.2,-.28,-o+(o===t?-.15:.15)],rotation:[(s()-.5)*.5,(s()-.5)*.3,(s()-.5)*.3],color:dt.stoneDark,jitter:.2})}function Iv(i){let{b:t,rng:e,piece:n,kind:s}=i,r=n.tileStart,o=n.length,a=-(r+ee);t.box(Ke,.6,Ke,{position:[0,-.32,a],color:dt.stoneDark});for(let d=0;d<3;d++)for(let h=-1;h<=1;h++)t.box(1.9,.12,1.9,{position:[h*2,-.06,-(r+1+d*2)],color:e()<.3?dt.stoneLight:dt.stone,jitter:.08});t.add(Ut("cyl",1,1,12),{position:[0,.02,a],scale:[1.4,.06,1.4],color:dt.carved});let l=s==="jungle"?10463362:dt.stoneLight;t.box(Ke+3,6.5,1.6,{position:[0,3.2,-(o+.8)],color:l,jitter:.06}),t.box(Ke+3.6,.6,2,{position:[0,6.6,-(o+.8)],color:dt.stoneDark}),t.box(Ke+3.6,.4,2,{position:[0,.2,-(o+.8)],color:dt.stoneDark});let c=-(o-.25);t.add(Ut("cyl",1,1,16),{position:[0,3,c],rotation:[Math.PI/2,0,0],scale:[1.7,.5,1.7],color:7300691,jitter:.05}),t.add(Ut("cyl",1,1,16),{position:[0,3,c-.1],rotation:[Math.PI/2,0,0],scale:[2.1,.3,2.1],color:4866872,jitter:.05}),t.box(.55,.45,.3,{position:[-.55,3.35,c+.2],color:1709330}),t.box(.55,.45,.3,{position:[.55,3.35,c+.2],color:1709330}),t.box(1.4,.35,.3,{position:[0,2.35,c+.2],color:1709330});for(let d=-2;d<=2;d++)t.box(.22,.32,.2,{position:[d*.28,2.42,c+.32],color:dt.stoneLight});t.box(.5,.6,.3,{position:[-1.2,3.9,c+.3],rotation:[0,0,.4],color:dt.carved}),t.box(.5,.6,.3,{position:[1.2,3.9,c+.3],rotation:[0,0,-.4],color:dt.carved});for(let d=-3;d<=3;d++)t.box(.5,.5,.15,{position:[d*1.1,5.4,-o+.08],color:d%2?dt.stoneDark:dt.carved});if(fo(i,-2.6,2.4,o-.12,0,1.6),fo(i,2.6,2.4,o-.12,0,1.6),n.end!=="tee"){let d=n.end==="left"?1:-1,h=d*(ee+.8);t.box(1.6,6.5,Ke+1.6,{position:[h,3.2,a-.8],color:l,jitter:.08}),t.box(2,.6,Ke+2,{position:[h,6.6,a-.8],color:dt.stoneDark}),t.add(Ut("cyl",.45,.5,9),{position:[d*(ee+.3),3,a],scale:[1,6,1],color:dt.stoneLight})}else t.box(1.2,.8,1,{position:[0,.4,-(o-1.2)],color:dt.stoneDark}),t.add(Ut("sphere",8,6),{position:[0,1.35,-(o-1.2)],scale:[.45,.5,.45],color:dt.gold})}function Lv(i,t,e,n,s=n){let{b:r,rng:o,density:a,FIELD_W:l}=i;if(n-e<.5)return;let c=n-e,d=-(e+n)*.5;s-e>.5&&r.box(l,.6,s-e,{position:[t*(ee+l*.5+1),-.35,-(e+s)*.5],color:dt.grassDark,jitter:.06});let h=t*(ee+.85),u=6+o()*1.5;r.box(1.7,u,c,{position:[h,u*.5-.2,d],color:dt.stone,jitter:.06}),r.box(2.1,.5,c,{position:[h,u-.1,d],color:dt.stoneDark}),r.box(2.1,.5,c,{position:[h,.05,d],color:dt.stoneDark});for(let f=e+2.5;f<n-1;f+=5.5){let m=-f;if(r.add(Ut("cyl",.42,.5,9),{position:[t*(ee+.35),u*.5-.2,m],scale:[1,u,1],color:dt.stoneLight,jitter:.05}),r.box(1.2,.5,1.2,{position:[t*(ee+.35),u-.4,m],color:dt.stoneDark}),r.box(1.2,.4,1.2,{position:[t*(ee+.35),.2,m],color:dt.stoneDark}),o()<.6){let x=m+2.75;r.box(.2,1.4,1.6,{position:[t*(ee+.05),3.2,x],color:dt.carved,jitter:.05});for(let g=0;g<3;g++)r.box(.28,.25,.3,{position:[t*(ee+.02),2.7+g*.5,x+(g%2?.4:-.4)],color:dt.stoneDark})}}for(let f=0;f<c*.25*a;f++){let m=-(e+o()*c);r.box(.25,.3+o()*.7,.8+o()*1.2,{position:[t*(ee+.02),.2,m],color:dt.stoneMoss,jitter:.25})}for(let f=0;f<c*.18*a;f++){let m=-(e+o()*c),x=1.5+o()*3;r.add(Ut("cyl",.05,.03,4),{position:[t*(ee+.05),u-.3-x*.5,m],scale:[1,x,1],color:dt.vine,jitter:.2,sway:g=>(1-g)*.9}),r.add(Ut("ico",0),{position:[t*(ee+.05),u-.3-x,m],scale:.18,color:dt.leaf,sway:.9})}for(let f=e+6+o()*4;f<n-2;f+=11+o()*5)fo(i,t*(ee+.02),2.6,f,t)}function Dv(i,t,e,n,s=n){let{b:r,rng:o,density:a,FIELD_W:l}=i;if(n-e<.5)return;let c=n-e,d=t*(ee+.6);s-e>.5&&r.box(l,.6,s-e,{position:[t*(ee+l*.5+2),-.35,-(e+s)*.5],color:dt.rockDark,jitter:.06}),r.box(2.5,9,c,{position:[t*(ee+1.6),4.2,-(e+n)*.5],color:dt.rockDark,jitter:.08});for(let h=e;h<n;h+=2.6){let u=0,f=3+Math.floor(o()*2);for(let m=0;m<f;m++){let x=1.4+o()*2.2,g=1.2+o()*1.6,p=2.2+o()*1.2;r.box(g,x,p,{position:[d+t*(g*.5-.3+o()*.4),u+x*.5,-(h+1.3)+(o()-.5)*.6],rotation:[(o()-.5)*.15,(o()-.5)*.25,(o()-.5)*.15],color:o()<.25?dt.rockLight:o()<.5?dt.rock:dt.rockDark,jitter:.12}),u+=x*.9}o()<.4*a&&r.box(1,.25,1.4,{position:[d+t*.6,u*(.4+o()*.4),-(h+1.3)],color:dt.stoneMoss,jitter:.2})}for(let h=0;h<c*.2*a;h++)zl(i,t*(ee+.3+o()*.3),-(e+o()*c),.5+o()*.3)}function Uv(i,t,e,n,s=n){let{b:r,rng:o,density:a,FIELD_W:l}=i;if(n-e<.5||(r.box(1,.25,n-e,{position:[t*(ee+.4),-.05,-(e+n)*.5],color:dt.grassDark,jitter:.1}),n=Math.min(n,s),n-e<.5))return;let c=n-e,d=-(e+n)*.5;r.box(l,.6,c,{position:[t*(ee+l*.5),-.32,d],color:dt.grass,jitter:.06});for(let h=e+1.5;h<n;h+=4.2/a){let u=-(h+o()*2);Vh(i,t*(ee+2.2+o()*2.5),u,o),o()<.7&&Vh(i,t*(ee+6+o()*6),u+(o()-.5)*3,o,!0)}for(let h=0;h<c*.5*a;h++){let u=-(e+o()*c),f=o();f<.45?zl(i,t*(ee+.6+o()*1.5),u,.6+o()*.5):f<.7?Nf(i,t*(ee+1.2+o()*2),u,.5+o()*.5):f<.9?r.add(Ut("sphere",5,4),{position:[t*(ee+.7+o()*1.2),.25,u],scale:.09,color:dt.flower[Math.floor(o()*dt.flower.length)],sway:.6}):zv(i,t*(ee+.9),u,t,o)}if(o()<.5){let h=-(e+o()*c);r.add(Ut("cyl",.35,.4,7),{position:[t*(ee+2.5),.3,h],rotation:[0,o()*3,Math.PI/2],scale:[1,4,1],color:dt.barkDark,jitter:.15})}}function Nv(i,t,e,n,s=n){let{b:r,rng:o,density:a,FIELD_W:l}=i;if(n-e<.5||(r.box(1.2,.3,n-e,{position:[t*(ee+.5),-.06,-(e+n)*.5],color:dt.stoneMoss,jitter:.12}),n=Math.min(n,s),n-e<.5))return;let c=n-e,d=-(e+n)*.5;r.box(l,.6,c,{position:[t*(ee+l*.5),-.34,d],color:dt.grassDark,jitter:.08});for(let h=0;h<c*.22*a;h++){let u=-(e+o()*c),f=t*(ee+1.5+o()*6),m=o();m<.35?r.add(Ut("dodeca"),{position:[f,.25,u],scale:.3+o()*.5,rotation:[o(),o(),0],color:dt.rock,jitter:.2}):m<.6?Ff(i,f,u,o):m<.8?Nf(i,f,u,.5+o()*.6):zl(i,f,u,.6)}for(let h=e+4;h<n;h+=9/a)Vh(i,t*(ee+7+o()*6),-(h+o()*3),o,!0)}function Fv(i,t,e,n,s=n,r=58){let{b:o,rng:a,density:l,extras:c,piece:d}=i;if(n-e<.5)return;let h=t*(ee+Math.max(14,r-22)),u=ee+2,f=Math.abs(h)+10;{let _=n-e,S=-(e+n)*.5;o.box(.9,.5,_,{position:[t*(ee+.25),-.15,S],color:dt.rockDark,jitter:.1}),o.box(3,16,_,{position:[t*(ee+2),-8.2,S],color:dt.rockDark,jitter:.1});for(let y=e;y<n;y+=3)o.box(.6+a()*.6,.3+a()*.4,1.2+a()*1.5,{position:[t*(ee+.9+a()*.5),-.6-a()*3,-(y+1.5)],rotation:[0,a(),0],color:dt.rock,jitter:.15})}if(n=Math.min(n,s),n-e<.5)return;let m=n-e,x=-(e+n)*.5,g=new te(new vn(f-u,m+12),Ol);g.rotation.x=-Math.PI/2,g.position.set(t*(u+f)*.5,-11,x),g.renderOrder=1,c.push(g),o.box(14,30,m+12,{position:[h+t*6,3,x],color:dt.rockDark,jitter:.1});for(let _=e-4;_<n+4;_+=3.5){let S=2+a()*5,y=2+a()*3;o.box(y,S,3.6,{position:[h-t*(a()*1.5),-8+a()*22,-(_+1.7)],rotation:[0,0,(a()-.5)*.2],color:a()<.5?dt.rock:dt.rockLight,jitter:.12})}for(let _=e;_<n;_+=7){let S=5+a()*6;o.add(Ut("cyl",.2,.3,5),{position:[h-t*1,18+S*.5,-(_+a()*5)],scale:[1,S,1],color:dt.bark}),o.cone(2+a()*1.5,3+a()*2,6,{position:[h-t*1,18+S+1,-(_+a()*5)],color:dt.leafDark,jitter:.2,sway:.5})}let p=d.kind==="bridge"||a()<.7?1:2;for(let _=0;_<p;_++){let S=-(e+4+a()*Math.max(1,m-8)),y=3+a()*3,R=new te(new vn(y,24,1,1),Hh);R.position.set(h-t*2.3,1,S),R.rotation.y=t<0?Math.PI/2:-Math.PI/2,R.renderOrder=2,c.push(R);let E=new te(qh,Wh);E.rotation.x=-Math.PI/2,E.position.set(h-t*4,-10.7,S),E.scale.set(y*1.2,y*1.2,1),E.userData.sharedGeo=!0,E.renderOrder=3,c.push(E),o.box(y*.8,.6,1.2,{position:[h-t*2.8,12.9,S],color:dt.rockLight,jitter:.1})}for(let _=0;_<m*.12*l;_++)zl(i,t*(ee+.3+a()*.4),-(e+a()*m),.45)}function kv(i,t,e,n){let{b:s,rng:r}=i,o=e-t,a=-(t+e)*.5;for(let l of[-1,1]){let c=l*(ee+.35);for(let d of[.55,1.05])s.add(Ut("cyl",.045,.045,5),{position:[c,d,a],rotation:[Math.PI/2,0,0],scale:[1,o,1],color:dt.rope});for(let d=t+.3;d<e;d+=5.5)s.add(Ut("cyl",.1,.13,6),{position:[c,.65,-d],scale:[1,1.5,1],color:dt.woodDark,jitter:.1});for(let d=t+1;d<e;d+=1.6)s.add(Ut("cyl",.03,.03,4),{position:[c,.8,-d],scale:[1,.5,1],color:dt.rope,sway:.15})}for(let[l,c]of n)s.add(Ut("cyl",.05,.05,5),{position:[0,-.5,-(l+c)*.5],rotation:[Math.PI/2,0,0],scale:[1,c-l+1,1],color:dt.rope})}function Bv(i,t,e){let{b:n,rng:s,density:r}=i;for(let o=t+3;o<e-3;o+=9/r){let a=s()<.5?-1:1;s()<.5?Ff(i,a*(ee+1),-(o+s()*3),s,.6):n.box(.6,.5,.7,{position:[a*(ee+.9),.25,-(o+s()*3)],rotation:[0,s(),.2*(s()-.5)],color:dt.stoneMoss,jitter:.2})}}function Ov(i){let{b:t}=i,e=5;t.box(Ke+8,8,2,{position:[0,3.8,e],color:dt.stone,jitter:.06}),t.box(Ke+9,.8,2.6,{position:[0,8.2,e],color:dt.stoneDark}),t.box(Ke-1,4.5,2.4,{position:[0,2.25,e],color:790286});for(let n of[-1,1])t.add(Ut("cyl",.55,.65,10),{position:[n*(ee-.2),2.5,e-1.4],scale:[1,5,1],color:dt.stoneLight});fo(i,-ee+1.4,3.2,-e+1.5,0),fo(i,ee-1.4,3.2,-e+1.5,0)}function Vh(i,t,e,n,s=!1){let{b:r}=i,o=n()<.3,a=s?6+n()*6:5+n()*4;if(o){r.add(Ut("cyl",.18,.3,6),{position:[t,a*.5,e],rotation:[0,0,(n()-.5)*.15],scale:[1,a,1],color:dt.bark,jitter:.1});for(let l=0;l<6;l++){let c=l/6*Math.PI*2+n()*.5;r.box(.5,.08,2.6,{position:[t+Math.cos(c)*1.1,a+.2-.3,e+Math.sin(c)*1.1],rotation:[.35,-c+Math.PI/2,0],color:dt.palm,jitter:.15,sway:1})}r.add(Ut("sphere",6,4),{position:[t,a,e],scale:.45,color:dt.leafDark})}else{let l=.28+n()*.2;r.add(Ut("cyl",l*.7,l,7),{position:[t,a*.5,e],scale:[1,a,1],color:dt.bark,jitter:.1});for(let d=0;d<3;d++){let h=n()*Math.PI*2;r.box(.25,.35,.9,{position:[t+Math.cos(h)*.45,.15,e+Math.sin(h)*.45],rotation:[0,-h,0],color:dt.barkDark})}let c=2+Math.floor(n()*2);for(let d=0;d<c;d++){let h=(2.2-d*.5)*(.8+n()*.4),u=2+n()*1.2,f=d===c-1?dt.leafLight:n()<.5?dt.leaf:dt.leafDark;r.cone(h,u,7,{position:[t+(n()-.5)*.4,a-.6+d*1.5,e+(n()-.5)*.4],rotation:[0,n()*3,0],color:f,jitter:.15,sway:.7+d*.15})}}}function zl(i,t,e,n){let{b:s,rng:r}=i,o=4+Math.floor(r()*3);for(let a=0;a<o;a++){let l=a/o*Math.PI*2+r()*.6;s.box(.16*n,.05,1.1*n,{position:[t+Math.cos(l)*.35*n,.35*n,e+Math.sin(l)*.35*n],rotation:[-.7,-l+Math.PI/2,0],color:r()<.5?dt.leaf:dt.leafLight,jitter:.2,sway:1})}}function Nf(i,t,e,n){let{b:s,rng:r}=i;s.add(Ut("ico",0),{position:[t,n*.7,e],scale:[n*1.1,n*.8,n],rotation:[0,r()*3,0],color:r()<.5?dt.leafDark:dt.leaf,jitter:.18,sway:.4}),r()<.4&&s.add(Ut("sphere",5,4),{position:[t+.3,n*1.2,e],scale:.1,color:dt.flower[Math.floor(r()*dt.flower.length)]})}function zv(i,t,e,n,s){let{b:r}=i;for(let o=0;o<4;o++){let a=o/3;r.add(Ut("cyl",.1,.13,5),{position:[t+n*a*1.2,.15+Math.sin(a*Math.PI)*.35,e],rotation:[0,0,Math.PI/2-n*(.6-a*1.2)],scale:[1,.55,1],color:dt.barkDark,jitter:.1})}}function Ff(i,t,e,n,s=1){let{b:r}=i,o=(1+n()*2.5)*s;r.add(Ut("cyl",.42,.5,8),{position:[t,o*.5,e],rotation:[(n()-.5)*.1,0,(n()-.5)*.1],scale:[1,o,1],color:dt.stoneLight,jitter:.1}),r.box(1.2,.35,1.2,{position:[t,.17,e],color:dt.stoneDark}),r.box(.5,.35,.5,{position:[t+.9,.17,e+.6],rotation:[0,n(),0],color:dt.stoneMoss,jitter:.2})}function fo(i,t,e,n,s,r=1){let{b:o,extras:a}=i,l=-n;o.box(.25,.25,.25,{position:[t,e-.35,l],color:dt.iron}),o.add(Ut("cyl",.06,.08,5),{position:[t-s*.15,e-.15,l],scale:[1,.5,1],color:dt.woodDark}),o.add(Ut("cyl",.16,.12,6),{position:[t-s*.22,e+.1,l],scale:[1,.2,1],color:dt.iron});let c=new te(Bl,kl);c.position.set(t-s*.22,e+.15,l),c.userData.sharedGeo=!0,c.renderOrder=5,a.push(c);let d=new te(Xh,Gh);d.scale.setScalar(r),d.position.set(t-s*.5,e+.5,l+(s===0?.6:0)),s!==0&&(d.rotation.y=s>0?-Math.PI/2:Math.PI/2),d.userData.sharedGeo=!0,d.renderOrder=4,a.push(d)}function kf(){Yh();let i=new Ne,t=(n,s)=>{let r=new te(n,s);return r.visible=!1,i.add(r),r};t(Bl,kl),t(Xh,Gh),t(qh,Wh),t(new vn(1,1),Ol),t(new vn(1,1),Hh);let e=new Un;return e.box(1,1,1,{color:dt.stone,sway:.5}),t(e.build(),Pf),t(new si(1,1,1),If),i}var ui=yt.laneWidth,Zh=3.4,Yt=Math.PI,Xe=Yt*2,st={bark:7031340,barkDark:5125408,barkLight:9069112,wood:13213802,heart:10253123,plank:9136968,plankDark:6705210,rope:12163684,stone:9209463,stoneDark:7104090,stoneLight:10722699,stoneWarm:10129272,groove:5196352,rock:8420208,rockDark:6380885,moss:7314746,mossDark:5208618,leaf:5213999,leafLight:8172354,leafDark:3502122,leafDeep:3039016,litter:10122296,litterRed:10900782,iron:4869202,ironDark:3355962,ironLight:10396330,steel:13685980,rust:8014378,gold:13937226,goldDark:10648620,teal:3116938,ochre:11815468,bone:15261638,soot:1840144,coal:2759186},Pi={ember:new vt(2.6,.9,.18),emberDim:new vt(1.4,.35,.06),fire:new vt(1.7,.62,.12),fireGround:new vt(1.2,.45,.08),eye:new vt(3.2,1.3,.25),eyeHalo:new vt(1.6,.55,.12),gem:new vt(2.4,.35,.25)},Jh=null,Hf=null,Gf=null,Vl=null,jh=null;function Vv(){Jh||(Jh=Ll(new yn({vertexColors:!0,roughness:.92,metalness:.02,flatShading:!0})),Hf=new Ye({vertexColors:!0,blending:He,transparent:!0,depthWrite:!1,side:We,fog:!1,toneMapped:!1}),Gf=Dl())}function Hv(){return Vl||(Vl=new Yn(1,1,7,3,!0).toNonIndexed(),Vl.translate(0,.5,0)),Vl}function Gv(){if(jh)return jh;let i=14,t=.42,e=[],n=(r,o)=>{let a=o/i*Xe;return[Math.cos(a)*r,0,-Math.sin(a)*r]};for(let r=0;r<i;r++){let o=n(t,r),a=n(t,r+1),l=n(1,r),c=n(1,r+1);e.push(0,0,0,...o,...a,...o,...l,...c,...o,...c,...a)}let s=new Ae;return s.setAttribute("position",new oe(e,3)),s.setAttribute("normal",new oe(e.map((r,o)=>o%3===1?1:0),3)),s.setAttribute("uv",new oe(new Float32Array(e.length/3*2),2)),jh=s,s}var Ci=new F,hi=new F,Hl=new F,Bf=new F;function Wv(i,t,e,n=!1){let s=i.length,r=new Float32Array(s*e*3);for(let u=0;u<s;u++){let f=i[Math.max(u-1,0)],m=i[Math.min(u+1,s-1)];Ci.set(m[0]-f[0],m[1]-f[1],m[2]-f[2]).normalize(),u===0?(Bf.set(Math.abs(Ci.y)<.9?0:1,Math.abs(Ci.y)<.9?1:0,0),hi.crossVectors(Ci,Bf).normalize()):(hi.addScaledVector(Ci,-hi.dot(Ci)),hi.lengthSq()<1e-6&&hi.set(1,0,0).addScaledVector(Ci,-Ci.x),hi.normalize()),Hl.crossVectors(Ci,hi);let x=i[u],g=t[u];for(let p=0;p<e;p++){let _=p/e*Xe,S=Math.cos(_),y=Math.sin(_),R=(u*e+p)*3;r[R]=x[0]+(hi.x*S+Hl.x*y)*g,r[R+1]=x[1]+(hi.y*S+Hl.y*y)*g,r[R+2]=x[2]+(hi.z*S+Hl.z*y)*g}}let o=(s-1)*e*2+(n?e*2:0),a=new Float32Array(o*9),l=0,c=u=>{a[l++]=r[u],a[l++]=r[u+1],a[l++]=r[u+2]},d=u=>{a[l++]=u[0],a[l++]=u[1],a[l++]=u[2]};for(let u=0;u<s-1;u++)for(let f=0;f<e;f++){let m=(f+1)%e,x=(u*e+f)*3,g=(u*e+m)*3,p=((u+1)*e+m)*3,_=((u+1)*e+f)*3;c(x),c(g),c(p),c(x),c(p),c(_)}if(n)for(let u=0;u<e;u++){let f=(u+1)%e;d(i[0]),c(f*3),c(u*3),d(i[s-1]),c(((s-1)*e+u)*3),c(((s-1)*e+f)*3)}let h=new Ae;return h.setAttribute("position",new ce(a,3)),h.setAttribute("normal",new ce(new Float32Array(a.length),3)),h.setAttribute("uv",new ce(new Float32Array(o*6),2)),h.computeVertexNormals(),h}var Wl=class extends Un{constructor(){super(),this.ranges=[],this.vertexCount=0,this.autoChunk=0,this.chunkKeys=new Map,this._src=null}add(t,e={}){super.add(t,e);let s=this.parts[this.parts.length-1].attributes.position.count,r=e.chunk!==void 0?"k"+e.chunk:"a"+this.autoChunk++,o=this.chunkKeys.get(r);return o===void 0&&(o=this.chunkKeys.size,this.chunkKeys.set(r,o)),this.ranges.push({start:this.vertexCount,count:s,chunk:o}),this.vertexCount+=s,this._src=t,this}paintLast(t){let e=this.parts[this.parts.length-1],n=this._src.attributes.position,s=e.attributes.color.array;for(let r=0;r<n.count;r++){let o=t(n.getX(r),n.getY(r),n.getZ(r),r);s[r*3]=o[0],s[r*3+1]=o[1],s[r*3+2]=o[2]}return this}tube(t,e,n,s={}){let r=Wv(t,e,n,!!s.caps);return this.add(r,s),r.dispose(),this}bone(t,e,n,s,r={}){return this.tube([t,e],[n,s],r.seg||7,{caps:!0,...r})}cyl(t,e,n={}){return this.add(Ut("cyl",t,1,e),n)}blob(t={}){return this.add(Ut("sphere",t.ws||8,t.hs||6),t)}halo(t,e,n,s,r,o,a=!1){this.add(Gv(),{position:[t,e,n],rotation:a?[Yt/2,0,0]:[0,0,0],scale:[s,1,r],color:16777215,chunk:"halo"});let l=o.r,c=o.g,d=o.b;return this.paintLast((h,u,f)=>{let m=Math.min(1,Math.hypot(h,f)),x=(1-m)*(1-m);return[l*x,c*x,d*x]})}toMesh(t,e=!0){let n=this.ranges.slice().sort((h,u)=>h.chunk-u.chunk),s=this.build();if(!s)return null;let r=this.chunkKeys.size,o=new Float32Array(r*3),a=new Float32Array(r),l=s.attributes.position.array;for(let h of n){for(let u=h.start,f=h.start+h.count;u<f;u++)o[h.chunk*3]+=l[u*3],o[h.chunk*3+1]+=l[u*3+1],o[h.chunk*3+2]+=l[u*3+2];a[h.chunk]+=h.count}for(let h=0;h<r;h++){let u=a[h]||1;o[h*3]/=u,o[h*3+1]/=u,o[h*3+2]/=u}let c=new Int32Array(n.length*3);n.forEach((h,u)=>{c[u*3]=h.start,c[u*3+1]=h.count,c[u*3+2]=h.chunk});let d=new te(s,t);return d.castShadow=e,d.receiveShadow=e,d.userData.chunks={ranges:c,centroids:o,count:r},d}},U=(i,t,e)=>t+(e-t)*i(),En=(i,t)=>t[Math.floor(i()*t.length)],Of=["dodeca","ico"],Yl=[st.leaf,st.leafLight,st.leafDark,st.leafDeep],Xl=[st.stone,st.stoneDark,st.stoneLight,st.stoneWarm];function ql(i,t,e,n,s,r,o={}){i.add(Ut("ico",o.detail??0),{position:[e,n,s],rotation:[U(t,0,Yt),U(t,0,Yt),U(t,0,Yt)],scale:[r*U(t,.9,1.2),r*U(t,.55,.75),r*U(t,.9,1.2)],color:o.color??En(t,Yl),jitter:.22,sway:o.sway??.45,chunk:o.chunk})}function Xv(i,t,e,n,s,r,o={}){i.box(r,.02,r*.38,{position:[e,n,s],rotation:[U(t,-.5,.5),U(t,0,Xe),U(t,-.6,.6)],color:o.color??En(t,Yl),jitter:.2,sway:o.sway??.7,chunk:o.chunk})}function An(i,t,e,n,s,r,o={}){i.blob({position:[e,n,s],rotation:[0,U(t,0,Yt),0],scale:[r*U(t,.9,1.4),r*.32,r*U(t,.8,1.2)],color:t()<.5?st.moss:st.mossDark,jitter:.2,ws:6,hs:4,chunk:o.chunk})}function go(i,t,e,n,s=.22){for(let r=0;r<3;r++)i.cone(.035,s*U(t,.7,1.2),4,{position:[e+U(t,-.06,.06),s*.45,n+U(t,-.06,.06)],rotation:[U(t,-.35,.35),0,U(t,-.35,.35)],color:En(t,[st.leafLight,st.leaf,st.moss]),sway:.9,chunk:"grass"})}function $h(i,t,e,n,s,r){for(let o=0;o<s;o++)i.box(U(t,.14,.24),.012,U(t,.09,.15),{position:[e+U(t,-r,r),.012,n+U(t,-.6,.6)],rotation:[0,U(t,0,Yt),0],color:En(t,[st.litter,st.litterRed,st.mossDark,st.barkLight]),jitter:.25,chunk:"litter"})}function mo(i,t,e,n,s,r,o=0){i.add(Hv(),{position:[t,e,n],rotation:[0,o,0],scale:[s,r,s],color:16777215})}function Wf(i,t,e,n,s,r,o,a){for(let l=0;l<r;l++)i.add(Ut("ico",0),{position:[e+U(t,-o,o),n+U(t,0,.08),s+U(t,-a,a)],rotation:[U(t,0,Yt),U(t,0,Yt),0],scale:U(t,.045,.1),color:t()<.6?Pi.ember:Pi.emberDim,chunk:"ember"})}function qv(i,t){let e=r=>r==="jungle"||r==="wall"||r==="cliffwall",n=i.side&&i.side.left,s=i.side&&i.side.right;return e(n)&&!e(s)?-1:e(s)&&!e(n)?1:t()<.5?-1:1}function Yv(i,t,e,n,s,r,o){let a=Math.round(n/ui)*(o?3:2),l=o===2?7:6,c=o?8:6,d=s-n/2-.2,h=s+n/2+.2;for(let u=0;u<a;u++){let f=U(t,.5,.95),m=U(t,d+f*.6,h-f*.6),x=Math.max(d,m-f),g=Math.min(h,m+f),p=U(t,.32,.45),_=U(t,.11,.16),S=r+U(t,-.22,.22),y=U(t,-.25,.25),R=U(t,0,Xe),E=[],I=[];for(let w=0;w<c;w++){let z=w/(c-1),k=Math.sin(z*Yt);E.push([x+(g-x)*z,-.14+(p+.14)*Math.pow(k,.8)+(w>0&&w<c-1?U(t,-.03,.03):0),S+y*(z-.5)*2+.11*Math.sin(z*Xe+R)]),I.push(_*(.72+.5*k)*U(t,.88,1.12))}let v=En(t,[st.bark,st.barkLight,st.barkLight,9398850]);i.tube(E,I,l,{color:v,jitter:.28,chunk:"arc"+u});let A=1+Math.floor(t()*(c-2)),L=E[A];if(i.sphere(I[A]*1.25,{position:[L[0],L[1],L[2]],color:st.barkDark,jitter:.2,ws:6,hs:4,chunk:"arc"+u}),o){let w=1+Math.floor(t()*(c-2)),z=E[w],k=U(t,0,Xe),T=[z[0]+Math.cos(k)*.22,z[1]*.45,z[2]+Math.sin(k)*.22],C=[T[0]+Math.cos(k)*.18,-.08,T[2]+Math.sin(k)*.18];i.tube([z,T,C],[I[w]*.55,.045,.02],5,{color:st.barkDark,jitter:.2,chunk:"arc"+u})}let b=E[Math.floor(c/2)];t()<.7&&An(i,t,b[0],b[1]+I[Math.floor(c/2)]*.75,b[2],.16,{chunk:"arc"+u})}if($h(i,t,s,r,Math.round(o?n*2.5:n),n/2),o)for(let u=0;u<Math.round(n/ui)+1;u++)go(i,t,U(t,d+.2,h-.2),r+U(t,-.45,.45))}function jv(i,t,e,n,s,r,o){let a=n+.9,l=.4,c=o?9:6,d=o===2?9:7,h=[],u=[],f=.4;for(let g=0;g<c;g++){let p=g/(c-1);h.push([s-a/2+a*p,f+.025*Math.sin(p*Yt*2.3),r+.04*Math.sin(p*Yt*1.7+1)]),u.push(l*(1-.14*p)*(g===0||g===c-1?.96:U(t,.9,1.1)))}i.tube(h,u,d,{color:st.bark,jitter:.25,caps:!0,chunk:"log"});for(let g of[0,c-1]){let p=h[g],_=g===0?-1:1,S=u[g];i.cyl(1,12,{position:[p[0]+_*.03,p[1],p[2]],rotation:[0,0,Yt/2],scale:[S*.84,.05,S*.84],color:st.wood,jitter:.12,chunk:"log"}),i.cyl(1,10,{position:[p[0]+_*.055,p[1],p[2]],rotation:[0,0,Yt/2],scale:[S*.4,.05,S*.4],color:st.heart,jitter:.12,chunk:"log"})}let m=o?9:5;for(let g=0;g<m;g++){let p=U(t,-2.4,2.4),_=s+U(t,-a/2+.6,a/2-.6),S=U(t,.5,1.3);i.box(S,.05,.09,{position:[_,f+Math.cos(p)*l*.97,r+Math.sin(p)*l*.97],rotation:[p,U(t,-.08,.08),0],color:st.barkDark,jitter:.2,chunk:"log"})}let x=o?4:3;for(let g=0;g<x;g++){let p=U(t,-1.6,1.6),_=s+U(t,-a/2+.7,a/2-.7),S=Math.cos(p),y=Math.sin(p),R=U(t,-.4,.4),E=[_,f+S*l*.8,r+y*l*.8],I=[E[0]+R*.3,E[1]+S*.34+.06,E[2]+y*.34],v=[I[0]+R*.25+U(t,-.1,.1),I[1]+S*.24+.1,I[2]+y*.24+U(t,-.1,.1)];i.tube([E,I,v],[.13,.09,.055],6,{color:st.barkDark,jitter:.2,caps:!0,chunk:"stub"+g}),o&&i.cyl(1,6,{position:[v[0],v[1]+.005,v[2]],scale:[.05,.03,.05],color:st.wood,chunk:"stub"+g})}for(let g=0;g<(o?6:3);g++){let p=U(t,-.8,.8),_=s+U(t,-a/2+.5,a/2-.5);An(i,t,_,f+Math.cos(p)*l*.95,r+Math.sin(p)*l*.95,.2,{chunk:"log"})}if(o)for(let g=0;g<2;g++){let p=t()<.5?1:-1,_=s+U(t,-a/2+.8,a/2-.8);i.cyl(1,7,{position:[_,f+.05,r+p*l*.95],rotation:[p*.15,0,0],scale:[.13,.04,.11],color:13666890,jitter:.15,chunk:"log"})}$h(i,t,s,r,o?6:3,a/2-.3)}function Zv(i,t,e,n,s,r,o){let a=o?13:9;for(let l=0;l<a;l++){let c=l/(a-1),d=U(t,1.3,2.4),h=.045+c*.62;i.box(d,.07,U(t,.22,.3),{position:[s+U(t,-n/2+.7,n/2-.7),h,r+U(t,-.35,.35)],rotation:[U(t,-.12,.12),U(t,-.45,.45),U(t,-.2,.2)*(1+c)],color:t()<.6?st.plank:st.plankDark,jitter:.25,chunk:"plank"+l})}for(let l=0;l<3;l++){let c=s+U(t,-n/2+.5,n/2-.5),d=U(t,.9,1.25)*(t()<.5?1:-1);i.box(.7,.06,.24,{position:[c,.42,r+U(t,-.3,.3)],rotation:[0,U(t,-.3,.3),d],color:st.plankDark,jitter:.25,chunk:"snap"+l}),i.cone(.06,.16,4,{position:[c+Math.cos(d)*.35*Math.sign(d),.42+Math.abs(Math.sin(d))*.36,r],rotation:[0,0,d-Yt/2*Math.sign(d)],color:st.plank,chunk:"snap"+l})}for(let l=0;l<(o?8:4);l++)i.box(U(t,.12,.3),.025,.04,{position:[s+U(t,-n/2+.3,n/2-.3),.02,r+U(t,-.6,.6)],rotation:[0,U(t,0,Yt),0],color:st.wood,jitter:.2,chunk:"splinter"});i.add(Ut("torus",.25,5,10),{position:[s+U(t,-n/3,n/3),.5,r+U(t,-.2,.2)],rotation:[Yt/2+U(t,-.4,.4),0,U(t,0,Yt)],scale:.2,color:st.rope,jitter:.15,chunk:"rope"})}function Jv(i,t,e,n,s,r,o){let a=Math.round(n/ui);for(let l=0;l<a;l++){let c=s-n/2+ui*(l+.5)+U(t,-.15,.15),d=r+U(t,-.12,.12),h=En(t,Of),u=[U(t,0,Yt),U(t,0,Yt),U(t,0,Yt)],f=U(t,.88,1),m=U(t,.55,.62),x=U(t,.7,.85);i.add(Ut(h),{position:[c,.38,d],rotation:u,scale:[f,m,x],color:st.rock,jitter:.22,chunk:"rock"+l}),i.add(Ut(h),{position:[c,.38+m*.42,d],rotation:u,scale:[f*.9,m*.42,x*.9],color:st.moss,jitter:.25,chunk:"rock"+l});let g=o?3:2;for(let p=0;p<g;p++){let _=U(t,0,Xe),S=U(t,.62,.85),y=U(t,.18,.34);i.add(Ut(En(t,Of)),{position:[c+Math.cos(_)*S,y*.55,d+Math.sin(_)*S*.7],rotation:[U(t,0,Yt),U(t,0,Yt),0],scale:[y*1.2,y*.8,y],color:t()<.5?st.rock:st.rockDark,jitter:.22,chunk:"sat"+l+p})}if(o)for(let p=0;p<4;p++){let _=U(t,0,Xe),S=U(t,.7,1);i.add(Ut("ico",0),{position:[c+Math.cos(_)*S,.05,d+Math.sin(_)*S*.7],scale:U(t,.05,.09),color:st.rockDark,jitter:.2,chunk:"pebble"})}o&&(go(i,t,c+U(t,-.8,.8),d+U(t,.4,.7)),go(i,t,c+U(t,-.8,.8),d-U(t,.4,.7)))}}function $v(i,t,e,n,s,r,o){let a=n-.12,l=e.depth;i.box(a,.16,l,{position:[s,.08,r],color:st.stoneDark,jitter:.14,chunk:"plate"}),i.box(a-.16,.03,l-.16,{position:[s,.17,r],color:st.stone,jitter:.1,chunk:"plate"});let c=[-.24,.24];for(let f of c)i.box(a-.4,.02,.08,{position:[s,.19,r+f],color:st.soot,chunk:"plate"});let d=3,h=Math.round(n/ui),u=o?6:5;for(let f=0;f<h;f++)for(let m=0;m<d;m++)for(let x=0;x<c.length;x++){let g=s-n/2+ui*f+ui*(m+.5)/d+(x?.12:-.12),p=r+c[x],_=U(t,.5,.6),S=[U(t,-.08,.08),0,U(t,-.08,.08)],y="spike"+f+m+x;i.cyl(1,6,{position:[g,.21,p],scale:[.12,.06,.12],color:st.rust,jitter:.15,chunk:y}),i.cone(.115,_,u,{position:[g,.21+_/2,p],rotation:S,color:st.iron,jitter:.12,chunk:y}),i.cone(.05,.24,u,{position:[g+S[2]*-_*.55,.21+_-.06,p+S[0]*_*.55],rotation:S,color:st.steel,chunk:y})}if(o)for(let f=0;f<h*2;f++)i.box(U(t,.1,.2),.012,U(t,.1,.16),{position:[s+U(t,-n/2+.2,n/2-.2),.195,r+U(t,-.35,.35)],rotation:[0,U(t,0,Yt),0],color:st.bone,jitter:.2,chunk:"plate"})}function Kv(i,t,e,n,s,r,o,a,l){let c=r+.4,d=s.depth,h=0;for(let f of[-1,1]){let m=a+f*(d/2-.16),x=o-c/2;for(;x<o+c/2-.05;){let g=Math.min(U(n,.7,1.15),o+c/2-x);i.box(g-.04,U(n,.24,.3),.32,{position:[x+g/2,.13,m+U(n,-.015,.015)],color:En(n,Xl),jitter:.16,chunk:"curb"+h++}),x+=g}}for(let f of[-1,1])i.box(.32,.27,d-.32,{position:[o+f*(c/2-.16),.135,a],color:st.stoneDark,jitter:.16,chunk:"curb"+h++});i.box(c-.5,.08,d-.5,{position:[o,-.01,a],color:st.soot,chunk:"pit"});for(let f=0;f<Math.round(l?r*1.5:r*.7);f++)i.add(Ut("ico",0),{position:[o+U(n,-c/2+.5,c/2-.5),.06,a+U(n,-d/2+.4,d/2-.4)],rotation:[U(n,0,Yt),U(n,0,Yt),0],scale:U(n,.08,.16),color:st.coal,jitter:.3,chunk:"pit"});if(l)for(let f=0;f<3;f++)An(i,n,o+U(n,-c/2+.4,c/2-.4),.28,a+(n()<.5?1:-1)*(d/2-.16),.14,{chunk:"curb"});Wf(t,n,o,.05,a,Math.round(l?r*2.5:r*1.2),c/2-.5,d/2-.45),t.halo(o,.035,a,c*.72,d*1.25,Pi.fireGround),t.halo(o,.75,a+.05,c*.62,1.5,Pi.fire,!0);let u=Math.max(2,Math.round(r/.75));for(let f=0;f<u;f++){let m=o-r/2+.4+(r-.8)*(u>1?f/(u-1):.5);mo(e,m+U(n,-.08,.08),.04,a+U(n,-.18,.18),U(n,.42,.55),U(n,.95,1.2),U(n,0,Yt))}if(l)for(let f=0;f<u-1;f++){let m=o-r/2+.75+(r-1.5)*(u>2?f/(u-2):.5);mo(e,m,.04,a+U(n,-.35,.35),U(n,.28,.38),U(n,.6,.85),U(n,0,Yt))}}function Qv(i,t,e,n,s,r,o,a,l){let c=Math.round(r/ui);for(let d=0;d<c;d++){let h=o-r/2+ui*(d+.5),u="brazier"+d,f=.62,m=U(n,0,Xe);for(let x=0;x<3;x++){let g=m+x*Xe/3,p=Math.cos(g),_=Math.sin(g);i.bone([h+p*.42,.02,a+_*.42],[h+p*.2,f,a+_*.2],.035,.03,{seg:5,color:st.ironDark,jitter:.12,chunk:u}),i.cyl(1,6,{position:[h+p*.42,.025,a+_*.42],scale:[.08,.05,.08],color:st.ironDark,chunk:u})}if(i.add(Ut("torus",.09,5,12),{position:[h,.3,a],scale:.33,rotation:[Yt/2,0,0],color:st.iron,jitter:.1,chunk:u}),i.add(Ut("torus",.09,5,12),{position:[h,f,a],scale:.28,rotation:[Yt/2,0,0],color:st.iron,jitter:.1,chunk:u}),i.cyl(.55,l?10:8,{position:[h,.66,a],scale:[.42,.26,.42],color:st.iron,jitter:.14,chunk:u}),i.add(Ut("torus",.08,5,l?14:10),{position:[h,.79,a],scale:.42,rotation:[Yt/2,0,0],color:st.ironLight,jitter:.1,chunk:u}),i.cyl(1,10,{position:[h,.77,a],scale:[.36,.04,.36],color:st.soot,chunk:u}),l)for(let x=0;x<6;x++){let g=x*Xe/6;i.sphere(.028,{position:[h+Math.cos(g)*.4,.7,a+Math.sin(g)*.4],color:st.ironLight,ws:5,hs:3,chunk:u})}Wf(t,n,h,.79,a,l?7:4,.22,.22),mo(e,h,.78,a,.34,U(n,.62,.72),U(n,0,Yt)),mo(e,h+U(n,-.12,.12),.78,a+U(n,-.1,.1),.24,U(n,.45,.55),U(n,0,Yt)),l&&mo(e,h+U(n,-.12,.12),.78,a+U(n,-.1,.1),.2,.42,U(n,0,Yt)),t.halo(h,.035,a,1.5,1.4,Pi.fireGround),t.halo(h,1,a+.02,1.3,1.2,Pi.fire,!0)}}function ty(i,t,e,n,s,r,o,a){let l=qv(n,t),c=l*(Zh+.4),d=a===2?9:7,h=[[c+l*.1,-.3,o+.15],[c,.6,o+.1],[c-l*.05,1.7,o],[c-l*.1,3,o-.05],[c-l*.05,4.4,o-.05],[c,5.6,o]];i.tube(h,[.78,.55,.48,.42,.38,.3],d,{color:st.bark,jitter:.25,caps:!0,chunk:"trunk"});for(let S=0;S<4;S++){let y=U(t,0,Xe),R=[c+Math.cos(y)*.35,.55,o+Math.sin(y)*.35],E=[c+Math.cos(y)*.9,.05,o+Math.sin(y)*.9],I=[c+Math.cos(y)*1.2,-.2,o+Math.sin(y)*1.2];i.tube([R,E,I],[.2,.12,.06],5,{color:st.barkDark,jitter:.2,chunk:"trunk"})}if(a)for(let S=0;S<3;S++)i.sphere(U(t,.1,.16),{position:[c-l*.42,U(t,.8,3.6),o+U(t,-.3,.3)],color:st.barkDark,ws:6,hs:4,chunk:"trunk"});An(i,t,c-l*.3,2.4,o+.2,.3,{chunk:"trunk"});let u=c-l*.2,f=-l*(s/2+.6),m=a?9:7,x=[],g=[];for(let S=0;S<m;S++){let y=S/(m-1),R=.3-.15*y;x.push([u+(f-u)*y,1.25+R+.035*Math.sin(y*7+1)+(S===0?.25:0),o+.12*Math.sin(y*5.2)*(1-y*.4)]),g.push(R*U(t,.92,1.08))}i.tube(x,g,d-2,{color:st.bark,jitter:.25,caps:!0,chunk:"limb"});let p=a?6:4;for(let S=0;S<p;S++){let y=(S+.5)/p,R=Math.min(m-1,Math.round(y*(m-1))),E=x[R],I=U(t,-.6,.6),v=U(t,-.4,.4),A=U(t,.45,.75),L=[E[0]+v*A,E[1]+A*.9,E[2]+I*A];i.tube([[E[0],E[1]+g[R]*.6,E[2]],[E[0]+v*A*.5,E[1]+A*.5,E[2]+I*A*.5],L],[.07,.05,.025],5,{color:st.barkDark,jitter:.2,chunk:"twig"+S});let b=a?3:2;for(let w=0;w<b;w++)ql(i,t,L[0]+U(t,-.3,.3),L[1]+U(t,-.1,.2),L[2]+U(t,-.3,.3),U(t,.3,.45),{chunk:"twig"+S,sway:.5});for(let w=0;w<(a?3:1);w++)Xv(i,t,L[0]+U(t,-.4,.4),L[1]+U(t,-.25,.1),L[2]+U(t,-.4,.4),U(t,.4,.6),{chunk:"twig"+S})}for(let S=1;S<m-1;S+=2){let y=x[S];An(i,t,y[0],y[1]+g[S]*.8,y[2],.18,{chunk:"limb"})}let _=a?5:3;for(let S=0;S<_;S++){let y=U(t,.15,.95),R=Math.round(y*(m-1)),E=x[R],I=U(t,.18,.3),v=E[0]+U(t,-.2,.2),A=E[2]+U(t,-.15,.15);i.cyl(1,4,{position:[v,1.25-I/2+.05,A],scale:[.02,I,.02],color:st.leafDeep,sway:L=>(1-L)*1.2,chunk:"vine"+S}),i.box(.12,.01,.06,{position:[v,1.25-I+.05,A],rotation:[0,U(t,0,Yt),U(t,-.4,.4)],color:st.leafLight,sway:1.2,chunk:"vine"+S})}for(let S=0;S<(a?4:2);S++)ql(i,t,c+U(t,-.9,.9),5.3+U(t,-.3,.5),o+U(t,-.9,.9),U(t,.9,1.3),{chunk:"canopy",sway:.3,detail:a?1:0})}function ey(i,t,e,n,s,r,o){let a=e.height,l=Zh+.35;for(let f of[-1,1]){let m=f*Zh,x="post"+f;i.box(.92,.2,1.1,{position:[m,.1,r],color:st.stoneDark,jitter:.12,chunk:x}),i.box(.7,a-.35,.86,{position:[m,.2+(a-.35)/2,r],color:st.stone,jitter:.14,chunk:x}),i.box(.82,.15,.98,{position:[m,a-.075,r],color:st.stoneLight,jitter:.1,chunk:x});for(let g=0;g<2;g++)i.box(.02,.5,.9,{position:[m+(g?.36:-.36),.7,r],color:st.groove,chunk:x});o&&An(i,t,m+U(t,-.2,.2),.2,r+.5,.18,{chunk:x})}for(let f=0;f<3;f++)i.box(l*2/3,.55,1,{position:[(f-1)*l*2/3,a+.275,r],color:st.stoneWarm,jitter:.12,chunk:"beam"+f});i.box(l*2+.3,.12,1.12,{position:[0,a+.61,r],color:st.stoneLight,jitter:.1,chunk:"cornice"});for(let f of[1,-1]){let m=r+f*.5;i.box(l*2-.4,.05,.03,{position:[0,a+.46,m],color:st.groove,chunk:"beam"});let x=9;for(let p=0;p<x;p++)i.box(.2,.13,.06,{position:[-l+.6+(l*2-1.2)*p/(x-1),a+.08,m+f*.02],color:st.stoneLight,jitter:.1,chunk:"beam"});let g=o?7:5;for(let p=0;p<g;p++){let _=-l+.9+(l*2-1.8)*p/(g-1);p===Math.floor(g/2)?i.cyl(1,12,{position:[_,a+.3,m+f*.02],rotation:[Yt/2,0,0],scale:[.2,.06,.2],color:st.gold,jitter:.1,chunk:"beam"}):i.box(.16,.16,.04,{position:[_,a+.3,m+f*.01],rotation:[0,0,p%2?Yt/4:0],color:p%2?st.goldDark:st.groove,chunk:"beam"})}}let c=.42,d=4,h=a+.67,u=0;for(let f=0;f<d;f++){let m=h+c*(f+.5),x=-l+(f%2?.35:0);for(f%2&&i.box(.7,c-.03,.9,{position:[-l,m,r],color:En(t,Xl),jitter:.16,chunk:"wall"+u++});x<l-.05;){let g=Math.min(U(t,.8,1.25),l-x);f===d-1&&t()<.35||i.box(g-.04,c-.03-(f===d-1?U(t,0,.18):0),.9,{position:[x+g/2,m-(f===d-1?.05:0),r+U(t,-.025,.025)],color:En(t,Xl),jitter:.16,chunk:"wall"+u++}),x+=g}}for(let f=0;f<(o?5:3);f++)An(i,t,U(t,-l+.5,l-.5),a+.68,r+U(t,-.3,.3),.22,{chunk:"beam"});for(let f=0;f<(o?4:2);f++){let m=U(t,-l+.6,l-.6),x=U(t,.5,1),g=h+c*d-.2;i.cyl(1,4,{position:[m,g-x/2,r+.5],scale:[.03,x,.03],color:st.leafDeep,sway:p=>(1-p)*.8,chunk:"vine"+f});for(let p=0;p<3;p++)i.box(.14,.01,.08,{position:[m+U(t,-.08,.08),g-x*(p+1)/3.2,r+.52],rotation:[0,U(t,0,Yt),U(t,-.5,.5)],color:En(t,Yl),sway:.9,chunk:"vine"+f})}}function ny(i,t,e,n,s,r,o){let a=e.height,l=o?10:8;i.box(1.1,.25,1.1,{position:[s,.125,r],color:st.stoneDark,jitter:.12,chunk:"base"}),i.box(.9,.15,.9,{position:[s,.325,r],color:st.stone,jitter:.12,chunk:"base"}),i.cyl(1,l,{position:[s,.46,r],scale:[.52,.12,.52],color:st.stoneLight,jitter:.1,chunk:"base"});let c=.52,d=a-.5,h=3,u=(d-c)/h;for(let x=0;x<h;x++){let g=c+u*(x+.5),p=.42-.02*x;i.cyl(1,l,{position:[s+U(t,-.02,.02),g,r+U(t,-.02,.02)],rotation:[0,U(t,0,.3),0],scale:[p,u,p],color:x%2?st.stone:st.stoneWarm,jitter:.14,chunk:"drum"+x})}let f=o?8:6;for(let x=0;x<f;x++){let g=x*Xe/f,p=.41;i.box(.07,d-c-.3,.09,{position:[s+Math.cos(g)*p,(c+d)/2,r+Math.sin(g)*p],rotation:[0,-g,0],color:st.stoneLight,jitter:.1,chunk:"drum"+x%h})}let m=c+(d-c)*.55;i.cyl(1,l,{position:[s,m,r],scale:[.45,.2,.45],color:st.ochre,jitter:.1,chunk:"drum1"});for(let x=0;x<6;x++){let g=x*Xe/6;i.box(.09,.09,.06,{position:[s+Math.cos(g)*.46,m,r+Math.sin(g)*.46],rotation:[0,-g,0],color:st.gold,chunk:"drum1"})}i.cyl(.62,l,{position:[s,a-.36,r],scale:[.62,.32,.62],color:st.stoneLight,jitter:.12,chunk:"cap"}),i.box(1.2,.2,1.2,{position:[s,a-.1,r],color:st.stoneWarm,jitter:.12,chunk:"cap"});for(let x of[-1,1])i.box(.16,.16,.04,{position:[s+x*.35,a-.1,r+.6],color:st.goldDark,chunk:"cap"});if(An(i,t,s+U(t,-.3,.3),.26,r+.45,.2,{chunk:"base"}),o){An(i,t,s-.3,a-.12,r-.2,.22,{chunk:"cap"});for(let x=0;x<3;x++){let g=U(t,0,Xe);i.add(Ut("dodeca"),{position:[s+Math.cos(g)*U(t,.65,.85),.07,r+Math.sin(g)*U(t,.6,.9)],rotation:[U(t,0,Yt),U(t,0,Yt),0],scale:U(t,.07,.13),color:st.stone,jitter:.2,chunk:"chip"})}}}function iy(i,t,e,n,s,r,o,a){let l="stone";i.box(1.3,.34,1.3,{position:[r,.17,o],color:st.stoneDark,jitter:.12,chunk:"plinth"}),i.box(1.05,.2,1.05,{position:[r,.44,o],color:st.stone,jitter:.12,chunk:"plinth"});for(let h=-1;h<=1;h++)i.box(.16,.16,.04,{position:[r+h*.36,.2,o+.66],rotation:[0,0,h?Yt/4:0],color:h?st.goldDark:st.gold,chunk:"plinth"});let c=(h,u)=>i.add(h,{color:st.stoneWarm,jitter:.12,chunk:u.chunk||"body",...u});for(let h of[-1,1])i.box(.28,.14,.5,{position:[r+h*.38,.61,o+.32],color:st.stoneWarm,jitter:.1,chunk:"leg"+h}),i.bone([r+h*.3,.95,o-.05],[r+h*.4,.86,o+.36],.16,.14,{color:st.stoneWarm,jitter:.1,chunk:"leg"+h}),i.bone([r+h*.4,.86,o+.36],[r+h*.38,.62,o+.36],.13,.12,{color:st.stoneWarm,jitter:.1,chunk:"leg"+h}),i.sphere(.19,{position:[r+h*.4,.86,o+.38],color:st.stoneWarm,jitter:.1,chunk:"leg"+h});c(Ut("sphere",9,7),{position:[r,1.25,o],scale:[.5,.55,.42]}),c(Ut("sphere",8,6),{position:[r,1.05,o+.12],scale:[.42,.36,.34],color:st.stoneLight});for(let h of[-1,1]){i.sphere(.2,{position:[r+h*.5,1.55,o-.02],color:st.stoneWarm,jitter:.1,chunk:"arm"+h}),i.bone([r+h*.52,1.55,o],[r+h*.62,1.15,o+.28],.13,.11,{color:st.stoneWarm,jitter:.1,chunk:"arm"+h}),i.bone([r+h*.62,1.15,o+.28],[r+h*.5,.92,o+.5],.11,.09,{color:st.stoneWarm,jitter:.1,chunk:"arm"+h}),i.sphere(.15,{position:[r+h*.48,.9,o+.52],color:st.stoneWarm,jitter:.1,chunk:"arm"+h});for(let u=0;u<3;u++)i.box(.06,.05,.16,{position:[r+h*(.4+u*.07),.86,o+.64],color:st.stoneLight,chunk:"arm"+h})}i.add(Ut("torus",.09,5,12),{position:[r,1.5,o+.18],rotation:[1.25,0,0],scale:.36,color:st.gold,jitter:.1,chunk:"body"}),i.box(.14,.18,.05,{position:[r,1.34,o+.4],color:st.gold,chunk:"body"}),i.cyl(1,7,{position:[r,1.76,o],scale:[.16,.22,.16],color:st.stoneWarm,jitter:.1,chunk:"head"}),c(Ut("sphere",10,8),{position:[r,2.05,o+.02],scale:[.42,.38,.4],chunk:"head"}),i.box(.66,.13,.28,{position:[r,2.19,o+.28],rotation:[-.3,0,0],color:st.stoneDark,jitter:.1,chunk:"head"}),c(Ut("sphere",8,6),{position:[r,1.95,o+.32],scale:[.27,.17,.22],color:st.stoneLight,chunk:"head"}),i.box(.36,.1,.12,{position:[r,1.89,o+.44],color:st.soot,chunk:"head"});for(let h of[-1,1])i.cone(.03,.11,4,{position:[r+h*.12,1.86,o+.48],rotation:[Yt,0,0],color:st.bone,chunk:"head"}),i.cone(.022,.07,4,{position:[r+h*.05,1.885,o+.49],color:st.bone,chunk:"head"}),i.sphere(.1,{position:[r+h*.16,2.12,o+.33],color:st.soot,ws:7,hs:5,chunk:"head"}),i.cyl(1,8,{position:[r+h*.44,2.08,o],rotation:[0,0,Yt/2],scale:[.14,.06,.14],color:st.stoneWarm,jitter:.1,chunk:"head"}),t.sphere(.065,{position:[r+h*.16,2.12,o+.37],color:Pi.eye,ws:7,hs:5,chunk:"eye"}),t.halo(r+h*.16,2.12,o+.43,.26,.26,Pi.eyeHalo,!0);i.cyl(.95,10,{position:[r,2.33,o],scale:[.44,.12,.44],color:st.gold,jitter:.1,chunk:"crown"});let d=a?7:5;for(let h=0;h<d;h++){let u=h/(d-1)-.5,f=u*1.5,m=.36+.14*(1-Math.abs(u)*2);i.cone(.055,m,4,{position:[r+Math.sin(f)*.36,2.38+Math.cos(f)*m*.5,o-.05-Math.abs(u)*.05],rotation:[0,0,-f],color:h%2?st.teal:st.gold,jitter:.1,chunk:"crown"})}if(t.sphere(.06,{position:[r,2.36,o+.45],color:Pi.gem,ws:7,hs:5,chunk:"gem"}),i.cyl(1,8,{position:[r,2.36,o+.44],rotation:[Yt/2,0,0],scale:[.11,.05,.11],color:st.goldDark,chunk:"crown"}),An(i,e,r-.42,1.68,o-.05,.18,{chunk:"arm-1"}),An(i,e,r+U(e,-.4,.4),.55,o-.45,.2,{chunk:"plinth"}),a)for(let h=0;h<3;h++)i.box(U(e,.1,.18),.012,U(e,.08,.14),{position:[r+U(e,-.6,.6),.55,o+U(e,-.55,.55)],rotation:[0,U(e,0,Yt),0],color:En(e,[st.litter,st.mossDark]),chunk:"plinth"})}function sy(i,t,e,n,s,r,o){let a=e.height,l=n/2,c=e.depth/2,d=0,h=(x,g,p,_,S,y,R,E)=>{i.box(_,S,y,{position:[x,g,p],rotation:[U(t,-R,R),U(t,0,Yt),U(t,-R,R)],color:E||En(t,Xl),jitter:.2,chunk:"blk"+d++})},u=Math.round(n*(o?3:2.2));for(let x=0;x<u;x++){let g=U(t,.5,.85);h(s+U(t,-l+.3,l-.3),g*.3,r+U(t,-c+.3,c-.3),g*U(t,.9,1.5),g*.7,g*U(t,.9,1.4),.3)}let f=Math.round(n*1.6);for(let x=0;x<f;x++){let g=s-l+.45+(n-.9)*(f>1?x/(f-1):.5)+U(t,-.15,.15),p=U(t,.55,.8);h(g,U(t,.85,1.25),r+U(t,-.3,.3),p*1.25,p*.85,p*U(t,.9,1.3),.25)}let m=Math.max(2,Math.round(n*.9));for(let x=0;x<m;x++){let g=m>1?x/(m-1):.5,p=s+(g-.5)*(n-1.4),_=1-Math.abs(g-.5)*1.2;h(p,a-.55-(1-_)*.5,r+U(t,-.25,.25),U(t,.55,.75),U(t,.5,.7),U(t,.55,.75),.35)}h(s+U(t,-.2,.2),a-.25,r,.5,.5,.5,.5);for(let x=0;x<2;x++)i.cyl(1,9,{position:[s+U(t,-l+.5,l-.5),U(t,.35,1.5),r+U(t,-.4,.4)],rotation:[U(t,.8,1.6),U(t,0,Yt),U(t,-.3,.3)],scale:[.33,.55,.33],color:st.stoneLight,jitter:.15,chunk:"drum"+x});i.box(1.4,.22,1,{position:[s+U(t,-.4,.4),1.55,r+c-.2],rotation:[-U(t,.5,.75),U(t,-.25,.25),U(t,-.15,.15)],color:st.stoneWarm,jitter:.15,chunk:"slab"}),i.box(.18,.18,.05,{position:[s+U(t,-.5,.5),U(t,.8,1.3),r+c-.05],rotation:[0,0,U(t,0,Yt)],color:st.gold,chunk:"blk0"});for(let x=0;x<(o?5:3);x++)An(i,t,s+U(t,-l+.4,l-.4),U(t,.5,1.5),r+U(t,-c+.2,c-.2),.2,{chunk:"blk"+Math.floor(t()*d)});if(o)for(let x=0;x<3;x++)go(i,t,s+U(t,-l,l),r+(t()<.5?c+.15:-c-.15));for(let x=0;x<(o?8:4);x++)i.add(Ut("ico",0),{position:[s+U(t,-l-.2,l+.2),.06,r+(t()<.5?1:-1)*U(t,c,c+.5)],rotation:[U(t,0,Yt),0,U(t,0,Yt)],scale:U(t,.06,.13),color:st.stoneDark,jitter:.2,chunk:"pebble"})}function ry(i,t,e,n,s,r,o){let a=o===2?10:8,l=[],c=[],d=[-.3,.25,.9,1.8,2.8,3.8,4.8,5.7],h=[.9,.62,.5,.46,.43,.4,.37,.3];for(let m=0;m<d.length;m++)l.push([s+U(t,-.05,.05),d[m],r+U(t,-.05,.05)]),c.push(h[m]*U(t,.95,1.05));i.tube(l,c,a,{color:st.bark,jitter:.22,caps:!0,chunk:"trunk"});let u=o?6:4;for(let m=0;m<u;m++){let x=m/u*Xe+U(t,-.25,.25),g=Math.cos(x)*.75,p=Math.sin(x);i.tube([[s+g*.4,1.15,r+p*.4],[s+g*.85,.35,r+p*.9],[s+g*1.15,-.02,r+p*1.25],[s+g*1.3,-.25,r+p*1.45]],[.14,.24,.2,.1],6,{color:m%2?st.bark:st.barkLight,jitter:.22,chunk:"root"+m})}for(let m=0;m<(o?9:6);m++){let x=U(t,0,Xe),g=U(t,1.2,4.6),p=U(t,1,2.2),_=.45-g/6*.1;i.box(.08,p,.1,{position:[s+Math.cos(x)*_,g,r+Math.sin(x)*_],rotation:[0,-x,U(t,-.06,.06)],color:st.barkDark,jitter:.2,chunk:"trunk"})}for(let m=0;m<3;m++){let x=U(t,0,Xe);i.sphere(U(t,.1,.16),{position:[s+Math.cos(x)*.42,U(t,1.4,3.6),r+Math.sin(x)*.42],color:st.barkDark,ws:6,hs:4,chunk:"trunk"})}for(let m=0;m<(o?5:3);m++){let x=U(t,.5,2);An(i,t,s+Math.cos(x)*.46,U(t,.3,2.2),r+Math.sin(x)*.46,.24,{chunk:"trunk"})}An(i,t,s+.5,.15,r+.9,.3,{chunk:"root0"});let f=o?4:3;for(let m=0;m<f;m++){let x=m/f*Xe+U(t,-.4,.4),g=U(t,4.2,5),p=[s+Math.cos(x)*1.6,g+.9,r+Math.sin(x)*1.6];i.tube([[s,g,r],[s+Math.cos(x)*.8,g+.45,r+Math.sin(x)*.8],p],[.17,.11,.05],5,{color:st.barkDark,jitter:.2,chunk:"branch"+m});for(let _=0;_<(o?3:2);_++)ql(i,t,p[0]+U(t,-.5,.5),p[1]+U(t,-.2,.4),p[2]+U(t,-.5,.5),U(t,.8,1.15),{chunk:"branch"+m,sway:.35,detail:o?1:0})}for(let m=0;m<(o?5:3);m++)ql(i,t,s+U(t,-.8,.8),5.6+U(t,-.2,.8),r+U(t,-.8,.8),U(t,1,1.4),{chunk:"crown",sway:.3,detail:o?1:0});for(let m=0;m<(o?4:2);m++){let x=U(t,0,Xe),g=U(t,.7,1.4),p=U(t,.6,1.1),_=4.5,S=s+Math.cos(x)*g,y=r+Math.sin(x)*g;i.cyl(1,4,{position:[S,_-p/2,y],scale:[.03,p,.03],color:st.leafDeep,sway:R=>(1-R)*1,chunk:"vine"+m});for(let R=0;R<3;R++)i.box(.16,.01,.09,{position:[S+U(t,-.1,.1),_-p*(R+1)/3.1,y+U(t,-.1,.1)],rotation:[0,U(t,0,Yt),U(t,-.5,.5)],color:En(t,Yl),sway:1,chunk:"vine"+m})}o&&(go(i,t,s+U(t,-.8,.8),r+U(t,1.2,1.6)),$h(i,t,s,r,5,.9))}function Xf(i,t,{rng:e,quality:n}={}){if(i.type==="gap")return null;Vv(),e=e||Math.random;let s=n==="high"?2:n==="medium"?1:0,r=i.lanes.length*ui,o=(i.vMin+i.vMax)*.5,a=-i.u,l=new Wl,c=new Wl,d=new Un;switch(i.type){case"root":Yv(l,e,i,r,o,a,s);break;case"log":i.plank?Zv(l,e,i,r,o,a,s):jv(l,e,i,r,o,a,s);break;case"boulder":Jv(l,e,i,r,o,a,s);break;case"spikes":$v(l,e,i,r,o,a,s);break;case"fire":Kv(l,c,d,e,i,r,o,a,s);break;case"brazier":Qv(l,c,d,e,i,r,o,a,s);break;case"branch":ty(l,e,i,t,r,o,a,s);break;case"lintel":ey(l,e,i,r,o,a,s);break;case"pillar":ny(l,e,i,r,o,a,s);break;case"statue":iy(l,c,e,i,r,o,a,s);break;case"rubble":sy(l,e,i,r,o,a,s);break;case"trunk":ry(l,e,i,r,o,a,s);break;default:l.box(r,i.height,i.depth,{position:[o,i.height/2,a],color:16711935,chunk:"x"})}let h=new Ne;h.name="obstacle:"+i.type,h.userData.obstacle={type:i.type,cx:o,z:a,height:i.height,action:i.action};let u=l.toMesh(Jh,!0);u&&h.add(u);let f=c.toMesh(Hf,!1);f&&(f.userData.glow=!0,h.add(f));let m=d.build();if(m){let x=new te(m,Gf);x.castShadow=!1,x.receiveShadow=!1,x.userData.flame=!0,h.add(x)}return h}var zf=1.05,oy=14,Vf=new en,Gl=new F,po=new F;function Kh(i){if(!i||i.userData.smashed)return;i.userData.smashed=!0;let t=i.userData.obstacle||{cx:0,z:0,action:"jump"},e=performance.now();i.traverse(n=>{n.isMesh&&(n.userData.chunks&&!n.userData.glow?ay(n,t,e):n.visible=!1)})}function ay(i,t,e){let{ranges:n,centroids:s,count:r}=i.userData.chunks,o=i.geometry.attributes.position,a=new Float32Array(r*3),l=new Float32Array(r*3),c=new Float32Array(r),d=t.action==="dodge";for(let h=0;h<r;h++){let u=s[h*3]-t.cx,f=s[h*3+1],m=Math.sign(u||Math.random()-.5);a[h*3]=u*2.2+m*(.6+Math.random()*1.8),a[h*3+1]=1.2+Math.random()*2.8+(d?Math.min(f,3)*.5:0),a[h*3+2]=-(2.5+Math.random()*3.5+Math.min(f,4)*(d?2.2:1.2)),po.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),l[h*3]=po.x,l[h*3+1]=po.y,l[h*3+2]=po.z,c[h]=3+Math.random()*7}i.userData.smash={t0:e,orig:o.array.slice(),vel:a,axis:l,spin:c,ranges:n,centroids:s},i.frustumCulled=!1,i.castShadow=!1,i.onBeforeRender=ly}function ly(){let i=this.userData.smash,t=(performance.now()-i.t0)*.001;if(t>=zf){this.visible=!1,delete this.onBeforeRender;return}let e=this.geometry.attributes.position,n=e.array,s=i.orig,r=i.ranges,o=i.centroids,a=-.5*oy*t*t,l=Math.max(0,t-.35),c=-l*l*5.5,d=Math.min(1,Math.max(0,(t-.4)/(zf-.4))),h=1-d*d*.85,u=-1,f=0,m=0,x=0,g=0,p=0,_=0;for(let S=0,y=r.length;S<y;S+=3){let R=r[S],E=r[S+1],I=r[S+2];I!==u&&(u=I,g=o[I*3],p=o[I*3+1],_=o[I*3+2],f=g+i.vel[I*3]*t,m=p+i.vel[I*3+1]*t+a+c,x=_+i.vel[I*3+2]*t,Vf.setFromAxisAngle(po.set(i.axis[I*3],i.axis[I*3+1],i.axis[I*3+2]),i.spin[I]*t));for(let v=R*3,A=(R+E)*3;v<A;v+=3)Gl.set(s[v]-g,s[v+1]-p,s[v+2]-_).applyQuaternion(Vf).multiplyScalar(h),n[v]=Gl.x+f,n[v+1]=Gl.y+m,n[v+2]=Gl.z+x}e.needsUpdate=!0}var qf=600;function Yf(i,t){let e=new bi(.36,.36,.07,14),n=new bi(.27,.27,.12,12),s=li([e,n],!1);s.rotateX(Math.PI/2),e.dispose(),n.dispose();let r=df(new yn({color:16762668,emissive:16751872,emissiveIntensity:.55,metalness:.85,roughness:.25}),3.2),o=new Rr(s,r,qf);o.instanceMatrix.setUsage(ri),o.frustumCulled=!1,o.castShadow=!1,o.count=0,i.add(o);let a=[],l=new Kt,c=new en,d=new F(1,1,1),h=new F,u=new F;function f(k){o.setMatrixAt(k.slot,l.compose(k.pos,c,d))}function m(k){let T=a.pop();T!==k&&(a[k.slot]=T,T.slot=k.slot,f(T)),k.slot=-1,o.count=a.length,o.instanceMatrix.needsUpdate=!0}let x=["magnet","shield","boost"],g={magnet:new Ti(.42,.14,8,16,Math.PI),shield:new Si(.5,1),boost:new Yn(.42,.9,5)},p={magnet:16731535,shield:5093631,boost:16761395},_={},S={};for(let k of x)_[k]=new yn({color:p[k],emissive:p[k],emissiveIntensity:.9,metalness:.4,roughness:.3}),S[k]=ao(p[k],2.2,1.4);let y=new wi(.85,16,12),R=[];function E(k){let T=new Ne,C=new te(g[k],_[k]);k==="magnet"&&(C.rotation.z=Math.PI);let B=new te(y,S[k]);return T.add(C,B),T.userData.core=C,T}function I(k){for(let T of k.coins){if(a.length>=qf)break;let C=t.worldPosition(k,T.u,T.v,T.y),B={slot:a.length,piece:k,data:T,pos:C,pulled:!1};a.push(B),f(B)}for(let T of k.powerups){let C=E(T.type),B=t.worldPosition(k,T.u,T.v,T.y);C.position.copy(B),i.add(C),R.push({rec:T,piece:k,obj:C,core:C.userData.core,baseY:B.y})}o.count=a.length,o.instanceMatrix.needsUpdate=!0}function v(k){for(let T=a.length-1;T>=0;T--)a[T].piece===k&&m(a[T]);for(let T=R.length-1;T>=0;T--)R[T].piece===k&&(i.remove(R[T].obj),R.splice(T,1))}function A(){a.length=0,o.count=0,o.instanceMatrix.needsUpdate=!0;for(let k of R)i.remove(k.obj);R.length=0}let L={coins:0,powerups:[],coinPositions:[]},b=Array.from({length:6},()=>new F);function w(k,T){L.coins=0,L.powerups.length=0,L.coinPositions.length=0;let C=T.playerPos,B=C.y-.35,Q=C.y+T.hitboxHeight+.3,ot=!1;for(let ft=a.length-1;ft>=0;ft--){let G=a[ft];u.subVectors(G.pos,C);let N=Math.hypot(u.x,u.z);T.magnet&&N<T.magnetRadius&&u.y>-2&&u.y<4&&(h.copy(C),h.y+=1,G.pos.lerp(h,1-Math.exp(-k*9)),G.pulled=!0,f(G),ot=!0,u.subVectors(G.pos,C)),(Math.abs(u.x)<.95&&Math.abs(u.z)<.95&&G.pos.y>B&&G.pos.y<Q||G.pulled&&u.length()<1.2)&&(G.data.taken=!0,L.coinPositions.length<b.length&&L.coinPositions.push(b[L.coinPositions.length].copy(G.pos)),m(G),L.coins++)}ot&&(o.instanceMatrix.needsUpdate=!0);for(let ft=R.length-1;ft>=0;ft--){let G=R[ft];G.obj.rotation.y+=k*2.2,G.obj.position.y=G.baseY+Math.sin(T.time*3+ft)*.12,G.core.rotation.x+=k*.7,u.subVectors(G.obj.position,C),(Math.abs(u.x)<1.1&&Math.abs(u.z)<1.1&&u.y>-.5&&u.y<2.4||T.magnet&&Math.hypot(u.x,u.z)<2.6&&Math.abs(u.y)<3)&&(G.rec.taken=!0,L.powerups.push(G.rec.type),i.remove(G.obj),R.splice(ft,1))}return L}function z(){let k=new Ne;for(let T of x){let C=E(T);C.visible=!1,k.add(C)}return k}return{addPiece:I,removePiece:v,update:w,reset:A,warmupGroup:z,mesh:o,get count(){return a.length}}}var cy=1,Qh=2,hy=`
  attribute float aSize; attribute float aAlpha; attribute float aRot; attribute float aShape; attribute vec3 aColor;
  varying float vAlpha; varying float vRot; varying float vShape; varying vec3 vColor;
  uniform float uScale;
  void main(){
    vColor = aColor; vAlpha = aAlpha; vRot = aRot; vShape = aShape;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(aSize * uScale / max(0.5, -mv.z), 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`,uy=`
  varying float vAlpha; varying float vRot; varying float vShape; varying vec3 vColor;
  uniform float uAdditive;
  void main(){
    vec2 p = gl_PointCoord - 0.5;
    float c = cos(vRot), s = sin(vRot);
    p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
    float a;
    if (vShape < 0.5) { a = smoothstep(0.5, 0.12, length(p)); }
    else if (vShape < 1.5) { float d = length(p * vec2(1.0, 2.2)); a = smoothstep(0.5, 0.42, d); a *= 0.7 + 0.3 * smoothstep(0.0, 0.5, p.y + 0.5); }
    else { a = step(abs(p.x), 0.32) * step(abs(p.y), 0.26); }
    a *= vAlpha;
    if (a < 0.01) discard;
    vec3 col = vColor;
    if (uAdditive > 0.5) { gl_FragColor = vec4(col * a, a); } else { gl_FragColor = vec4(col, a); }
  }`,jl=class{constructor(t,e,n){this.max=e,this.count=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.rotV=new Float32Array(e),this.shape=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.baseSize=new Float32Array(e),this.grow=new Float32Array(e),this.fadeIn=new Float32Array(e);let s=new Ae;s.setAttribute("position",new ce(this.pos,3).setUsage(ri)),s.setAttribute("aColor",new ce(this.col,3).setUsage(ri)),s.setAttribute("aSize",new ce(this.size,1).setUsage(ri)),s.setAttribute("aAlpha",new ce(this.alpha,1).setUsage(ri)),s.setAttribute("aRot",new ce(this.rot,1).setUsage(ri)),s.setAttribute("aShape",new ce(this.shape,1).setUsage(ri)),s.setDrawRange(0,0),this.geo=s,this.mat=new _e({uniforms:{uScale:{value:300},uAdditive:{value:n?1:0}},vertexShader:hy,fragmentShader:uy,transparent:!0,depthWrite:!1,blending:n?He:vi}),n&&(this.mat.premultipliedAlpha=!0),this.points=new Cr(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?20:10,t.add(this.points)}spawn(t,e,n,s,r,o,a,l,c,d,h,u){let f;this.count<this.max?f=this.count++:f=Math.random()*this.max|0;let m=f*3;this.pos[m]=t,this.pos[m+1]=e,this.pos[m+2]=n,this.vel[m]=s,this.vel[m+1]=r,this.vel[m+2]=o,this.col[m]=c,this.col[m+1]=d,this.col[m+2]=h,this.life[f]=a,this.maxLife[f]=a,this.baseSize[f]=l,this.size[f]=l,this.alpha[f]=0,this.rot[f]=u.rot||0,this.rotV[f]=u.rotV||0,this.shape[f]=u.shape||0,this.grav[f]=u.grav||0,this.drag[f]=u.drag||0,this.grow[f]=u.grow||0,this.fadeIn[f]=u.fadeIn||.05}update(t){let e=this.count;for(let r=0;r<e;r++){if(this.life[r]-=t,this.life[r]<=0){e--,r!==e&&this._copy(e,r),r--;continue}let o=r*3,a=1-this.drag[r]*t;this.vel[o]*=a,this.vel[o+2]*=a,this.vel[o+1]=this.vel[o+1]*a+this.grav[r]*t,this.pos[o]+=this.vel[o]*t,this.pos[o+1]+=this.vel[o+1]*t,this.pos[o+2]+=this.vel[o+2]*t,this.rot[r]+=this.rotV[r]*t;let l=1-this.life[r]/this.maxLife[r],c=this.maxLife[r]-this.life[r],d=Math.min(1,c/this.fadeIn[r]);this.alpha[r]=d*(1-l*l),this.size[r]=this.baseSize[r]*(1+this.grow[r]*l)}let n=this.count>0||e>0;if(this.count=e,this.geo.setDrawRange(0,e),!n)return;let s=this.geo.attributes;s.position.needsUpdate=!0,s.aColor.needsUpdate=!0,s.aSize.needsUpdate=!0,s.aAlpha.needsUpdate=!0,s.aRot.needsUpdate=!0,s.aShape.needsUpdate=!0}_copy(t,e){let n=t*3,s=e*3;for(let r=0;r<3;r++)this.pos[s+r]=this.pos[n+r],this.vel[s+r]=this.vel[n+r],this.col[s+r]=this.col[n+r];for(let r of[this.size,this.alpha,this.rot,this.rotV,this.shape,this.life,this.maxLife,this.grav,this.drag,this.baseSize,this.grow,this.fadeIn])r[e]=r[t]}clear(){this.count=0,this.geo.setDrawRange(0,0)}},mt=(i,t)=>i+Math.random()*(t-i),xo=new vt;function jf(i,t){let e=new jl(i,1200,!1),n=new jl(i,1200,!0),s=new Vt,r=(a,l=0)=>{if(xo.set(a),l){let c=1+mt(-l,l);xo.r*=c,xo.g*=c,xo.b*=c}return xo},o={dust(a,l){let c=l.count||6,d=l.small?.5:1;for(let h=0;h<c;h++){let u=r(13218954,.15);e.spawn(a.x+mt(-.3,.3)*d,a.y+.05,a.z+mt(-.3,.3)*d,mt(-1,1)*d,mt(.4,1.6)*d,mt(-1,1)*d+1.5,mt(.35,.7),mt(.25,.5)*d,u.r,u.g,u.b,{grav:-1.2,drag:2.5,grow:2.2,rot:mt(0,6),rotV:mt(-2,2)})}},slide(a,l){let c=l.count||10;for(let d=0;d<c;d++){let h=r(12099703,.2);e.spawn(a.x+mt(-.4,.4),a.y+.1,a.z+mt(-.2,.6),mt(-1.5,1.5),mt(1,3),mt(1,3),mt(.3,.6),mt(.15,.35),h.r,h.g,h.b,{grav:-6,drag:1,grow:1.5,shape:Qh,rot:mt(0,6),rotV:mt(-6,6)})}},sparkle(a,l){let c=l.count||6;for(let d=0;d<c;d++){let h=r(d%3===0?16774336:16763194,.1);n.spawn(a.x+mt(-.2,.2),a.y+mt(-.1,.3),a.z+mt(-.2,.2),mt(-1.5,1.5),mt(1.5,3.5),mt(-1.5,1.5),mt(.3,.55),mt(.18,.32),h.r,h.g,h.b,{grav:-3,drag:1.5,grow:-.6})}},burst(a,l){let c=l.count||30,d=l.type==="shield"?6737151:l.type==="magnet"?16734880:16763972;for(let u=0;u<c;u++){let f=u/c*Math.PI*2,m=mt(3,6),x=r(d,.2);n.spawn(a.x,a.y+1,a.z,Math.cos(f)*m,mt(.5,2.5),Math.sin(f)*m,mt(.4,.8),mt(.25,.45),x.r,x.g,x.b,{grav:-2,drag:3,grow:1})}let h=r(16777215);n.spawn(a.x,a.y+1,a.z,0,0,0,.22,.9,h.r*.6,h.g*.6,h.b*.6,{grow:1.2})},smash(a,l){let c=l.count||20;for(let d=0;d<c;d++){let h=r(9208948,.3);e.spawn(a.x+mt(-.5,.5),a.y+mt(.2,1.4),a.z+mt(-.5,.5),mt(-4,4),mt(2,7),mt(-4,4),mt(.5,1.1),mt(.15,.4),h.r,h.g,h.b,{grav:-14,drag:.5,shape:Qh,rot:mt(0,6),rotV:mt(-10,10)})}o.dust(a,{count:10})},shieldpop(a,l){let c=l.count||30;for(let d=0;d<c;d++){let h=mt(0,Math.PI*2),u=mt(-.5,1),f=mt(3,7),m=r(9428223,.2);n.spawn(a.x,a.y+1,a.z,Math.cos(h)*f,u*f,Math.sin(h)*f,mt(.4,.8),mt(.15,.35),m.r,m.g,m.b,{grav:-4,drag:1.5,shape:Qh,rot:mt(0,6),rotV:mt(-8,8)})}},ember(a,l){let c=l.count||4;for(let d=0;d<c;d++){let h=r(d%4===0?16769674:16742954,.25);n.spawn(a.x+mt(-.6,.6),a.y+mt(0,.6),a.z+mt(-.6,.6),mt(-.6,.6),mt(1.5,3.5),mt(-.6,.6),mt(.6,1.4),mt(.08,.2),h.r,h.g,h.b,{grav:1.2,drag:.8,grow:-.7})}},leaf(a,l){let c=l.count||3;for(let d=0;d<c;d++){let h=r(d%3===0?11127117:5214010,.25);e.spawn(a.x+mt(-6,6),a.y+mt(3,7),a.z+mt(-8,8),mt(-.8,.8),mt(-.6,-.2),mt(-.5,.5),mt(2.5,4.5),mt(.18,.3),h.r,h.g,h.b,{grav:-.35,drag:.4,shape:cy,rot:mt(0,6),rotV:mt(-3,3),fadeIn:.5})}},mist(a,l){let c=l.count||3;for(let d=0;d<c;d++){let h=r(14677247,.05);n.spawn(a.x+mt(-1.5,1.5),a.y+mt(0,1),a.z+mt(-1.5,1.5),mt(-.4,.4),mt(.3,1),mt(-.4,.4),mt(1.2,2.4),mt(.8,1.6),h.r*.35,h.g*.35,h.b*.35,{grav:-.1,drag:.6,grow:1.6,fadeIn:.6})}},splash(a,l){let c=l.count||12;for(let d=0;d<c;d++){let h=r(13627391,.1);n.spawn(a.x+mt(-.3,.3),a.y,a.z+mt(-.3,.3),mt(-2,2),mt(2,5),mt(-2,2),mt(.4,.7),mt(.1,.25),h.r*.6,h.g*.6,h.b*.6,{grav:-9,drag:.5})}},smoke(a,l){let c=l.count||4;for(let d=0;d<c;d++){let h=r(5591114,.2);e.spawn(a.x+mt(-.3,.3),a.y+.2,a.z+mt(-.3,.3),mt(-.3,.3),mt(.8,1.6),mt(-.3,.3),mt(1,2),mt(.4,.7),h.r,h.g,h.b,{grav:.2,drag:.8,grow:2.5,rot:mt(0,6),rotV:mt(-1,1),fadeIn:.3})}}};return{emit(a,l,c={}){(o[a]||o.dust)(l,c)},update(a,l){t.getSize(s);let c=s.y*t.getPixelRatio()/(2*Math.tan(eh.degToRad(l.fov)*.5));e.mat.uniforms.uScale.value=c,n.mat.uniforms.uScale.value=c,e.update(a),n.update(a)},reset(){e.clear(),n.clear()},get count(){return e.count+n.count}}}function Zf(i){let t=null,e=null,n=null,s=null,r=null,o=i.sound!==!1,a=i.music!==!1,l=!1,c=null,d="temple",h=0,u=0,f=0;function m(){if(t)return t;let G=window.AudioContext||window.webkitAudioContext;if(!G)return null;try{t=new G,e=t.createGain(),e.gain.value=.7,e.connect(t.destination);let N=t.createDynamicsCompressor();N.threshold.value=-14,N.ratio.value=4,N.attack.value=.005,N.release.value=.2,N.connect(e),n=t.createGain(),n.gain.value=o?1:0,n.connect(N),s=t.createGain(),s.gain.value=a?.55:0,s.connect(N),r=t.createGain(),r.gain.value=o?1:0,r.connect(N);let Y=t.sampleRate*2;c=t.createBuffer(1,Y,t.sampleRate);let xt=c.getChannelData(0);for(let ht=0;ht<Y;ht++)xt[ht]=Math.random()*2-1;A()}catch{t=null}return t}let x=()=>t.currentTime,g=()=>o&&!l&&m()&&t.state==="running";function p({f:G=440,f2:N=null,t:Y=0,dur:xt=.2,type:ht="sine",vol:W=.2,attack:$=.005,decay:et=null,bus:Mt=n,detune:Ft=0,pan:Pt=0,curve:ne="exp"}){let Dt=t.createOscillator();Dt.type=ht,Dt.detune.value=Ft;let qt=x()+Y;Dt.frequency.setValueAtTime(G,qt),N!==null&&(ne==="exp"?Dt.frequency.exponentialRampToValueAtTime(Math.max(20,N),qt+xt):Dt.frequency.linearRampToValueAtTime(N,qt+xt));let $t=t.createGain();$t.gain.setValueAtTime(1e-4,qt),$t.gain.exponentialRampToValueAtTime(W,qt+$),$t.gain.exponentialRampToValueAtTime(1e-4,qt+(et||xt)),Dt.connect($t);let Zt=$t;if(Pt){let ge=t.createStereoPanner();ge.pan.value=Pt,$t.connect(ge),Zt=ge}return Zt.connect(Mt),Dt.start(qt),Dt.stop(qt+(et||xt)+.05),Dt}function _({t:G=0,dur:N=.2,vol:Y=.2,filter:xt="lowpass",freq:ht=1e3,q:W=.7,freq2:$=null,bus:et=n,attack:Mt=.003,pan:Ft=0}){let Pt=t.createBufferSource();Pt.buffer=c,Pt.loop=!0,Pt.playbackRate.value=.8+Math.random()*.4;let ne=t.createBiquadFilter();ne.type=xt,ne.frequency.value=ht,ne.Q.value=W;let Dt=x()+G;$!==null&&ne.frequency.exponentialRampToValueAtTime(Math.max(30,$),Dt+N);let qt=t.createGain();qt.gain.setValueAtTime(1e-4,Dt),qt.gain.exponentialRampToValueAtTime(Y,Dt+Mt),qt.gain.exponentialRampToValueAtTime(1e-4,Dt+N),Pt.connect(ne),ne.connect(qt);let $t=qt;if(Ft){let Zt=t.createStereoPanner();Zt.pan.value=Ft,qt.connect(Zt),$t=Zt}$t.connect(et),Pt.start(Dt),Pt.stop(Dt+N+.05)}let S={coin(G){let N=Math.min(12,h),Y=880*Math.pow(2,N%8/12);p({f:Y,dur:.12,type:"sine",vol:.16}),p({f:Y*1.5,t:.03,dur:.16,type:"triangle",vol:.09})},jump(){_({dur:.18,vol:.12,filter:"bandpass",freq:600,freq2:2400,q:1.2}),p({f:220,f2:520,dur:.16,type:"triangle",vol:.09})},land(){_({dur:.12,vol:.2,freq:500,freq2:120}),p({f:110,f2:60,dur:.1,type:"sine",vol:.18})},slide(){_({dur:.45,vol:.16,freq:1200,freq2:300,q:.5})},whoosh(){_({dur:.25,vol:.12,filter:"bandpass",freq:2500,freq2:500,q:1})},step(){_({dur:.06,vol:.08,freq:900,freq2:300})},turn(){_({dur:.16,vol:.14,freq:700,freq2:200}),p({f:140,f2:90,dur:.1,type:"triangle",vol:.08})},stumble(){_({dur:.25,vol:.28,freq:800,freq2:150}),p({f:180,f2:70,dur:.3,type:"sawtooth",vol:.14}),S.monkeys({close:!0})},smash(){_({dur:.35,vol:.35,freq:1500,freq2:200,q:.8}),p({f:90,f2:40,dur:.3,type:"square",vol:.18});for(let G=0;G<5;G++)_({t:.05+G*.05,dur:.08,vol:.1,filter:"bandpass",freq:2e3+Math.random()*3e3,q:4})},shieldbreak(){p({f:1400,f2:300,dur:.4,type:"sine",vol:.18}),_({dur:.4,vol:.2,filter:"highpass",freq:2500});for(let G=0;G<6;G++)p({f:2e3+Math.random()*2e3,t:G*.04,dur:.12,type:"sine",vol:.06})},hit(){_({dur:.4,vol:.45,freq:900,freq2:100}),p({f:70,f2:35,dur:.45,type:"sawtooth",vol:.25}),p({f:200,f2:60,dur:.2,type:"square",vol:.12})},fall(){p({f:700,f2:120,dur:1.4,type:"sine",vol:.18}),_({dur:1.2,vol:.12,filter:"bandpass",freq:800,freq2:200,q:.8})},burn(){_({dur:.7,vol:.35,filter:"bandpass",freq:400,freq2:2500,q:.7}),p({f:180,f2:60,dur:.6,type:"sawtooth",vol:.16})},powerup(G){let N=G&&G.type==="shield"?523:G&&G.type==="magnet"?587:659;[1,1.25,1.5,2].forEach((Y,xt)=>p({f:N*Y,t:xt*.07,dur:.35,type:"triangle",vol:.14})),_({dur:.5,vol:.06,filter:"highpass",freq:3e3})},start(){[392,523,659,784].forEach((G,N)=>p({f:G,t:N*.09,dur:.3,type:"square",vol:.08})),_({dur:.6,vol:.12,filter:"bandpass",freq:300,freq2:1500,q:.7})},monkeys(G){let N=G&&G.close?3:2;for(let Y=0;Y<N;Y++){let xt=Y*.13+Math.random()*.05,ht=900+Math.random()*500;p({f:ht,f2:ht*1.8,t:xt,dur:.12,type:"sawtooth",vol:.05,curve:"lin",pan:(Math.random()-.5)*1.2}),p({f:ht*1.8,f2:ht*.7,t:xt+.12,dur:.18,type:"sawtooth",vol:.05,curve:"lin"})}},buy(){[660,880,1320].forEach((G,N)=>p({f:G,t:N*.08,dur:.25,type:"sine",vol:.14}))},deny(){p({f:160,f2:110,dur:.25,type:"square",vol:.1})},click(){p({f:800,dur:.05,type:"sine",vol:.08})}},y=null,R=null,E=null,I=null;function v(G,N,Y,xt){let ht=t.createBufferSource();ht.buffer=c,ht.loop=!0;let W=t.createBiquadFilter();W.type=Y,W.frequency.value=G,W.Q.value=N;let $=t.createGain();return $.gain.value=xt,ht.connect(W),W.connect($),$.connect(r),ht.start(),{g:$,f:W}}function A(){y=v(600,.6,"bandpass",0),R=v(400,.3,"lowpass",0),E=v(4e3,2.5,"bandpass",0),I=v(200,.4,"lowpass",.012)}let L=0,b=2,w={on:!1,step:0,nextTime:0,bpm:118,intensity:0,fade:null,fading:!1},z=[0,3,5,7,10,12,15,17],k=146.83,T=G=>k*Math.pow(2,G/12),C=[0,2,3,2,5,3,2,0,4,2,0,-1,2,3,5,7],B=[0,0,5,0,3,0,5,7];function Q(G,N,Y=1){G==="kick"?p({f:150,f2:45,t:N,dur:.25,type:"sine",vol:.5*Y,bus:s}):G==="tom"?(p({f:220,f2:110,t:N,dur:.22,type:"sine",vol:.3*Y,bus:s}),_({t:N,dur:.08,vol:.06*Y,freq:1500,freq2:300,bus:s})):G==="shaker"?_({t:N,dur:.05,vol:.05*Y,filter:"highpass",freq:6e3,bus:s}):G==="clap"&&_({t:N,dur:.12,vol:.12*Y,filter:"bandpass",freq:1800,q:1.5,bus:s})}function ot(){if(!w.on||!t)return;let G=60/w.bpm/4;for(;w.nextTime<x()+.25;){let N=w.step,Y=w.nextTime-x(),xt=Math.floor(N/16),ht=N%16,W=w.intensity;if(ht%4===0&&Q("kick",Y,.9),(ht===6||ht===14)&&Q("tom",Y,.7),W>.3&&(ht===3||ht===11)&&Q("tom",Y,.5),ht%2===1&&Q("shaker",Y,.5+W*.5),W>.55&&(ht===4||ht===12)&&Q("clap",Y,.6),ht%2===0){let $=B[(xt*2+(ht>=8?1:0))%B.length];p({f:T($-12),t:Y,dur:G*1.8,type:"sawtooth",vol:.07+W*.05,bus:s,attack:.01})}if(W>.15&&ht%2===0){let $=C[(N/2+xt*3)%C.length];if($>=0&&(W>.6||xt%2===0||ht%4===0)){let et=T(z[$%z.length]+12);p({f:et,t:Y,dur:.22,type:"triangle",vol:.11+W*.05,bus:s,attack:.004}),p({f:et*2,t:Y,dur:.08,type:"sine",vol:.05,bus:s})}}if(W>.75&&ht%8===4){let $=T(z[(xt+2)%5]+24);p({f:$,f2:$*1.01,t:Y,dur:G*6,type:"sine",vol:.06,bus:s,attack:.05,curve:"lin"})}w.nextTime+=G,w.step++}}return{unlock(){m()&&t.state==="suspended"&&t.resume().catch(()=>{})},play(G,N={}){if(!g())return;G==="coin"&&(h=performance.now()-u<700?h+1:0,u=performance.now());let Y=S[G];if(Y)try{Y(N)}catch{}},footstep(G="temple"){if(!g())return;f^=1;let N=f?.18:-.18;G==="bridge"?(p({f:180+f*30,f2:90,dur:.09,type:"triangle",vol:.12,pan:N}),_({dur:.05,vol:.05,freq:1200,freq2:400,pan:N})):_(G==="jungle"?{dur:.07,vol:.09,freq:700,freq2:250,pan:N}:{dur:.06,vol:.1,freq:1400,freq2:500,q:.9,pan:N})},startMusic(){m()&&(w.on=!0,w.step=0,w.nextTime=x()+.1,w.intensity=.2,w.fading=!1,w.fade&&(clearTimeout(w.fade),w.fade=null),s.gain.cancelScheduledValues(x()),s.gain.setValueAtTime(a?.55:0,x()))},stopMusic(G=1){t&&(s.gain.cancelScheduledValues(x()),s.gain.setValueAtTime(s.gain.value,x()),s.gain.linearRampToValueAtTime(1e-4,x()+G),w.fading=!0,w.fade=setTimeout(()=>{w.on=!1,w.fading=!1},G*1e3))},setPaused(G){l=G,t&&(G?t.suspend().catch(()=>{}):t.resume().catch(()=>{}))},setEnabled(G,N){o=G,a=N,t&&(n.gain.value=G?1:0,r.gain.value=G?1:0,s.gain.cancelScheduledValues(x()),s.gain.setValueAtTime(N&&w.on&&!w.fading?.55:0,x()))},setBiome(G){d=G},setIntensity(G){w.intensity=fe(G,0,1)},update(G,N){if(!t||l)return;N.piece&&(d=N.piece.kind);let Y=N.running?fe(.25+N.speed01*.5+N.threat*.3+(N.boost?.25:0),0,1):w.intensity;w.intensity+=(Y-w.intensity)*Math.min(1,G*1.5),w.bpm=me(112,150,fe(N.speed01,0,1))+(N.boost?10:0),ot();let xt=d==="temple"||d==="ruins"?.05:0,ht=d==="cliff"?.09:d==="bridge"?.12:.02,W=d==="jungle"?.02:.006,$=Math.min(1,G*1.2);if(y.g.gain.value+=(xt-y.g.gain.value)*$,R.g.gain.value+=(ht-R.g.gain.value)*$,E.g.gain.value+=(W-E.g.gain.value)*$,I.g.gain.value=.01+N.speed01*.03,I.f.frequency.value=200+N.speed01*500,L-=G,xt>0&&L<=0&&o&&(L=.08+Math.random()*.3,_({dur:.03,vol:.05*Math.random(),filter:"bandpass",freq:2500+Math.random()*3e3,q:3,bus:r,pan:Math.random()-.5})),b-=G,d==="jungle"&&b<=0&&o){b=2+Math.random()*5;let et=1800+Math.random()*1500;for(let Mt=0;Mt<2+Math.floor(Math.random()*3);Mt++)p({f:et,f2:et*1.3,t:Mt*.11,dur:.08,type:"sine",vol:.03,bus:r,pan:(Math.random()-.5)*1.5})}N.running&&N.threat>.6&&Math.random()<G*.8&&S.monkeys({close:!1})}}}var Jf="relic-rush-save-v1",Ii={magnet:{name:"Coin Magnet",desc:"Magnet lasts longer",icon:"magnet",max:5,base:250,bonus:i=>i*2.5},shield:{name:"Shield",desc:"Shield lasts longer",icon:"shield",max:5,base:250,bonus:i=>i*2},boost:{name:"Boost",desc:"Boost lasts longer",icon:"boost",max:5,base:300,bonus:i=>i*1.2},coin:{name:"Coin Value",desc:"Each coin is worth more score",icon:"coin",max:5,base:200,bonus:i=>i*2},head:{name:"Head Start",desc:"Begin each run with a boost",icon:"head",max:1,base:1500,bonus:i=>i}};function Zl(i,t){let e=Ii[i];return Math.round(e.base*Math.pow(1.65,t))}var _o=()=>({best:0,bestDistance:0,coins:0,runs:0,totalCoins:0,upgrades:{magnet:0,shield:0,boost:0,coin:0,head:0},settings:{sound:!0,music:!0,quality:"auto"}});function Jl(){try{let i=localStorage.getItem(Jf);if(!i)return _o();let t=_o(),e=JSON.parse(i);return Object.assign(t,e),t.upgrades={..._o().upgrades,...e.upgrades||{}},t.settings={..._o().settings,...e.settings||{}},t}catch{return _o()}}function vo(i){try{localStorage.setItem(Jf,JSON.stringify(i))}catch{}}var pe=i=>document.getElementById(i),tu="relic-rush-tutorial-v1",dy=2*Math.PI*23,eu=["boost","shield","magnet"],fy=2.8,py={magnet:"#ff5fa8",shield:"#5cc2ff",boost:"#ffc340",coin:"#ffd25a",head:"#7fd45f"},my={low:"Low: fastest, no shadows",medium:"Medium: balanced",high:"High: best looking"},gy={hit:{title:"Smashed!",line:"You ran headlong into ancient stone."},fall:{title:"Fell!",line:"The abyss swallowed the idol thief."},burn:{title:"Burned!",line:"The temple fire claimed you."},caught:{title:"Caught!",line:"The guardians dragged you back to the temple."}},xy=i=>{try{return localStorage.getItem(i)==="1"}catch{return!1}},$f=(i,t)=>{try{t?localStorage.setItem(i,"1"):localStorage.removeItem(i)}catch{}},_y=i=>i.charAt(0).toUpperCase()+i.slice(1);function yo(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}function vy(i){let t=(n,s)=>`<svg class="swipe ${s}"><use href="#${n}"/></svg>`,e=(...n)=>n.map(s=>`<kbd>${s}</kbd>`).join("");return i?[{at:.8,text:"Swipe left or right to change lanes",glyph:t("i-swipe-lr","lr")},{at:4.2,text:"Swipe up to jump",glyph:t("i-swipe","up")},{at:7.6,text:"Swipe down to slide",glyph:t("i-swipe","down")},{at:11.2,text:"At a corner, swipe toward the turn",glyph:t("i-swipe-turn","turn")}]:[{at:.8,text:"Change lanes",glyph:e("\u2190","\u2192")},{at:4.2,text:"Jump",glyph:e("\u2191")},{at:7.6,text:"Slide",glyph:e("\u2193")},{at:11.2,text:"At a corner, press toward the turn",glyph:e("\u2190","\u2192")}]}function Kf(i){let t=Tl(),e={hud:pe("hud"),score:pe("hud-score"),mult:pe("hud-mult"),multVal:pe("hud-mult-val"),coins:pe("hud-coins"),coinsWrap:pe("hud-coins-wrap"),dist:pe("hud-dist"),toast:pe("hud-toast"),warn:pe("hud-warn"),hint:pe("hud-hint"),hintGlyph:pe("hud-hint-glyph"),hintText:pe("hud-hint-text"),menu:pe("menu"),dust:pe("dust"),menuBest:pe("menu-best"),menuCoins:pe("menu-coins"),menuControls:pe("menu-controls"),gameover:pe("gameover"),goTitle:pe("go-title"),goReason:pe("go-reason"),goBest:pe("go-best"),confetti:pe("go-confetti"),goScore:pe("go-score"),goDist:pe("go-dist"),goCoins:pe("go-coins"),goHi:pe("go-hi"),pause:pe("pause"),pauseScore:pe("pause-score"),pauseDist:pe("pause-dist"),settings:pe("settings"),shop:pe("shop"),shopCoins:pe("shop-coins"),shopList:pe("shop-list"),tutorialBtn:pe("btn-tutorial")},n=[e.menu,e.gameover,e.pause,e.settings,e.shop],s=document.querySelectorAll('[data-action="sound"]'),r=document.querySelectorAll('.seg[data-role="quality"]'),o=document.querySelectorAll('[data-role="quality-note"]'),a={};for(let N of eu){let Y=pe("hud-power-"+N);a[N]={root:Y,ring:Y.querySelector(".ring-fg"),secs:Y.querySelector(".power-secs"),shown:!1,low:!1,lastSecs:-1}}let l=0,c=0,d="",h=0,u=-1,f=-1,m=!1,x=0,g="",p={t:1,target:0,text:""},_={steps:vy(t),index:0,time:0,hideAt:0,active:!1,shownCount:0,done:xy(tu)};for(let N of n)N.addEventListener("pointerdown",Y=>Y.stopPropagation());e.hud.addEventListener("pointerdown",N=>N.stopPropagation());let S=N=>Y=>{Y.stopPropagation(),Y.preventDefault(),l=performance.now(),N(Y),Y.currentTarget&&Y.currentTarget.blur&&Y.currentTarget.blur()},y=(N,Y)=>{let xt=pe(N);xt&&xt.addEventListener("click",S(Y))};y("btn-play",()=>i.startRun()),y("btn-again",()=>i.startRun()),y("btn-shop",()=>i.openShop()),y("btn-shop2",()=>i.openShop()),y("btn-shop-close",()=>i.closeShop()),y("btn-resume",()=>i.togglePause()),y("btn-quit",()=>i.quitToMenu()),y("btn-menu",()=>i.quitToMenu()),y("btn-pause",()=>{i.state==="running"&&i.togglePause()}),y("btn-settings",()=>C()),y("btn-settings-close",()=>B()),y("btn-tutorial",()=>{_.done=!1,$f(tu,!1);let N=e.tutorialBtn.querySelector("span");N.textContent="Ready",setTimeout(()=>{N.textContent="Show again"},1400)});for(let N of s)N.addEventListener("click",S(()=>i.toggleSound()));for(let N of r)N.addEventListener("click",S(Y=>{let xt=Y.target.closest("button[data-q]");xt&&i.setQuality(xt.dataset.q)}));e.shopList.addEventListener("click",S(N=>{let Y=N.target.closest(".btn-buy");!Y||Y.disabled||i.buyUpgrade(Y.dataset.key)||yo(Y.closest(".card"),"shake")}));let R=()=>{for(let N of n)N.hidden=!0},E=N=>{e.hud.hidden=!N};function I(){e.menuBest.textContent=bn(i.save.best),e.menuCoins.textContent=bn(i.save.coins)}function v(){let N=!!i.save.settings.sound;for(let ht of s)ht.setAttribute("aria-pressed",String(N)),ht.querySelector("use").setAttribute("href",N?"#i-sound":"#i-mute"),ht.querySelector("span").textContent=N?"On":"Off";let Y=i.save.settings.quality||"auto";for(let ht of r)for(let W of ht.children)W.classList.toggle("on",W.dataset.q===Y);let xt=Y==="auto"?`Auto: ${_y(i.quality)} on this device`:my[Y]||"";for(let ht of o)ht.textContent=xt}function A(N){N!==m&&(m=N,e.warn.classList.toggle("show",N),e.hud.classList.toggle("danger",N))}function L(N,Y){e.hintGlyph.innerHTML=Y||"",e.hintText.textContent=N,e.hint.classList.add("show")}let b=()=>e.hint.classList.remove("show");function w(N){_.time+=N,_.hideAt>0&&_.time>=_.hideAt&&(_.hideAt=0,b(),_.index>=_.steps.length&&z());let Y=_.steps[_.index];Y&&_.time>=Y.at&&(L(Y.text,Y.glyph),_.hideAt=Y.at+fy,_.index++,_.shownCount++)}function z(){_.active=!1,_.done=!0,$f(tu,!0)}function k(){let N="";for(let Y=0;Y<18;Y++)N+=`<i style="--x:${(Math.random()*100).toFixed(1)}%;--y:${(30+Math.random()*80).toFixed(1)}%;--s:${(2+Math.random()*4).toFixed(1)}px;--d:${(7+Math.random()*8).toFixed(1)}s;--delay:${(-Math.random()*14).toFixed(1)}s;--dx:${((Math.random()-.5)*90).toFixed(0)}px;--o:${(.35+Math.random()*.5).toFixed(2)}"></i>`;e.dust.innerHTML=N}function T(){let N=["#ffd25a","#ff9e2c","#7fd45f","#fff3bf","#5cc2ff"],Y="";for(let xt=0;xt<20;xt++){let ht=xt/20*Math.PI*2+Math.random()*.3,W=60+Math.random()*80;Y+=`<i style="--dx:${(Math.cos(ht)*W).toFixed(0)}px;--dy:${(Math.sin(ht)*W-30).toFixed(0)}px;--rot:${Math.random()*720-360|0}deg;--c:${N[xt%N.length]};--delay:${(.3+Math.random()*.2).toFixed(2)}s"></i>`}e.confetti.innerHTML=Y}function C(){R(),v(),e.settings.hidden=!1}function B(){ft.showMenu("menu")}function Q(N,Y,xt){let ht=Ii[N],W=$=>(Math.round($*10)/10).toString();if(N==="magnet"||N==="shield"||N==="boost"){let $=N==="shield"?yt.shieldDuration:N==="magnet"?yt.magnetDuration:yt.boostDuration,et=$+ht.bonus(Y);return xt?`Lasts ${W(et)} s`:`Lasts ${W(et)} s \u2192 ${W($+ht.bonus(Y+1))} s`}if(N==="coin"){let $=yt.coinScore+ht.bonus(Y);return xt?`${$} pts per coin`:`${$} \u2192 ${yt.coinScore+ht.bonus(Y+1)} pts per coin`}return Y>0?"Every run starts boosted":"Start every run boosted"}function ot(N=null){let Y=i.save.coins;e.shopCoins.textContent=bn(Y);let xt=e.shopList.scrollTop,ht="";for(let W of Object.keys(Ii)){let $=Ii[W],et=i.save.upgrades[W]||0,Mt=et>=$.max,Ft=Mt?0:Zl(W,et),Pt=!Mt&&Y>=Ft,ne="";for(let qt=0;qt<$.max;qt++)ne+=`<i class="${qt<et?"on":""}"></i>`;let Dt=Mt?"<span>Max</span>":`<span class="cost"><svg class="coin"><use href="#i-coin"/></svg>${bn(Ft)}</span><span class="buy-label">${Pt?"Buy":"Need "+bn(Ft-Y)}</span>`;ht+=`<div class="card${Mt?" maxed":""}${W===N?" bought":""}" style="--c:${py[W]||"#ffd25a"}"><div class="card-icon"><svg><use href="#i-${$.icon}"/></svg></div><div class="card-body"><div class="card-name"><span class="nm">${$.name}</span><span class="card-lv">${Mt?"Max":"Lv "+et+"/"+$.max}</span></div><div class="card-desc">${$.desc}</div><div class="card-effect">${Q(W,et,Mt)}</div><div class="pips">${ne}</div></div><button class="btn btn-buy ${Mt?"max":Pt?"afford":"poor"}" data-key="${W}"${Mt?" disabled":""}>${Dt}</button></div>`}e.shopList.innerHTML=ht,e.shopList.scrollTop=xt}let ft={blocksTap(){return performance.now()-l<350||i.state==="shop"||!e.settings.hidden},showMenu(N="menu"){R(),I(),E(!1),A(!1),b(),N==="dead"?e.gameover.hidden=!1:e.menu.hidden=!1},hideMenus(){R(),E(!0)},showPause(){R(),E(!1),v(),e.pauseScore.textContent=bn(i.run.score),e.pauseDist.textContent=bn(i.run.distance)+" m",e.pause.hidden=!1},showGameOver(N){R(),E(!1),A(!1),b();let Y=gy[N.deathType]||{title:"Run over",line:"The temple keeps its secrets."};e.goTitle.textContent=Y.title,e.goReason.textContent=Y.line,e.goDist.textContent=bn(N.distance)+" m",e.goCoins.textContent="+"+bn(N.coins),e.goHi.textContent=bn(i.save.best),p.t=0,p.target=N.score,p.text="0",e.goScore.textContent="0",e.goBest.hidden=!N.best,N.best&&T(),e.gameover.hidden=!1,I()},showShop(){R(),ot(),e.shop.hidden=!1},toast(N,Y=1600){if(!N){x=0,e.toast.classList.remove("show");return}e.toast.textContent=N,yo(e.toast,"show"),x=Y/1e3},hint(N){g=N||"",g?L(g,""):b()},update(N){let Y=i.state;if(x>0&&(x-=N,x<=0&&e.toast.classList.remove("show")),Y==="running"||Y==="dying"){let xt=i.run;c+=(xt.score-c)*Math.min(1,N*(Y==="dying"?30:10)),xt.score-c<.5&&(c=xt.score);let ht=bn(c);ht!==d&&(d=ht,e.score.textContent=ht);let W=xt.multiplier;if(W!==h){let et=h>0&&W>h;h=W,e.multVal.textContent=W,e.mult.classList.toggle("boosted",i.power.boost>0),et&&yo(e.mult,"pop")}xt.coins!==f&&(f=xt.coins,e.coins.textContent=bn(xt.coins));let $=Math.floor(xt.distance);$!==u&&(u=$,e.dist.textContent=bn($)+" m");for(let et of eu){let Mt=a[et],Ft=i.power[et];if(Ft>0){Mt.shown||(Mt.shown=!0,Mt.root.hidden=!1,Mt.lastSecs=-1);let Pt=Math.min(1,Ft/i.powerDuration(et));Mt.ring.style.strokeDashoffset=(dy*(1-Pt)).toFixed(1);let ne=Math.ceil(Ft);ne!==Mt.lastSecs&&(Mt.lastSecs=ne,Mt.secs.textContent=ne);let Dt=Ft<2;Dt!==Mt.low&&(Mt.low=Dt,Mt.root.classList.toggle("low",Dt))}else Mt.shown&&(Mt.shown=!1,Mt.root.hidden=!0)}A(Y==="running"&&i.player.stumbleTimer>0),Y==="running"&&_.active&&!g&&w(N)}else if(Y==="dead"&&p.t<1){p.t=Math.min(1,p.t+N/1.1);let xt=1-Math.pow(1-p.t,3),ht=bn(p.target*xt);ht!==p.text&&(p.text=ht,e.goScore.textContent=ht)}}},G=i.events;return G.on("start",()=>{c=0,d="",h=0,u=-1,f=-1,e.hud.classList.remove("dying"),A(!1),g="",b();for(let N of eu){let Y=a[N];Y.shown=!1,Y.low=!1,Y.root.hidden=!0,Y.root.classList.remove("low")}_.active=!_.done,_.index=0,_.time=0,_.hideAt=0,_.shownCount=0,x<=0&&ft.toast("Run!",900)}),G.on("death",()=>{e.hud.classList.add("dying"),A(!1),b(),_.active&&(_.active=!1,_.shownCount>=3&&z())}),G.on("gameover",()=>{e.hud.classList.remove("dying")}),G.on("coin",()=>yo(e.coinsWrap,"pop")),G.on("power",N=>{let Y=a[N];Y&&!Y.shown&&(Y.shown=!0,Y.root.hidden=!1,Y.lastSecs=-1)}),G.on("powerend",N=>{let Y=a[N];Y&&Y.shown&&(Y.shown=!1,Y.low=!1,Y.root.hidden=!0,Y.root.classList.remove("low"))}),G.on("stumble",()=>yo(e.warn,"show")),G.on("pause",()=>{b()}),G.on("resume",()=>{g&&L(g,"")}),G.on("menu",()=>{e.hud.classList.remove("dying")}),G.on("settings",v),G.on("quality",v),G.on("upgrade",N=>{ot(N),I()}),window.addEventListener("keydown",N=>{N.code==="Escape"&&!e.settings.hidden&&B()}),k(),e.menuControls.innerHTML=t?"Swipe <kbd>&larr;</kbd><kbd>&rarr;</kbd> lanes &amp; turns &middot; <kbd>&uarr;</kbd> jump &middot; <kbd>&darr;</kbd> slide":"Arrow keys or <kbd>WASD</kbd> &middot; <kbd>Space</kbd> jump &middot; <kbd>P</kbd> pause",v(),ft.showMenu("menu"),ft}var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yy=new ji(-1,1,1,-1,0,1),nu=class extends Ae{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},My=new nu,ss=class{constructor(t){this._mesh=new te(My,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,yy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ar=class extends Nn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ai.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ss(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Mo=class extends Nn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$l=class extends Nn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Kl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Vt);this._width=n.width,this._height=n.height,e=new qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ar(or),this.copyPass.material.blending=Bn,this.timer=new Vr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Mo!==void 0&&(o instanceof Mo?n=!0:o instanceof $l&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ql=class extends Nn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Qf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var lr=class i extends Nn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Vt(t.x,t.y):new Vt(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qe(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let h=new qe(r,o,{type:dn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let u=new qe(r,o,{type:dn});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Qf;this.highPassUniforms=Ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Vt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ai.clone(or.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,premultipliedAlpha:!0,blending:He,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Ye,this._fsQuad=new ss(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Vt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let s=0;s<t;s++)e.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Vt(.5,.5)},direction:{value:new Vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};lr.BlurDirectionX=new Vt(1,0);lr.BlurDirectionY=new Vt(0,1);var bo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var tc=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ai.clone(bo.uniforms),this.material=new Js({name:bo.name,uniforms:this.uniforms,vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader}),this._fsQuad=new ss(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var by={uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uFlash:{value:new ye(1,1,1,0)},uTime:{value:0},uAspect:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uSpeed; uniform vec4 uFlash; uniform float uTime; uniform float uAspect;
    varying vec2 vUv;
    float hash(float x){ return fract(sin(x * 12.9898) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5; d.x *= uAspect;
      float r = length(d);
      // vignette grows with speed
      float vig = smoothstep(0.55, 1.15 - uSpeed * 0.25, r);
      c.rgb *= 1.0 - vig * (0.35 + 0.35 * uSpeed);
      // radial speed streaks near the screen edges
      if (uSpeed > 0.02) {
        float ang = atan(d.y, d.x);
        float streak = hash(floor(ang * 40.0)) ;
        float s = step(0.72, streak) * smoothstep(0.35, 0.75, r) * (0.5 + 0.5 * sin(uTime * 30.0 + streak * 60.0 + r * 40.0));
        c.rgb += vec3(1.0, 0.95, 0.85) * s * uSpeed * 0.28;
      }
      c.rgb = mix(c.rgb, uFlash.rgb, uFlash.a);
      gl_FragColor = c;
    }`};function tp(i,t,e,n="high"){let s=i.getSize(new Vt),r=null,o=null,a=null,l=null,c=null,d=0,h=0,u=new ye(1,1,1,0),f=0;function m(){r=new Kl(i),c=new Ql(t,e),r.addPass(c),o=null,n!=="low"&&(o=new lr(new Vt(s.x,s.y),.42,.55,.82),r.addPass(o)),a=new ar(by),a.uniforms.uAspect.value=s.x/s.y,r.addPass(a),l=new tc,r.addPass(l)}return m(),{get quality(){return n},setQuality(x){n=x;for(let g of[c,o,a,l])g&&g.dispose&&g.dispose();r.dispose(),m(),this.resize()},resize(){i.getSize(s),r.setSize(s.x,s.y),r.setPixelRatio(i.getPixelRatio()),o&&o.resolution.set(s.x,s.y),a&&(a.uniforms.uAspect.value=s.x/s.y)},setSpeed(x){h=x},flash(x,g=.6){u.set((x>>16&255)/255,(x>>8&255)/255,(x&255)/255,g)},render(x){f+=x,d=ue(d,h,4,x),u.w=Math.max(0,u.w-x*2.2),a.uniforms.uSpeed.value=d,a.uniforms.uTime.value=f,a.uniforms.uFlash.value.copy(u),r.render(x)}}}var Sy=["shield","magnet","boost"],ec=class{constructor({renderer:t,scene:e,camera:n,input:s,quality:r}){this.renderer=t,this.scene=e,this.camera=n,this.input=s,this.quality=r,this.events=new sr,this.save=Jl(),this.state="menu",this.time=0,this.runSeed=1,this.run=this._freshRun(),this.power={shield:0,magnet:0,boost:0},this.threat=.35,this.slowmo=1,this.track=new Al(this.runSeed),this.track.onPieceAdded=o=>this._onPieceAdded(o),this.track.onPieceRemoved=o=>this._onPieceRemoved(o),this.pieceGroups=new Map,this.env=Lf(e,t,r),this.collectibles=Yf(e,this.track),this.particles=jf(e,t),this.audio=Zf(this.save.settings),this.character=xf(),e.add(this.character.group),this.monkeys=Ef(e),this.effects=tp(t,e,n,r),this.followCam=new Cl(n),this.player=new Rl(this.track,this.events),this.hud=Kf(this),this.track.reset(this.runSeed),this.player.reset(this.track.root),this._anchor=new F,this._headingAngle=0,this._ctxCollect={},this._ctxCam={},this._ctxChar={},this._ctxEnv={},this._ctxAudio={},this._ctxMonkeys={sample:(o,a)=>this.track.sampleBehind(this.player.piece,this.player.u,this.player.lateral,o,a)},this.followCam.reset(0,this.player.updateWorld()),this._bindEvents(),this._bindInput(),this._warmupShaders()}_warmupShaders(){let t=new Ne;t.add(kf(),this.collectibles.warmupGroup()),this.scene.add(t);try{this.renderer.compile(this.scene,this.camera)}catch{}this.scene.remove(t)}_freshRun(){return{score:0,distance:0,coins:0,multiplier:1,best:!1,deathType:null,time:0}}_onPieceAdded(t){let e=ns(t.seed),n=Df(t,{rng:e,quality:this.quality});n.position.copy(t.origin),n.rotation.y=t.angle;for(let s of t.obstacles){let r=Xf(s,t,{rng:e,quality:this.quality});r&&(r.position.set(0,0,0),n.add(r),s.visual=r)}t.visual=n,this.scene.add(n),this.collectibles&&this.collectibles.addPiece(t)}_onPieceRemoved(t){t.visual&&(this.scene.remove(t.visual),Uf(t.visual),t.visual=null),this.collectibles&&this.collectibles.removePiece(t)}_bindEvents(){let t=this.events,e=this.player;t.on("jump",()=>{this.audio.play("jump"),this.character.setState("jump"),this.particles.emit("dust",e.worldPos,{count:6})}),t.on("land",()=>{this.audio.play("land"),this.particles.emit("dust",e.worldPos,{count:8}),this.followCam.addShake(.12)}),t.on("slide",()=>{this.audio.play("slide"),this.character.setState("slide"),this.particles.emit("slide",e.worldPos,{count:10})}),t.on("fastfall",()=>{this.audio.play("whoosh")}),t.on("lanechange",n=>{this.audio.play("step",{pitch:1.2})}),t.on("turn",n=>{this.audio.play("turn"),this.particles.emit("dust",e.worldPos,{count:10}),this.character.setState("turn",n)}),t.on("stumble",n=>{this.audio.play("stumble"),this.followCam.addShake(.45),this.effects.flash(16746564,.25),this.character.setState("stumble"),this.particles.emit("dust",e.worldPos,{count:14}),this.threat=1}),t.on("smash",n=>{this.audio.play("smash"),this.followCam.addShake(.35),n.visual&&(Kh(n.visual),this.particles.emit("smash",e.worldPos,{count:20}))}),t.on("shieldbreak",n=>{this.audio.play("shieldbreak"),this.followCam.addShake(.4),this.effects.flash(6737151,.35),this.power.shield=0,n.visual&&Kh(n.visual),this.particles.emit("shieldpop",e.worldPos,{count:30}),this.hud.toast("Shield absorbed the hit!")}),t.on("die",n=>this._onDeath(n)),t.on("piece",n=>{this.audio.setBiome(n.kind)})}_bindInput(){this.input.on("action",t=>{this.state==="running"&&this.player.handleAction(t)}),this.input.on("tap",()=>{(this.state==="menu"||this.state==="dead")&&this._tapToStart()}),this.input.on("confirm",()=>{(this.state==="menu"||this.state==="dead")&&this._tapToStart()}),this.input.on("pause",()=>this.togglePause()),this.input.on("escape",()=>{this.state==="running"||this.state==="paused"?this.togglePause():this.state==="shop"&&this.closeShop()}),this.input.on("mute",()=>this.toggleSound()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="running"&&this.togglePause()})}_tapToStart(){this.hud.blocksTap&&this.hud.blocksTap()||this.startRun()}startRun(){if(this.state==="running")return;this.audio.unlock();let t=new URLSearchParams(location.search).get("seed");this.runSeed=t?Number(t):Math.random()*1e9|0,this.run=this._freshRun(),this.power={shield:0,magnet:0,boost:0},this.threat=1,this.slowmo=1,this.collectibles.reset(),this.particles.reset(),this.track.reset(this.runSeed),this.player.reset(this.track.root),this.character.reset(),this.character.setState("run"),this.monkeys.reset(),this._headingAngle=0,this.followCam.reset(0,this._computeAnchor()),this.followCam.angle=0,this.state="running",this.save.upgrades.head>0&&this.activatePower("boost",!0),this.audio.startMusic(),this.audio.play("start"),this.audio.play("monkeys"),this.input.clear(),this.events.emit("start"),this.hud.hideMenus()}_onDeath(t){this.run.deathType=t.type,this.state="dying",this.followCam.addShake(t.type==="fall"?.3:.9),this.character.setState(t.type==="fall"?"fall":t.type==="burn"?"burn":t.type==="caught"?"caught":"hit"),this.audio.play(t.type==="fall"?"fall":t.type==="burn"?"burn":"hit"),this.audio.play("monkeys"),t.type!=="fall"&&(this.monkeys.pounce(),this.effects.flash(t.type==="burn"?16733440:16777215,.5),this.particles.emit(t.type==="burn"?"ember":"smash",this.player.worldPos,{count:30})),this.threat=1,this.slowmo=.55,this.audio.stopMusic(1.2),this.events.emit("death",t),setTimeout(()=>this._finishRun(),1500)}_finishRun(){if(this.state!=="dying")return;this.state="dead";let t=this.save;t.runs++,t.coins+=this.run.coins,t.totalCoins+=this.run.coins,this.run.score=Math.floor(this.run.score),this.run.score>t.best&&(t.best=this.run.score,this.run.best=!0),this.run.distance>t.bestDistance&&(t.bestDistance=Math.floor(this.run.distance)),vo(t),this.events.emit("gameover",this.run),this.hud.showGameOver(this.run)}quitToMenu(){this.state!=="menu"&&(this.state="menu",this.audio.setPaused(!1),this.audio.stopMusic(.5),this.collectibles.reset(),this.particles.reset(),this.power={shield:0,magnet:0,boost:0},this.threat=.35,this.track.reset(Math.random()*1e9|0),this.player.reset(this.track.root),this.character.reset(),this.monkeys.reset(),this._headingAngle=0,this.followCam.reset(0,this._computeAnchor()),this.run=this._freshRun(),this.hud.showMenu("menu"),this.events.emit("menu"))}showMenu(){this.quitToMenu()}togglePause(){this.state==="running"?(this.state="paused",this.audio.setPaused(!0),this.hud.showPause(),this.events.emit("pause")):this.state==="paused"&&(this.state="running",this.audio.setPaused(!1),this.hud.hideMenus(),this.input.clear(),this.events.emit("resume"))}toggleSound(){let t=this.save.settings;t.sound=!t.sound,t.music=t.sound,this.audio.setEnabled(t.sound,t.music),vo(this.save),this.events.emit("settings")}setQuality(t){this.save.settings.quality=t,vo(this.save);let e=t==="auto"?this.resolveAutoQuality?this.resolveAutoQuality():"high":t;e!==this.quality&&(this.quality=e,this.effects.setQuality(e),this.env.setQuality(e),this.renderer.shadowMap.enabled=e!=="low",this.scene.traverse(n=>{if(n.material){let s=Array.isArray(n.material)?n.material:[n.material];for(let r of s)r.needsUpdate=!0}}),this.events.emit("quality",e)),this.events.emit("settings")}openShop(){(this.state==="menu"||this.state==="dead")&&(this._shopReturn=this.state,this.state="shop",this.hud.showShop())}closeShop(){this.state==="shop"&&(this.state=this._shopReturn||"menu",this.hud.showMenu(this.state==="dead"?"dead":"menu"))}buyUpgrade(t){let e=this.save.upgrades[t]||0,n=Ii[t];if(e>=n.max)return!1;let s=Zl(t,e);return this.save.coins<s?(this.audio.play("deny"),!1):(this.save.coins-=s,this.save.upgrades[t]=e+1,vo(this.save),this.audio.play("buy"),this.events.emit("upgrade",t),!0)}powerDuration(t){let e=this.save.upgrades[t]||0;return(t==="shield"?yt.shieldDuration:t==="magnet"?yt.magnetDuration:yt.boostDuration)+Ii[t].bonus(e)}activatePower(t,e=!1){this.power[t]=this.powerDuration(t),e||(this.audio.play("powerup",{type:t}),this.effects.flash(t==="shield"?5618687:t==="magnet"?16737962:16763955,.3),this.particles.emit("burst",this.player.worldPos,{count:30,type:t})),this.hud.toast(t==="shield"?"Shield!":t==="magnet"?"Coin Magnet!":"Boost!"),this.events.emit("power",t)}get multiplier(){let t=1+Math.floor(this.run.distance/yt.multiplierEvery);return Math.min(yt.maxMultiplier,t)*(this.power.boost>0?2:1)}_computeAnchor(){let t=this.player;return this.track.worldPosition(t.piece,t.u,t.lateral*.55,0,this._anchor)}update(t){let e=this.state==="running",n=this.state==="dying",s=t*(n?this.slowmo:1);if(this.time+=s,e||n){let m=this.player;for(let x of Sy)this.power[x]>0&&(this.power[x]-=s,this.power[x]<=0&&(this.power[x]=0,this.events.emit("powerend",x),e&&this.hud.toast("")));if(m.shield=this.power.shield>0,m.boost=this.power.boost>0,m.boostFactor=Math.min(1,this.power.boost),m.update(s),e){this.run.distance=m.distance,this.run.time+=s,this.run.multiplier=this.multiplier,this.run.score+=m.speed*s*yt.distanceScorePerMetre*this.run.multiplier;let x=m.stumbleTimer>0?0:.28;this.threat=Math.max(0,this.threat-x*s),m.runTime<5&&(this.threat=Math.max(this.threat,1-m.runTime/5));let g=this._ctxCollect;g.playerPos=m.worldPos,g.playerY=m.y,g.hitboxHeight=m.hitboxHeight,g.magnet=this.power.magnet>0||this.power.boost>0,g.magnetRadius=yt.magnetRadius+(this.power.boost>0?4:0),g.fwd=m.piece.fwd,g.speed=m.speed,g.time=this.time;let p=this.collectibles.update(s,g);if(p.coins>0){this.run.coins+=p.coins*1,this.run.score+=p.coins*(yt.coinScore+Ii.coin.bonus(this.save.upgrades.coin))*this.run.multiplier,this.audio.play("coin",{count:p.coins});for(let S of p.coinPositions)this.particles.emit("sparkle",S,{count:5});this.events.emit("coin",p.coins)}for(let _ of p.powerups)this.activatePower(_)}}let r=this.player,o=r.piece.angle;this._headingAngle=ue(this._headingAngle,this._headingAngle+wy(this._headingAngle,o),1/yt.turnHeadingTime*1.4,s);let a=this._computeAnchor();if(this.state==="menu")this.followCam.updateMenu(s,r.worldPos,this.time);else{let m=this._ctxCam;m.anchor=a,m.playerPos=r.worldPos,m.targetAngle=o,m.speed01=r.speed01,m.boost=this.power.boost>0,m.dead=!r.alive,m.deathType=r.deathType,m.playerY=r.y,this.followCam.update(s,m)}let l=this.character.group;l.position.copy(r.worldPos),l.rotation.y=this._headingAngle+(r.alive?-r.lateralVel*.045:0);let c=this.state==="menu",d=this._ctxChar;if(d.state=c?"idle":r.state,d.speed=c?0:r.speed,d.speed01=r.speed01,d.y=r.y,d.vy=r.vy,d.lateralVel=r.lateralVel,d.turnLean=r.turnLean,d.stumble01=r.stumbleTimer/yt.stumbleWindow,d.shield=r.shield,d.boost=r.boost,d.magnet=this.power.magnet>0,d.dead=!r.alive,d.deathType=r.deathType,d.deadTime=r.deadTime,d.time=this.time,this.character.update(s,d),r.alive&&r.state==="run"&&r.onGround){let m=.62/Math.max(.3,r.speed/yt.startSpeed);this.time-r.lastFootstep>m*.5&&(r.lastFootstep=this.time,this.audio.footstep(r.piece.kind),this.quality!=="low"&&this.particles.emit("dust",r.worldPos,{count:1,small:!0}))}if(this.quality!=="low"&&(e||n)&&(this._ambientTimer=(this._ambientTimer||0)-s,this._ambientTimer<=0)){let m=r.piece.kind;this._ambientTimer=.35;let x=this._ambientPos||(this._ambientPos=new F);x.copy(r.worldPos).addScaledVector(r.piece.fwd,14),m==="jungle"?this.particles.emit("leaf",x,{count:2}):m==="cliff"||m==="bridge"?(x.addScaledVector(r.piece.right,(Math.random()<.5?-1:1)*9),x.y-=2,this.particles.emit("mist",x,{count:2})):(m==="temple"||m==="ruins")&&(x.addScaledVector(r.piece.right,(Math.random()-.5)*6),x.y+=1.5,this.particles.emit("ember",x,{count:1}))}let h=this._ctxMonkeys;h.playerPos=r.worldPos,h.playerAngle=this._headingAngle,h.threat=this.threat,h.dead=!r.alive,h.deathType=r.deathType,h.speed01=r.speed01,h.time=this.time,h.running=e||n,h.deadTime=r.deadTime,this.monkeys.update(s,h),uf(this.time,1+r.speed01*.5);let u=this._ctxEnv;u.playerPos=r.worldPos,u.camera=this.camera,u.time=this.time,u.speed01=r.speed01,u.piece=r.piece,this.env.update(s,u),this.particles.update(s,this.camera),this.effects.setSpeed(r.alive?fe(r.speed01*.8+(this.power.boost>0?.5:0),0,1):0);let f=this._ctxAudio;f.speed01=r.speed01,f.threat=this.threat,f.running=e,f.boost=this.power.boost>0,f.piece=r.piece,f.playerPos=r.worldPos,this.audio.update(s,f),this.hud.update(s)}render(t){this.effects.render(t)}resize(){this.effects.resize()}};function wy(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var ep=24,Ty=600,nc=class extends sr{constructor(t){super(),this.target=t,this.queue=[],this._pointer=null,this._bind()}_bind(){let t=this.target,e=o=>{o.pointerType==="mouse"&&o.button!==0||(this._pointer={id:o.pointerId,x:o.clientX,y:o.clientY,t:performance.now(),done:!1},this.emit("tap-down"))},n=o=>{let a=this._pointer;if(!a||a.done||a.id!==o.pointerId)return;let l=o.clientX-a.x,c=o.clientY-a.y;Math.max(Math.abs(l),Math.abs(c))>=ep&&(a.done=!0,this._push(Math.abs(l)>Math.abs(c)?l>0?"right":"left":c>0?"down":"up","swipe"))},s=o=>{let a=this._pointer;if(!a||a.id!==o.pointerId)return;let l=performance.now()-a.t;if(!a.done&&l<Ty){let c=o.clientX-a.x,d=o.clientY-a.y;Math.max(Math.abs(c),Math.abs(d))>=ep*.6?this._push(Math.abs(c)>Math.abs(d)?c>0?"right":"left":d>0?"down":"up","swipe"):this.emit("tap",{x:o.clientX,y:o.clientY})}this._pointer=null};t.addEventListener("pointerdown",e),t.addEventListener("pointermove",n),t.addEventListener("pointerup",s),t.addEventListener("pointercancel",()=>{this._pointer=null}),t.addEventListener("contextmenu",o=>o.preventDefault());let r={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"up",KeyW:"up",Space:"up",ArrowDown:"down",KeyS:"down"};window.addEventListener("keydown",o=>{if(o.repeat)return;let a=r[o.code];a?(o.preventDefault(),this._push(a,"key")):o.code==="Enter"?this.emit("confirm"):o.code==="Escape"?this.emit("escape"):o.code==="KeyP"?this.emit("pause"):o.code==="KeyM"&&this.emit("mute")})}_push(t,e){this.queue.push({action:t,source:e,t:performance.now()}),this.queue.length>4&&this.queue.shift(),this.emit("action",t)}drain(t=250){let e=performance.now(),n=this.queue.filter(s=>e-s.t<=t).map(s=>s.action);return this.queue.length=0,n}clear(){this.queue.length=0}};function sp(){let i=Tl(),t=navigator.hardwareConcurrency||4;return i?t>=6?"medium":"low":"high"}function Ey(){let i=new URLSearchParams(location.search);if(i.get("quality"))return i.get("quality");let t=Jl().settings.quality;return t&&t!=="auto"?t:sp()}var np=i=>Math.min(window.devicePixelRatio||1,i==="high"?2:i==="medium"?1.5:1);function ip(){let i=document.getElementById("game"),t=Ey(),e=new Ml({canvas:i,antialias:t==="high",powerPreference:"high-performance",stencil:!1});e.setPixelRatio(np(t)),e.setSize(window.innerWidth,window.innerHeight,!1),e.shadowMap.enabled=t!=="low",e.shadowMap.type=ms,e.toneMapping=gs,e.toneMappingExposure=1.05,e.outputColorSpace=sn,e.info.autoReset=!1;let n=new Tr,s=new un(62,window.innerWidth/window.innerHeight,.1,400),r=new nc(document.getElementById("touch")),o=new ec({renderer:e,scene:n,camera:s,input:r,quality:t});window.__game=o,o.resolveAutoQuality=sp;let a=()=>{let p=window.innerWidth,_=window.innerHeight;s.aspect=p/_,s.updateProjectionMatrix(),e.setSize(p,_,!1),o.resize()};window.addEventListener("resize",a),a();let l=e.getPixelRatio(),c=l,d=0,h=0;o.events.on("quality",p=>{l=np(p),c=l,e.setPixelRatio(c),a()});function u(p){if(p<42&&c>.75?(d++,h=0):p>57&&c<l?(h++,d=0):(d=0,h=0),d>=3)c=Math.max(.75,c-.25),d=0;else if(h>=12)c=Math.min(l,c+.25),h=0;else return;e.setPixelRatio(c),a()}let f=null,m=0,x=performance.now();function g(p){requestAnimationFrame(g);let _=f===null?1/60:(p-f)/1e3;if(f=p,_<0&&(_=0),_>.05&&(_=.05),e.info.reset(),o.state==="paused"||o.state==="shop"){o.render(_);return}o.update(_),o.render(_),m++,p-x>=1e3&&(o.fps=m*1e3/(p-x),m=0,x=p,o.state==="running"&&!window.__noAdapt&&u(o.fps))}requestAnimationFrame(g)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ip):ip();})();
