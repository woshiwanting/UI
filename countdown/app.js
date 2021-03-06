require(['./Countdown'], function (Countdown) {
	var countdown = new Countdown({
		beginTime: new Date(),
		endTime: '2015/11/25 17:44:50',
		precision: 10,
		onchange: function (time) {
			var tpl = '{day}天{hour}小时{minute}分钟{second}秒{millisecond}毫秒';
			var time = tpl.replace(/{day}/g, time.day)
					.replace(/{hour}/g, time.hour)
					.replace(/{minute}/g, time.minute)
					.replace(/{second}/g, time.second)
					.replace(/{millisecond}/g, time.millisecond);
				
			$('.time').html(time);
		},
		onEnd: function (time) {
			alert(time)
		}
	});
});