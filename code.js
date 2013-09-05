var highlighted = ["AK", "MA", "TX"]

$(document).ready(function(){
	for (var i = 0; i < 96; i++) {
		$("#chart").append('<div class="state" id="st'+i+'"></div>');
	};

	$("#st1").attr("id", "AK").addClass("truestate").append("<div class='statename'>AK</div>"); 
	$("#st11").attr("id", "ME").addClass("truestate").append("<div class='statename'>ME</div>");
	$("#st14").attr("id", "WA").addClass("truestate").append("<div class='statename'>WA</div>");
	$("#st16").attr("id", "MT").addClass("truestate").append("<div class='statename'>MT</div>");
	$("#st17").attr("id", "ND").addClass("truestate").append("<div class='statename'>ND</div>");
	$("#st18").attr("id", "MN").addClass("truestate").append("<div class='statename'>MN</div>");
	$("#st19").attr("id", "WI").addClass("truestate").append("<div class='statename'>WI</div>");
	$("#st20").attr("id", "MI").addClass("truestate").append("<div class='statename'>MI</div>");
	$("#st22").attr("id", "VT").addClass("truestate").append("<div class='statename'>VT</div>");
	$("#st23").attr("id", "NH").addClass("truestate").append("<div class='statename'>NH</div>");
	$("#st26").attr("id", "OR").addClass("truestate").append("<div class='statename'>OR</div>");
	$("#st27").attr("id", "ID").addClass("truestate").append("<div class='statename'>ID</div>");
	$("#st28").attr("id", "WY").addClass("truestate").append("<div class='statename'>WY</div>");
	$("#st29").attr("id", "SD").addClass("truestate").append("<div class='statename'>SD</div>");
	$("#st30").attr("id", "IA").addClass("truestate").append("<div class='statename'>IA</div>");
	$("#st31").attr("id", "IL").addClass("truestate").append("<div class='statename'>IL</div>");
	$("#st32").attr("id", "OH").addClass("truestate").append("<div class='statename'>OH</div>");
	$("#st33").attr("id", "PA").addClass("truestate").append("<div class='statename'>PA</div>");
	$("#st34").attr("id", "CT").addClass("truestate").append("<div class='statename'>CT</div>");
	$("#st35").attr("id", "MA").addClass("truestate").append("<div class='statename'>MA</div>");
	$("#st36").attr("id", "HI").addClass("truestate").append("<div class='statename'>HI</div>");
	$("#st38").attr("id", "CA").addClass("truestate").append("<div class='statename'>CA</div>");
	$("#st39").attr("id", "NV").addClass("truestate").append("<div class='statename'>NV</div>");
	$("#st40").attr("id", "CO").addClass("truestate").append("<div class='statename'>CO</div>");
	$("#st41").attr("id", "NE").addClass("truestate").append("<div class='statename'>NE</div>");
	$("#st42").attr("id", "MO").addClass("truestate").append("<div class='statename'>MO</div>");
	$("#st43").attr("id", "IN").addClass("truestate").append("<div class='statename'>IN</div>");
	$("#st44").attr("id", "WV").addClass("truestate").append("<div class='statename'>WV</div>");
	$("#st45").attr("id", "MD").addClass("truestate").append("<div class='statename'>MD</div>");
	$("#st46").attr("id", "NY").addClass("truestate").append("<div class='statename'>NY</div>");
	$("#st47").attr("id", "RI").addClass("truestate").append("<div class='statename'>RI</div>");
	$("#st51").attr("id", "AZ").addClass("truestate").append("<div class='statename'>AZ</div>");
	$("#st52").attr("id", "UT").addClass("truestate").append("<div class='statename'>UT</div>");
	$("#st53").attr("id", "KS").addClass("truestate").append("<div class='statename'>KS</div>");
	$("#st54").attr("id", "AR").addClass("truestate").append("<div class='statename'>AR</div>");
	$("#st55").attr("id", "TN").addClass("truestate").append("<div class='statename'>TN</div>");
	$("#st56").attr("id", "KY").addClass("truestate").append("<div class='statename'>KY</div>");
	$("#st57").attr("id", "VA").addClass("truestate").append("<div class='statename'>VA</div>");
	$("#st58").attr("id", "DC").addClass("truestate").append("<div class='statename'>DC</div>");
	$("#st59").attr("id", "NJ").addClass("truestate").append("<div class='statename'>NJ</div>");
	$("#st64").attr("id", "NM").addClass("truestate").append("<div class='statename'>NM</div>");
	$("#st65").attr("id", "OK").addClass("truestate").append("<div class='statename'>OK</div>");
	$("#st66").attr("id", "LA").addClass("truestate").append("<div class='statename'>LA</div>");
	$("#st67").attr("id", "MS").addClass("truestate").append("<div class='statename'>MS</div>");
	$("#st68").attr("id", "AL").addClass("truestate").append("<div class='statename'>AL</div>");
	$("#st69").attr("id", "SC").addClass("truestate").append("<div class='statename'>SC</div>");
	$("#st70").attr("id", "NC").addClass("truestate").append("<div class='statename'>NC</div>");
	$("#st71").attr("id", "DE").addClass("truestate").append("<div class='statename'>DE</div>");
	$("#st76").attr("id", "TX").addClass("truestate").append("<div class='statename'>TX</div>");
	$("#st80").attr("id", "GA").addClass("truestate").append("<div class='statename'>GA</div>");
	$("#st92").attr("id", "FL").addClass("truestate").append("<div class='statename'>FL</div>");

	var w = $(".state").width();
	$(".state").height(w);

	$(window).resize(function(){
		w = $(".state").width();
		$(".state").height(w);
	})

	$(".truestate").mouseover(function(){
		$(this).css("cursor","pointer").css("box-shadow","inset 0px 0px 10px 2px #666");
	});
	$(".truestate").mouseout(function(){
		$(this).css("box-shadow","0px 0px 0px 0px #CCC");
	});

	for (var i = 0; i < highlighted.length; i++) {
		$("#"+highlighted[i]).css("background","#9B1518");
	};


});
