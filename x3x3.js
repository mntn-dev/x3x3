/*x3x3-0.3;(c)2018 - Mntn(r) <https://mn.tn/> c/o Benjamin Lips <g--[AT]--mn.tn>;MIT-Licensed <https://mit-license.org/>;

Usage:

x3x3.txt('hello world.'[,mask_char='#']); //valid chars: a-z 0-9 |_=+*-.,:'/[](){}<>"$€°\
x3x3.svg('hello world.'[,box_size=10,color='black']);

Demo:

https://rawgit.com/mntn-dev/x3x3/master/demo.htm


*/


;var x3x3={
 
 svg:function(o,d,f){
  if(isNaN(d))d=10;
  if(!(o=x3x3.txt(o)))return;
  o=o.split('\n');
  _='';
  c=Math.random().toString(36).substr(2,3);
  for(l=0;l<3;l++)for(j=0;j<o[1].length-1;j++)if(o[l+1][j]!=' ')_+='<rect class="_'+c+'" x="'+(j*d)+'" y="'+(l*d)+'"/>';
  return ('<svg width="'+(w=((o[1].length-1)*d))+'" height="'+(h=(d*3))+'" viewBox="0 0 '+w+' '+h+
  '" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><style type="text/css">'+
  '<![CDATA[._'+c+'{height:'+d+';width:'+d+';fill:'+(f?f:'#000')+';}]]></style>'+_+'</svg>');
  },
 
 txt:function(o,m=!1){
  _='a ^ ^^^^ ^b^^ ^^^^^^c^^^^  ^^^d^^ ^ ^^^ e^^^^^ ^^^f^^^^^ ^  g^^ ^ ^^^^h^ ^^^^^ ^'+
    'i^^^ ^ ^^^j  ^  ^^^ k^ ^^^ ^ ^l^  ^  ^^^m^^^^^^^ ^n^^^^ ^^ ^o^^^^ ^^^^p^^^^^^^  '+
    'q^^^^^^  ^r^^^^  ^  s ^^ ^ ^^ t^^^ ^  ^ u^ ^^ ^^^^v^ ^^ ^ ^ w^ ^^^^^^^x^ ^ ^ ^ ^'+
    'y^ ^ ^  ^ z^^  ^  ^^0^^^^ ^^^^1^^  ^ ^^^2^^  ^  ^^3^^^ ^^^^^4^ ^^^^  ^5 ^^ ^ ^^ '+
    '6^  ^^^^^^7^^^  ^  ^8 ^^^^^^^^9^^^^^^  ^"^^ ^^    *    ^    -   ^^^   + ^ ^^^ ^ '+
    ',    ^  ^ .       ^ /  ^ ^ ^  (  ^ ^   ^)^   ^ ^  : ^     ^ =^^^   ^^^[ ^^ ^  ^^'+
    ']^^  ^ ^^ _      ^^^| ^  ^  ^ {  ^ ^   ^}^   ^ ^  <  ^ ^   ^>^   ^ ^  ° ^ ^ ^ ^ '+
    '\\^   ^   ^\' ^  ^    $ ^^ ^ ^^ € ^^^^  ^^';
    
  if(!(o=o.toString().toLowerCase()).match(/^[\|\_\=\+\*\-\.,:'\/\[\]\(\)\{\}$€\\<>°"a-z0-9 ]+$/))return;
  _1=['','',''];
  for(j=0;j<o.length;j++){
   if(o[j]==' ')s=o[j].repeat(9);else s=_.substr(_.indexOf(o[j])+1,9);
   _1[0]+=s.substr(0,3)+' ';
   _1[1]+=s.substr(3,3)+' ';
   _1[2]+=s.substr(6,3)+' ';
  }
  return(('\n'+_1.join('\n')+'\n').replace(/\^/g,(m?m[0]:'#')));
  }
}
