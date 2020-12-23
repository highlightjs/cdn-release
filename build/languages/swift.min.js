hljs.registerLanguage("swift",(()=>{"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(e){return i("(?=",e,")")}
function i(...n){return n.map((n=>e(n))).join("")}function a(...n){
return"("+n.map((n=>e(n))).join("|")+")"}
const t=e=>i(/\b/,e,/\w$/.test(e)?/\b/:/\B/),u=["Protocol","Type"].map(t),s=["init","self"].map(t),r=["Any","Self"],o=["associatedtype",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough","fileprivate(set)","fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout","internal(set)","internal","in","is","lazy","let","mutating","nonmutating","open(set)","open","operator","optional","override","postfix","precedencegroup","prefix","private(set)","private","protocol","public(set)","public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias","unowned(safe)","unowned(unsafe)","unowned","var","weak","where","while","willSet"],l=["false","nil","true"],c=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],b=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],p=a(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),F=a(p,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),d=i(p,F,"*"),g=a(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFFFD]/),f=a(g,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),m=i(g,f,"*"),w=i(/[A-Z]/,f,"*"),E=["autoclosure",i(/convention\(/,a("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",i(/objc\(/,m,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],y=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
;return e=>{const p=e.COMMENT("/\\*","\\*/",{contains:["self"]}),g={
className:"keyword",begin:i(/\./,n(a(...u,...s))),end:a(...u,...s),
excludeBegin:!0},A={begin:i(/\./,a(...o)),relevance:0
},C=o.filter((e=>"string"==typeof e)).concat(["_|0"]),v={variants:[{
className:"keyword",
begin:a(...o.filter((e=>"string"!=typeof e)).concat(r).map(t),...s)}]},_={
$pattern:a(/\b\w+(\(\w+\))?/,/#\w+/),keyword:C.concat(c).join(" "),
literal:l.join(" ")},N=[g,A,v],D=[{begin:i(/\./,a(...b)),relevance:0},{
className:"built_in",begin:i(/\b/,a(...b),/(?=\()/)}],B={begin:/->/,relevance:0
},M=[B,{className:"operator",relevance:0,variants:[{begin:d},{
begin:`\\.(\\.|${F})+`}]}],h="([0-9a-fA-F]_*)+",S={className:"number",
relevance:0,variants:[{
begin:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{
begin:`\\b0x(${h})(\\.(${h}))?([pP][+-]?(([0-9]_*)+))?\\b`},{
begin:/\b0o([0-7]_*)+\b/},{begin:/\b0b([01]_*)+\b/}]},O=(e="")=>({
className:"subst",variants:[{begin:i(/\\/,e,/[0\\tnr"']/)},{
begin:i(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),x=(e="")=>({className:"subst",
begin:i(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),k=(e="")=>({className:"subst",
label:"interpol",begin:i(/\\/,e,/\(/),end:/\)/}),L=(e="")=>({begin:i(e,/"""/),
end:i(/"""/,e),contains:[O(e),x(e),k(e)]}),I=(e="")=>({begin:i(e,/"/),
end:i(/"/,e),contains:[O(e),k(e)]}),$={className:"string",
variants:[L(),L("#"),L("##"),L("###"),I(),I("#"),I("##"),I("###")]},T=[{
begin:i(/`/,m,/`/)},{className:"variable",begin:/\$\d+/},{className:"variable",
begin:`\\$${f}+`}],j=[{begin:/(@|#)available\(/,end:/\)/,keywords:{
$pattern:/[@#]?\w+/,keyword:y.concat(["@available","#available"]).join(" ")},
contains:[...M,S,$]},{className:"keyword",begin:i(/@/,a(...E))},{
className:"meta",begin:i(/@/,m)}],K={begin:n(/\b[A-Z]/),relevance:0,contains:[{
className:"type",
begin:i(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")
},{className:"type",begin:w,relevance:0},{begin:/[?!]+/,relevance:0},{
begin:/\.\.\./,relevance:0},{begin:i(/\s+&\s+/,n(w)),relevance:0}]},P={
begin:/</,end:/>/,keywords:_,contains:[...N,...j,B,K]};K.contains.push(P)
;for(const e of $.variants){const n=e.contains.find((e=>"interpol"===e.label))
;n.keywords=_;const i=[...N,...D,...M,S,$,...T];n.contains=[...i,{begin:/\(/,
end:/\)/,contains:["self",...i]}]}return{name:"Swift",keywords:_,
contains:[e.C_LINE_COMMENT_MODE,p,{className:"function",beginKeywords:"func",
end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{
begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",
begin:/\(/,end:/\)/,endsParent:!0,keywords:_,
contains:["self",...N,S,$,e.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],
illegal:/\[|%/},{className:"class",
beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,
keywords:_,contains:[e.inherit(e.TITLE_MODE,{
begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...N]},{beginKeywords:"import",
end:/$/,contains:[e.C_LINE_COMMENT_MODE,p],relevance:0
},...N,...D,...M,S,$,...T,...j,K]}}})());