var ip ="192.168.100.15";
var ip_rmh = "192.168.100.34";
var ip_hp = "192.168.43.152";
var d = "192.168.10.6";

$(document).ready(function(){
    
    $("#register input, #register textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form,event,errors){
        }
    });
    
    $("#form-login input").jqBootstrapValidation({   
        preventSubmit: true,
        submitError: function($form,event,errors){
        }
    });
    
    $("#form-edit-profile input, #form-edit-profile textarea").jqBootstrapValidation({   
        preventSubmit: true,
        submitError: function($form,event,errors){
        }
    });

    $(".collapse.in").collapse('hide');
    
    $("#icon").click(function(){
        //mendapatkan atribute type
         var tipe = $("#password").attr('type');
        //untuk menyimpan type yang baru
        var newtipe = '';
        
        if(tipe  == 'text'){
            newtipe = 'password';
        } else if(tipe  == 'password'){
            newtipe = 'text';
        }
        
        
        //setting input dengan tipe baru
        $('#password').attr("type",newtipe);
    });
    
    $("#icon1").click(function(){
        //mendapatkan atribute type
         var tipe = $("#conf_password").attr('type');
        //untuk menyimpan type yang baru
        var newtipe = '';
        
        if(tipe == 'text'){
            newtipe = 'password';
        } else if(tipe == 'password'){
            newtipe = 'text';
        }
        
        //setting input dengan tipe baru
        $('#conf_password').attr("type",newtipe);
    });
    
    $("#email").blur(function(){
        var email = $(this).val();
        var ip = 
        $.ajax({
            type: "POST",
            url: "http://" + ip_rmh + "/skripsi_ci/Auth/cek_email",
            data: 'email='+email,
            dataType: "JSON",
            success: function(email){
 //               $("#message").text("Email is already");
                if(email.duplicate){
                    $("#message").html("Email is already"); 
                }
            }
        });
    });

    $("#register").submit(function(e){
        e.preventDefault();
        
        $("#loader").addClass("loader");
        var dataform = $("#register").serialize();

        $.ajax({
            type: "post",
            url: "http://" + ip_rmh + "/skripsi_ci/Auth/register",
            data: dataform,
            dataType: "JSON",
            success: function(resp){
                if (resp.duplicate){
//                  alert('email sama');
                    // $("#message").html("<b>Email is already</b>");
                    $("#loader").removeClass("loader");
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Email is already',
                      timer: 2000
                    });
                } else {
                    // alert('successssss');
                    window.localStorage.setItem('after_register',1);
                    window.location = 'index.html';
                }
            }
        }); 
    });
    
    $("#form-login").submit(function(e){
        e.preventDefault();
         
        var dataform = $("#form-login").serialize();
        $.ajax({
            type: "post",
            url: "http://" + d + "/skripsi_ci/Auth/login",
            data: dataform,
            dataType: "JSON",
            success: function(data){
              // var id window.localStorage.setItem('id_user',data.profile.id_user);
              //     console.log(id);
              if(data.status){
                
                if(data.active) {
                  window.localStorage.setItem('ceklogin',1);
                  window.localStorage.setItem('after_login',1);
                  window.localStorage.setItem('id_user',data.profile.id_user1);
                   Swal.fire({
                        icon: 'success',
                        title: 'Login Success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    $("#modal-login").modal("hide");
                    $("#btnlogin").hide();
                    $("#btnprofile").show();
                    $("#btnlogout").show();
                    $(".collapse").collapse('hide');
                    $("#btnjourney").show();
                } else {
                    $(".pesan").removeClass('alert alert-success');
                    $(".pesan").addClass('alert alert-danger');
                    $("#pesan").html('<b>Email has not been activited</b>')
                    $("#btnlogin").show();
                    $("#btnprofile").hide();
                    $("#btnlogout").hide();
                  } 
//                 if(data.status){
//                    window.localStorage.setItem('after_login',1);
//                    window.localStorage.setItem('id_user',data.profile.id_user);
//                     $("#modal-login").modal("hide");
//                     $("#btnlogin").hide();
//                     $("#btnprofile").show();
//                     $("#btnlogout").show();
//                     $(".collapse").collapse('hide');
//                     // window.location.href = 'index.html';
//                 } else {
// //                    alert('Salah');
//                     $("#pesan").html('<div class="alert alert-danger">\
//                      Your Email or Password are wrong!</div>')
//                     $("#btnlogin").show();
//                     $("#btnprofile").hide();
//                     $("#btnlogout").hide();
//                 }
              } else {
                  $("#pesan").html('<div class="alert alert-danger">\
                    Email is not registered or your Email/Password are wrong!</div>')
                  $("#btnlogin").show();
                  $("#btnprofile").hide();
                  $("#btnlogout").hide();
              }
            }
        }); 
    });
    
    $("#tampilData").html(function(){
        //var dataform = $("#form-profile").serialize();

        // var id =  window.localStorage.getItem('id_user');
        // console.log(id);
            // alert('adfads');

        $.ajax({
           data: "id=" + window.localStorage.getItem('id_user'),
           type: "post",
           url: "http://" + ip_rmh + "/skripsi_ci/Auth/tampilData",
           dataType: "JSON",
           success: function(data){
                if(data.status == false) {
                    alert("salah");
                    window.location.href = index.html;
                } else {
                  $('#email').val(data.profile.email);
                  $('#nama').val(data.profile.nama);
                  $('#phone_number').val(data.profile.no_hp);
//                $('#identity_type').val(data.profile.identity_type);
//                $('#identity_number').val(data.profile.identity_number);
                  $('#jenis_kelamin').val(data.profile.kelamin);
//                $('#date').val(data.profile.birthdate);
                  $('#alamat').val(data.profile.alamat);
//                $('#email').val(data.profile.email);
//                console.log(data.profile.phone_number); 
              }
          } 
        });
    });
    
    $("#btneditprofile").click(function(){

        $.ajax({
            data: "id="+window.localStorage.getItem('id_user'),
            type: "POST",
            url: "http://" + ip_rmh + "/skripsi_ci/Auth/tampilData",
            dataType: "JSON",
            success: function(data){
              if(data.status == false) {
                   alert("salah");
                   window.location.href = edit_profile.html;
               } else {
               // $('#edit_phone_number').val(data.profile.phone_number);
               $('#edit_nama').val(data.profile.nama);
               $('#edit_phone_number').val(data.profile.no_hp);
               // $('#edit_identity_type').val(data.profile.identity_type);
               // $('#edit_identity_number').val(data.profile.identity_number);
               $('#edit_jenis_kelamin').val(data.profile.kelamin);
               // $('#edit_date').val(data.profile.birthdate);
               $('#edit_alamat').val(data.profile.alamat);
//               $('#email').val(data.profile.email);
//               console.log(data.profile.phone_number); 
              }  
            }
        });
    });

    $("#form-edit-profile").submit(function(e){
      e.preventDefault();

      // var dataform = $("#form-edit-profile").serialize();
      // console.log(dataform);
      var nama = $("#edit_nama").val();
      var no_hp = $("#edit_phone_number").val();
      var kel = $("#edit_jenis_kelamin").val();
      var alamat = $("#edit_alamat").val();

      $.ajax({
        type: "POST",
        url: "http://" + ip_rmh + "/skripsi_ci/Auth/edit_profile",
        data: 'id='+localStorage.getItem('id_user')+'&nama='+nama+'&no_hp='+no_hp+'&kelamin='+kel+'&alamat='+alamat,
        dataType: "JSON",
        success: function(data){
          if(data.status){
            Swal.fire({
                        icon: 'success',
                        title: 'Profile updated',
                        showConfirmButton: false,
                        timer: 1500
                    });
          $("#edit_nama").val("");
          $("#edit_phone_number").val("");
          $("#edit_jenis_kelamin").val("");
          $("#edit_jenis_kelamin").val("");
          $("#modal-profile").modal("hide");

          $('#nama').val(data.update.nama);
          $('#phone_number').val(data.update.no_hp);
          $('#jenis_kelamin').val(data.update.kelamin);
          $('#alamat').val(data.update.alamat);
          }
        }
      });
    });

    $("#form-edit-profile-change-password").submit(function(e){
        e.preventDefault();

        var dataform = $("#form-edit-profile-change-password").serialize();

        $.ajax({
            type: "POST",
            url: "http://" + ip_rmh + "/skripsi_ci/Auth/cek_password",
            data: dataform,
            dataType: "JSON",
            success: function(data){
                if(data.duplicate){
                    $("#modal-profile-next-change-password").modal("show");
                    $("#old_password").val("");
                    $("#message").empty(); 
                } else {
                    $("#message").html("Wrong Password");
                    $("#old_password").val("");
                }
            }
        });
    });

    $("#new_password").blur(function(){
      var pass = $(this).val();
        
        $.ajax({
            type: "POST",
            url: "http://" + ip_rmh + "/skripsi_ci/Auth/cek_new_pass",
            data: 'password='+pass,
            dataType: "JSON",
            success: function(data){
 //               $("#message").text("Email is already");
                if(data.duplicate){
                    $("#msg-new-pass").html("Don't same password with your before"); 
                } else {
                    $("#msg-new-pass").empty();
                }
            }
        });
    })

    $("#form-edit-profile-next-change-password").submit(function(e){
        e.preventDefault();

        var pass1 = $("#new_password").val();
        var pass2 = $("#conf_password").val();
        

        if(pass2 == pass1) {
          $.ajax({
            type: "POST",
            url: "http://" + ip_rmh + "/skripsi_ci/Auth/update_password",
            data: 'id='+window.localStorage.getItem('id_user')+'&password='+pass2,
            dataType: "JSON",
            success: function(data){
                if(data.status){
                    $("#new_password").val("");
                    $("#conf_password").val("");
                    $("#modal-profile-next-change-password").modal("hide");
                    $("#modal-profile-change-password").modal("hide");
                } 
            }
          });
        } else {
          // console.log("beda");
           $("#msg-conf-new-pass").html("Password doesn't match!");
        }
        // var dataform = $("#form-edit-profile-next-change-password").serialize();
    });

});