(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1280,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/banner_atlas_.png", id:"banner_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"banner_atlas_", frames: [[0,5789,2592,1728],[0,0,5184,3456],[0,3458,5184,2329]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.IMG_2119 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IMG_3716 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.IMG_3727 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehj+AOEIAA8HMDH9AAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-90,1280,180);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IMG_3727();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1294.9,581.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IMG_3716();
	this.instance.setTransform(0,0,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1308,872);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IMG_2119();
	this.instance.setTransform(0,0,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1291.6,861);


// stage content:
(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text = new cjs.Text("By Samia Hoque", "44px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 414;
	this.text.setTransform(671.2,100.1);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,9);

	this.text_1 = new cjs.Text("My Photography", "58px 'Times New Roman'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 66;
	this.text_1.lineWidth = 568;
	this.text_1.setTransform(671.8,26);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,0,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(145));

	// building bg
	this.instance = new lib.Symbol5();
	this.instance.setTransform(654,139,1,1,0,0,0,654,436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:138.3},0).wait(1).to({y:137.5},0).wait(1).to({y:136.8},0).wait(1).to({y:136},0).wait(1).to({y:135.2},0).wait(1).to({y:134.5},0).wait(1).to({y:133.7},0).wait(1).to({y:132.9},0).wait(1).to({y:132.2},0).wait(1).to({y:131.4},0).wait(1).to({y:130.6},0).wait(1).to({y:129.9},0).wait(1).to({y:129.1},0).wait(1).to({y:128.3},0).wait(1).to({y:127.6},0).wait(1).to({y:126.8},0).wait(1).to({y:126},0).wait(1).to({y:125.3},0).wait(1).to({y:124.5},0).wait(1).to({y:123.7},0).wait(1).to({y:123},0).wait(1).to({y:122.2},0).wait(1).to({y:121.4},0).wait(1).to({y:120.7},0).wait(1).to({y:119.9},0).wait(1).to({y:119.2},0).wait(1).to({y:118.4},0).wait(1).to({y:117.6},0).wait(1).to({y:116.9},0).wait(1).to({y:116.1},0).wait(1).to({y:115.3},0).wait(1).to({y:114.6},0).wait(1).to({y:113.8},0).wait(1).to({y:113},0).wait(1).to({y:112.3},0).wait(1).to({y:111.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110},0).wait(1).to({y:109.2},0).wait(1).to({y:108.4},0).wait(1).to({y:107.7},0).wait(1).to({y:106.9},0).wait(1).to({y:106.1},0).wait(1).to({y:105.4},0).wait(1).to({y:104.6},0).wait(1).to({y:103.8},0).wait(1).to({y:103.1},0).wait(1).to({y:102.3},0).wait(1).to({y:101.5},0).to({_off:true},1).wait(95));

	// beach bg
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(640.8,149.5,1,1,0,0,0,645.8,430.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:148.5},0).wait(1).to({y:147.4},0).wait(1).to({y:146.3},0).wait(1).to({y:145.3},0).wait(1).to({y:144.2},0).wait(1).to({y:143.1},0).wait(1).to({y:142.1},0).wait(1).to({y:141},0).wait(1).to({y:139.9},0).wait(1).to({y:138.9},0).wait(1).to({y:137.8},0).wait(1).to({y:136.7},0).wait(1).to({y:135.6},0).wait(1).to({y:134.6},0).wait(1).to({y:133.5},0).wait(1).to({y:132.4},0).wait(1).to({y:131.4},0).wait(1).to({y:130.3},0).wait(1).to({y:129.2},0).wait(1).to({y:128.2},0).wait(1).to({y:127.1},0).wait(1).to({y:126},0).wait(1).to({y:124.9},0).wait(1).to({y:123.9},0).wait(1).to({y:122.8},0).wait(1).to({y:121.7},0).wait(1).to({y:120.7},0).wait(1).to({y:119.6},0).wait(1).to({y:118.5},0).wait(1).to({y:117.5},0).wait(1).to({y:116.4},0).wait(1).to({y:115.3},0).wait(1).to({y:114.3},0).wait(1).to({y:113.2},0).wait(1).to({y:112.1},0).wait(1).to({y:111},0).wait(1).to({y:110},0).wait(1).to({y:108.9},0).wait(1).to({y:107.8},0).wait(1).to({y:106.8},0).wait(1).to({y:105.7},0).wait(1).to({y:104.6},0).wait(1).to({y:103.6},0).wait(1).to({y:102.5},0).wait(1).to({y:101.4},0).wait(1).to({y:100.3},0).wait(1).to({y:99.3},0).wait(1).to({y:98.2},0).wait(1).to({y:97.1},0).wait(1).to({y:96.1},0).wait(1).to({y:95},0).wait(1).to({y:93.9},0).wait(1).to({y:92.9},0).wait(1).to({y:91.8},0).wait(1).to({y:90.7},0).wait(1).to({y:89.7},0).wait(1).to({y:88.6},0).wait(1).to({y:87.5},0).wait(1).to({y:86.4},0).wait(1).to({y:85.4},0).wait(1).to({y:84.3},0).wait(1).to({y:83.2},0).wait(1).to({y:82.2},0).wait(1).to({y:81.1},0).wait(1).to({y:80},0).wait(1).to({y:79},0).wait(1).to({y:77.9},0).wait(1).to({y:76.8},0).wait(1).to({y:75.7},0).wait(1).to({y:74.7},0).wait(1).to({y:73.6},0).wait(1).to({y:72.5},0).wait(1).to({y:71.5},0).wait(1).to({y:70.4},0).wait(1).to({y:69.3},0).wait(1).to({y:68.3},0).wait(1).to({y:67.2},0).wait(1).to({y:66.1},0).wait(1).to({y:65},0).wait(1).to({y:64},0).wait(1).to({y:62.9},0).wait(1).to({y:61.8},0).wait(1).to({y:60.8},0).wait(1).to({y:59.7},0).wait(1).to({y:58.6},0).wait(1).to({y:57.6},0).wait(1).to({y:56.5},0).wait(1).to({y:55.4},0).wait(1).to({y:54.4},0).wait(1).to({y:53.3},0).wait(1).to({y:52.2},0).wait(1).to({y:51.1},0).wait(1).to({y:50.1},0).wait(1).to({y:49},0).wait(1).to({y:47.9},0).wait(1).to({y:46.9},0).to({_off:true},1).wait(48));

	// brighton
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(647.5,-103.1,1,1,0,0,0,647.5,290.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:647.4,regY:290.8,x:647.4,y:-102.4},0).wait(1).to({y:-101.7},0).wait(1).to({y:-101},0).wait(1).to({y:-100.2},0).wait(1).to({y:-99.5},0).wait(1).to({y:-98.8},0).wait(1).to({y:-98},0).wait(1).to({y:-97.3},0).wait(1).to({y:-96.6},0).wait(1).to({y:-95.8},0).wait(1).to({y:-95.1},0).wait(1).to({y:-94.4},0).wait(1).to({y:-93.6},0).wait(1).to({y:-92.9},0).wait(1).to({y:-92.2},0).wait(1).to({y:-91.4},0).wait(1).to({y:-90.7},0).wait(1).to({y:-90},0).wait(1).to({y:-89.2},0).wait(1).to({y:-88.5},0).wait(1).to({y:-87.8},0).wait(1).to({y:-87.1},0).wait(1).to({y:-86.3},0).wait(1).to({y:-85.6},0).wait(1).to({y:-84.9},0).wait(1).to({y:-84.1},0).wait(1).to({y:-83.4},0).wait(1).to({y:-82.7},0).wait(1).to({y:-81.9},0).wait(1).to({y:-81.2},0).wait(1).to({y:-80.5},0).wait(1).to({y:-79.7},0).wait(1).to({y:-79},0).wait(1).to({y:-78.3},0).wait(1).to({y:-77.5},0).wait(1).to({y:-76.8},0).wait(1).to({y:-76.1},0).wait(1).to({y:-75.3},0).wait(1).to({y:-74.6},0).wait(1).to({y:-73.9},0).wait(1).to({y:-73.1},0).wait(1).to({y:-72.4},0).wait(1).to({y:-71.7},0).wait(1).to({y:-71},0).wait(1).to({y:-70.2},0).wait(1).to({y:-69.5},0).wait(1).to({y:-68.8},0).wait(1).to({y:-68},0).wait(1).to({y:-67.3},0).wait(1).to({y:-66.6},0).wait(1).to({y:-65.8},0).wait(1).to({y:-65.1},0).wait(1).to({y:-64.4},0).wait(1).to({y:-63.6},0).wait(1).to({y:-62.9},0).wait(1).to({y:-62.2},0).wait(1).to({y:-61.4},0).wait(1).to({y:-60.7},0).wait(1).to({y:-60},0).wait(1).to({y:-59.2},0).wait(1).to({y:-58.5},0).wait(1).to({y:-57.8},0).wait(1).to({y:-57},0).wait(1).to({y:-56.3},0).wait(1).to({y:-55.6},0).wait(1).to({y:-54.9},0).wait(1).to({y:-54.1},0).wait(1).to({y:-53.4},0).wait(1).to({y:-52.7},0).wait(1).to({y:-51.9},0).wait(1).to({y:-51.2},0).wait(1).to({y:-50.5},0).wait(1).to({y:-49.7},0).wait(1).to({y:-49},0).wait(1).to({y:-48.3},0).wait(1).to({y:-47.5},0).wait(1).to({y:-46.8},0).wait(1).to({y:-46.1},0).wait(1).to({y:-45.3},0).wait(1).to({y:-44.6},0).wait(1).to({y:-43.9},0).wait(1).to({y:-43.1},0).wait(1).to({y:-42.4},0).wait(1).to({y:-41.7},0).wait(1).to({y:-40.9},0).wait(1).to({y:-40.2},0).wait(1).to({y:-39.5},0).wait(1).to({y:-38.8},0).wait(1).to({y:-38},0).wait(1).to({y:-37.3},0).wait(1).to({y:-36.6},0).wait(1).to({y:-35.8},0).wait(1).to({y:-35.1},0).wait(1).to({y:-34.4},0).wait(1).to({y:-33.6},0).wait(1).to({y:-32.9},0).wait(1).to({y:-34},0).wait(1).to({y:-35},0).wait(1).to({y:-36.1},0).wait(1).to({y:-37.2},0).wait(1).to({y:-38.2},0).wait(1).to({y:-39.3},0).wait(1).to({y:-40.4},0).wait(1).to({y:-41.4},0).wait(1).to({y:-42.5},0).wait(1).to({y:-43.6},0).wait(1).to({y:-44.6},0).wait(1).to({y:-45.7},0).wait(1).to({y:-46.8},0).wait(1).to({y:-47.8},0).wait(1).to({y:-48.9},0).wait(1).to({y:-50},0).wait(1).to({y:-51.1},0).wait(1).to({y:-52.1},0).wait(1).to({y:-53.2},0).wait(1).to({y:-54.3},0).wait(1).to({y:-55.3},0).wait(1).to({y:-56.4},0).wait(1).to({y:-57.5},0).wait(1).to({y:-58.5},0).wait(1).to({y:-59.6},0).wait(1).to({y:-60.7},0).wait(1).to({y:-61.7},0).wait(1).to({y:-62.8},0).wait(1).to({y:-63.9},0).wait(1).to({y:-64.9},0).wait(1).to({y:-66},0).wait(1).to({y:-67.1},0).wait(1).to({y:-68.1},0).wait(1).to({y:-69.2},0).wait(1).to({y:-70.3},0).wait(1).to({y:-71.3},0).wait(1).to({y:-72.4},0).wait(1).to({y:-73.5},0).wait(1).to({y:-74.5},0).wait(1).to({y:-75.6},0).wait(1).to({y:-76.7},0).wait(1).to({y:-77.7},0).wait(1).to({y:-78.8},0).wait(1).to({y:-79.9},0).wait(1).to({y:-80.9},0).wait(1).to({y:-82},0).wait(1).to({y:-83.1},0).wait(1).to({y:-84.2},0).wait(1));

	// background
	this.movieClip_1 = new lib.Symbol7();
	this.movieClip_1.setTransform(640,90);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(635,-304,1313,974);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;