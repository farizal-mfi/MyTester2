var ip ="192.168.100.152"; //ip server
$(document).ready(function(){
   
    $("#form-tambah").submit(function(e) {
        e.preventDefault();
        
        var dataform = $("#form-tambah").serialize();
        alert($('#nama').val());
        console.log(dataform);
        $.ajax({
            url: "http://" + ip + "/skripsi_ci/Page/tambahdata",
            type: "post",
            data: dataform,
            dataType: "JSON",
            success: function(data){
                $('[name="nama"]').val("");
                $('[name="jenis_kelamin"]').val("");
                $('[name="telepon"]').val("");
                $('[name="alamat"]').val("");
                $('#modal-wisata').modal('hide');
            }
        });
        
    });
});
// var ip ="192.168.100.152"; //ip server
// $(document).ready(function(){
//     var data = "data.php";
//     $('#data-mahasiswa').load(data);
   
//     $("#form-tambah").submit(function(e) {
//         e.preventDefault();
       
//         $("#error_nama").html('');
//         $("#error_jenis_kelamin").html('');
//         $("#error_telepon").html('');
//         $("#error_alamat").html('');
       
//         var dataform = $("#form-tambah").serialize();
//         $.ajax({
//             url: "http://" + ip + "/skripsi_ci/Page/tambahdata",
//             type: "post",
//             dataType: 'json',
//             data: dataform,
//             success: function(result) {
//                 console.log(result);
//                 alert(result.data.nama);
//                 if(result.status == 1){
//                     alert('berhasil');
//                 }else{
//                     alert('gagal');
//                 }
// //                alert(result[])
// //                var hasil = JSON.parse(result);
// //                if (hasil.hasil !== "sukses") {
// //                    $("#error_nama").html(hasil.error.nama);
// //                    $("#error_jenis_kelamin").html(hasil.error.jenis_kelamin);
// //                    $("#error_telepon").html(hasil.error.telepon);
// //                    $("#error_alamat").html(hasil.error.alamat);
// //                } else {
// //                    $('#modal-wisata').modal('hide');
// //                    $("#nama").val('');
// //                    $("#jenis_kelamin").val('');
// //                    $("#telepon").val('');
// //                    $("#alamat").val('');
// //                    $('#data-mahasiswa').load(data);
// //                }
//             }
//         });
//     });
   
//     $(document).on('click','#edit',function(e){
//         e.preventDefault();
//         $("#modal-edit").modal('show');
//         $.post('edit.php',
//             {id:$(this).attr('data-id')},
//             function(html){
//                 $("#data-edit").html(html);
//             }  
//         );
//     });
   
   
//     $("#form-edit").submit(function(e) {
//         e.preventDefault();
       
//         $("#error_nama").html('');
//         $("#error_jenis_kelamin").html('');
//         $("#error_telepon").html('');
//         $("#error_alamat").html('');
       
//         var dataform = $("#form-edit").serialize();
//         $.ajax({
//             url: "update.php",
//             type: "post",
//             data: dataform,
//             success: function(result) {
//                 var hasil = JSON.parse(result);
//                 if (hasil.hasil !== "sukses") {
//                     $("#error_edit_nama").html(hasil.error.edit_nama);
//                     $("#error_edit_jenis_kelamin").html(hasil.error.edit_jenis_kelamin);
//                     $("#error_edit_telepon").html(hasil.error.edit_telepon);
//                     $("#error_edit_alamat").html(hasil.error.edit_alamat);
//                 } else {
//                     $('#modal-edit').modal('hide');
//                     $("#nama").val('');
//                     $("#jenis_kelamin").val('');
//                     $("#telepon").val('');
//                     $("#alamat").val('');
//                     $('#data-mahasiswa').load(data);
//                 }
//             }
//         });
//     });
   
   
//     $(document).on('click','#hapus',function(e){
//         e.preventDefault();
//         $.post('hapus.php',
//             {id:$(this).attr('data-id')},
//             function(html){
//                 $('#data-mahasiswa').load(data);           
//             }  
//         );
//     });
 
 
// });