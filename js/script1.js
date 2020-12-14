var ip ="192.168.100.152";
var ip_rmh = "192.168.100.34";

$(document).ready(function(){
  //  tampilData();
    $("#form-tambah").submit(function(e){
        e.preventDefault();
        
        var dataform = $("#form-tambah").serialize();
        $.ajax({
            url: "http://" + ip + "/skripsi_ci/Page/tambahdata",
            type: "post",
            data: dataform,
            dataType: "JSON",
            success: function(data){
            	alert('successssss');
            	$('[name="nama"]').val("");
            	$('[name="jenis_kelamin"]').val("");
            	$('[name="telepon"]').val("");
            	$('[name="alamat"]').val("");
            	$('#modal-wisata').modal('hide');
            }
        }); 
    });
    
    $("#form-profile").submit(function(e){
        e.preventDefault();
        
        var editform = $("#form-profile").serialize();
        $.ajax({
            url: "http://" + ip + "/skripsi_ci/Page/editData",
            type: "post",
            data: editform,
            dataType: "JSON",
            success: function(data){
                console.log(data);
                //$("#form-edit").load(data);	
            }
        });
    });

//    $("#tampilData").html(function(e){
//       $.ajax ({
//        type    :"POST",
//        url     :"http://" + ip + "/skripsi_ci/auth/login",
//        dataType:"JSON",
//        success :function(data){
//            //console.log(data);
//            $('[name="nama"]').val();
//            $('[name="id"]').val();
//            $('[name="jenis_kelamin"]').val();
//            $('[name="telepon"]').val();
//            $('[name="alamat"]').val();
//        }
//       }); 
//    });

});