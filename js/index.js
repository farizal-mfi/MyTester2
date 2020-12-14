$(document).ready(function(){

var ip = '192.168.100.15';
var ip_rmh = '192.168.100.34';
var ip_mobile = '192.168.43.152';
var ip_toko = '192.168.0.111';
var ip_d = "192.168.10.6";

	$("#field").hide();
	// $("#field-paket").hide();
	// $('#jns_wisata').hide();
	$('#orderr').hide();
	//  
	// document.getElementById("jns_wisata").disabled = true;
	// $('.booststrap-select').selectpicker();


	
	// $("#transport").html(function(){
	// 	// $.ajax({
	// 	// 	// data: "id=" + window.localStorage.getItem('id_user'),
 //  //          	type: "post",
 //  //          	url: "http://" + ip + "/skripsi_ci/index/transport",
 //  //          	dataType: "JSON",
 //  //          	success: function(data){
 //  //          		if(data.jenis == true) {
 //  //                 $('#jns_kendaraan').val('ada'); 
 //  //                 alert(data.isi[1].nama_kendaraan);
 //  //               } else {
 //  //                 // $('#email').val(data.profile.email);
 //  //                 alert('salah');
 //  //          	}
 //  //          }
	// 	// })
	// })
	$("#btnjourney").click(function(){
		if (window.localStorage.getItem('ceklogin')==0){
			Swal.fire({
  				position: 'center',
  				icon: 'error',
  				title: 'Anda belum login',
  				showConfirmButton: false,
  				timer: 1500
			})
		} else if(window.localStorage.getItem('ceklogin')==1){
			$("#modal-wisata").modal();
			// $.ajax({
			// type: "post",
			// url: "http://" + ip_rmh + "/skripsi_ci/index/paket",
			// dataType: "JSON",
			// success: function(data){
			// 	var html = '';
   //         		var i;
   //         		for(i=0; i<data.length; i++){
   //         			html += '<option value='+data[i].id+'>'+data[i].nama_paket+'</option>';
   //         		}
   //         		$('#paket').append(html);
   //         		// $('#paket').append('<option value="custom">Custom</option>');

			// }
		 //  })
		 $.ajax({
				url: "http://" + ip_rmh + "/skripsi_ci/index/wisata",
				dataType: "JSON",
				success: function(data){
					var html = '';
           			var i;
           			for(i=0; i<data.length; i++){
           				html += '<option value='+data[i].id_wisata+'>'+data[i].nama_wisata+'</option>';
           			}
           		// $('#jns_kendaraan').html(html);
           		$('.booststrap-select').html(html);
           		$('.booststrap-select').selectpicker();
				}
			})
		}
	})

	// $("#paket").change(function(){
	// 	var id_paket = $("#paket").val();
	// 	console.log(id_paket);

	// 	if (id_paket == 6){
	// 		$("#field-paket").show();

	// 		$.ajax({
	// 			url: "http://" + ip_rmh + "/skripsi_ci/index/wisata",
	// 			dataType: "JSON",
	// 			success: function(data){
	// 				var html = '';
 //           			var i;
 //           			for(i=0; i<data.length; i++){
 //           				html += '<option value='+data[i].id_wisata+'>'+data[i].nama_wisata+'</option>';
 //           			}
 //           		// $('#jns_kendaraan').html(html);
 //           		$('#jns_wisata').html(html);
 //           		$('#jns_wisata').selectpicker('refresh');
	// 			}
	// 		})
	// 	} 
	// 	// else if ($("#paket").val() == 'custom'){
			
	// 	// 	$("#field-paket").show();
	// 	// 	$.ajax({
	// 	// 	// data: "id=" + window.localStorage.getItem('id_user'),
 //  //          	type: "post",
 //  //          	url: "http://" + ip + "/skripsi_ci/index/wisata",
 //  //          	dataType: "JSON",
 //  //          	success: function(data){
 //  //          		var html = '';
 //  //          		var i;
 //  //          		for(i=0; i<data.length; i++){
 //  //          			html += '<option value='+data[i].id_wisata+'>'+data[i].nama_wisata+'</option>';
 //  //          		}
 //  //          		// $('#jns_kendaraan').html(html);
 //  //          		$('#jns_wisata').html(html);
 //  //          		$('#jns_wisata').selectpicker('refresh');
	// 	// 	  }
	// 	// 	});
	// 	// } else {
	// 	// 	$("#field-paket").hide();
	// 	// }
	// })

	$("#kendaraan").change(function(){
		if ($("#kendaraan").val() == 'IYA'){
			// $("#field").append('<br><input class="form-control" type="text" id="jns_kendaraan" name="jns_kendaraan" placeholder="jenis kendaraan" required="required"');
			$("#field").show();
			$.ajax({
			// data: "id=" + window.localStorage.getItem('id_user'),
           	type: "post",
           	url: "http://" + ip_toko + "/skripsi_ci/index/transport",
           	dataType: "JSON",
           	success: function(data){
           		var html = '';
           		var i;
           		for(i=0; i<data.length; i++){
           			html += '<option value='+data[i].id+'>'+data[i].nama_kendaraan+'</option>';
           		}
           		// $('#jns_kendaraan').html(html);
           		$('#jns_kendaraan').append(html);
			  }
			});
		} else {
			$("#field").hide();
		}
	});

	// $("#checkin").datetimepicker({
	// 	// useCurrent: false,
	// 	locale: 'id',
	// 	format: 'DD/MM/YYYY'
	// });

	// $("#checkout").datetimepicker({
	// 	useCurrent: false,
	// 	locale: 'id',
	// 	format: 'DD/MM/YYYY'
	// });

	// $("#checkin").on("dp.change", function(e) {
 //    	$('#checkout').data("DateTimePicker").minDate(e.date);
 //    	// CalcDiff()
 //  	});
  
 //    $("#checkout").on("dp.change", function(e) {
 //    	$("#checkin").data("DateTimePicker").maxDate(e.date);
 //  //   	var a=$('#checkin').data("DateTimePicker").date();
	// 	// var b=$('#checkout').data("DateTimePicker").date();
	// 	// console.log('A = '+a/86400000+ ' dan B='+b/86400000);
	// 	// $('#checkout').data("DateTimePicker").clear();
	// 	// $("#checkin").data("DateTimePicker").clear();
 //      	CalcDiff();	
 //    });
   
 //    function CalcDiff(){
 //    	var a=$('#checkin').data("DateTimePicker").date();
	// 	var b=$('#checkout').data("DateTimePicker").date();
	// 	console.log('A = '+a/86400000+ ' dan B='+b/86400000);
 //    	var timeDiff=0
 //     	if (b) {
 //            timeDiff = (b - a) / 1000;
 //        }
 		
 // 		var selisih = Math.floor(timeDiff/86400);
 // 		console.log(selisih);
 // 		// $('#selisih').val(Math.floor(timeDiff/(86400))+' Hari')
 // 		var hasil = (selisih * 3)-1;
 // 		console.log(hasil);
 // 		// $("#maks_wisata").val(hasil);   
	// }

	// $('#checkin').change(function(){
	// 	// $('.booststrap-select').attr('data-max-options','0');
	// 	// $('.booststrap-select').selectpicker('refresh');
	// 	$('.booststrap.select').prop('selected',true).trigger('change');
	// 	$('.booststrap.select').selectpicker('refresh');
	// });

	// $("#checkout").change(function(){
	// 	// timeDiff();
	// 	var tgl1 = $("#checkin").val();
	// 	var date1 = new Date(tgl1);

	// 	var tgl2 = $("#checkout").val();
	// 	var date2 = new Date(tgl2);

	// 	var time1 = date1.getTime();
	// 	var time2 = date2.getTime();

	// 	var selisih = (time2 - time1)/(1000*3600*24);
	// 	console.log(selisih);

	// 	var min = (selisih * 3) -  1;
	// 	console.log(min);
	// 	$("#jns_wisata").show();
	// 	$("#jns_wisata").attr("data-max-options",min);
	// 	$('#jns_wisata').selectpicker('refresh');
	// });

	// var min = 0;

	$('#checkin').change(function (){
		var tgl1 = $("#checkin").val();
		var date1 = new Date(tgl1);

		var tgl2 = $("#checkout").val();
		var date2 = new Date(tgl2);

		var time1 = date1.getTime();
		var time2 = date2.getTime();

		var selisih = (time2 - time1)/(1000*3600*24);
		console.log(selisih);

		var min = (selisih * 3) -  1;
		console.log(min);
		// $("#jns_wisata").show();
		// $('#jns_wisata').attr('data-max-options',min);
		// $('.booststrap-select').selectpicker('refresh');
	})

	$('#checkout').change(function (){
		var tgl1 = $("#checkin").val();
		var date1 = new Date(tgl1);

		var tgl2 = $("#checkout").val();
		var date2 = new Date(tgl2);

		var time1 = date1.getTime();
		var time2 = date2.getTime();

		var selisih = (time2 - time1)/(1000*3600*24);
		console.log(selisih);

		var min = (selisih * 3) -  1;
		console.log(min);
		// $("#jns_wisata").show();
		// $('#jns_wisata').attr('data-max-options',min);
		// $('.booststrap-select').selectpicker('refresh');
	})

	// $("#btnnext").click(function(){
	// 	var orang 		 = $("#orang").val();
	// 	var kendaran 	 = $("#kendaraan").val();
	// 	var jns_kendaran = $("#jns_kendaraan").val();
	// 	var checkin 	 = $("#checkin").val();
	// 	var checkout 	 = $("#checkout").val();

	// 	if(orang == ""){
	// 		// alert("Text orang kosong");	
	// 	} else if (kendaraan == ""){
	// 		alert("Text kendaraan kosong");
	// 	}
	// 	document.getElementById("orang").readOnly = true;
	// 	document.getElementById("kendaraan").readOnly = true;
	// 	document.getElementById("jns_kendaraan").readOnly = true;
	// 	document.getElementById("checkin").readOnly = true;
	// 	document.getElementById("checkout").readOnly = true;
	// })

	$('form > input.cek').keyup(function(){
		// var empty = false;
		
		// $('form#order > input.cek').each(function(){
		// 	if($(this).val() == ''){
		// 		empty = true;
		// 	}
		// });

		// if(empty){
		// 	$("#cobanext").attr("disabled","disabled");
		// } else {
		// 	$("#cobanext").removeAttr("disabled");
		// }
		// $("#cobanext").removeAttr("disabled");
		var a = $("#orang").val();
		alert(a);
		
	})

	$("#order").submit(function(e){
		e.preventDefault();
		var dataform = $("#order").serialize();

		$.ajax({
			type: "post",
            url: "http://" + ip + "/skripsi_ci/index/order",
            data: dataform,
			dataType: "JSON",
			success: function(resp){

			}
		})
	})

	

});