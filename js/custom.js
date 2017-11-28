(function () {
    
    // $('.landingPage').height($(window).height());
    // $(window).resize(function() {
    //     var bodyheight = $(this).innerHeight();
    //     $(".landingPage").innerHeight(bodyheight);
    // });
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.landingPage').css('height', windowHeight);
      };
      setHeight();
      
      $(window).resize(function() {
        setHeight();
      });
    
    
    
    // sgin up & login function
    $( "#signBtn" ).click(function() 
        {
            $('#tabLogin').removeClass( "active" );
            $("#tabSign").addClass("active");
            $('#loginDiv').addClass("hide");
            $('#sginUpDiv').removeClass( "hide" ).addClass("active");
    
            $('#tabLogin').click(function(){
                $("#tabSign").removeClass("active");
                $("#tabLogin").addClass("active");
                $('#sginUpDiv').removeClass( "active" ).addClass("hide");
                $('#loginDiv').removeClass( "hide" ).addClass("active");
    
            });
                
            $('#tabSign').click(function()
            {
                $("#tabLogin").removeClass("active");
                $("#tabSign").addClass("active");
            $('#loginDiv').removeClass( "active" ).addClass("hide");
            console.log("tabsign");
            $('#sginUpDiv').removeClass( "hide" ).addClass("active");
    
            
            });
        });
    
    $( "#loginBtn" ).click(function() 
        { $('#tabSign').removeClass( "active" );
        $("#tabLogin").addClass("active");
        $('#sginUpDiv').addClass("hide");
        $('#loginDiv').removeClass( "hide" ).addClass("active");
        $('#tabSign').click(function()
            {
                $("#tabLogin").removeClass("active");
                $("#tabSign").addClass("active");
            $('#loginDiv').removeClass( "active" ).addClass("hide");
            console.log("tabsign");
            $('#sginUpDiv').removeClass( "hide" ).addClass("active");
            console.log("tab");
            
            });
        $('#tabLogin').click(function(){
            $("#tabSign").removeClass("active");
            $("#tabLogin").addClass("active");
            $('#sginUpDiv').removeClass( "active" ).addClass("hide");
            $('#loginDiv').removeClass( "hide" ).addClass("active");
    
        });
        });
    $(".close")
        {
            $('#sginUpDiv').addClass( "hide" );
            $('#LoginDiv').addClass( "hide" );
            
        }
    // sgin up & login function
    
    //option selected function
    $('#genderOption a').click(function(){
        $('#dropdownMenuButtonGender span').text('Gender : '+this.text);
    
    });
    $('#typeOption a').click(function(){
        $('#dropdownMenuButtonType span').text('You Sign Up As : '+this.text);
    
    });
    //option selected function
    //  Birthdate
        var birthDateField = jQuery('#birthdate');
        
        birthDateField.on( 'input propertychange', function() {
                
            var birthDateLength = birthDateField.attr('data-inputLength');
            var value = jQuery(this).val();
                
                console.log('value length' + value.length);
                console.log('field length' + birthDateLength);
                
            if ( value.length > birthDateLength ) {
                
            value = value.replace(/\D/g,'').substring( 0, 8 );
    
                    if ( value.charAt('0') > 1 ) {
                        value = '0' + value;
                    }
                    
                    if ( value.charAt('0') == 1 && value.charAt('1') > 2 ) {
                        value = '0' + value.substring(0);
                    }
                    
                    if ( value.charAt('2') > 3 ) {
                        value = value.substring(0,2) + '0' + value.substring(2);
                    }
                    
                    if ( value.charAt('2') == 3 && value.charAt('3') > 1 ) {
                        value = value.substring(0,2) + '0' + value.substring(2);
                    }
                    
                    if ( value.length >= 4 ) {
                        value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
                    }
                    else if ( value.length >= 2 ) {
                value = value.replace(/(\d{2})(\d{0,2})/, '$1/$2');
            }
    
            jQuery(this).val( value );
            
            }
            
            jQuery(this).attr('data-inputLength', value.length);
            
        });
      
    //  Birthdate
    
    //dropdown navbar
    $('#btnMenuProfile').click(function(){
    
        $('#menuProfile').toggleClass('show')
    });
    // overview show
    //show About Me
    $('#aboutBtn').click(function()
    {
        $('#aboutMe').show('slow');
        $(this).addClass('bgColor');
    
        $('#question').hide('slow');
        $('#follow').hide('slow');
        $('#Accomplishments').hide('slow'); 
    
        $('#quesBtn').removeClass('bgColor');
        $('#followBtn').removeClass('bgColor');
        $('#accompBtn').removeClass('bgColor');    
        
    })
    // show in about me readmore
    $('#readMore').click(function(){
        $('#infoBasic').fadeIn(1000).addClass('show');
        $(this).addClass('hide');
    
    });
    //show Question
    $('#quesBtn').click(function()
    {
        $('#question').show('slow');
        $(this).addClass('bgColor');
    
        $('#aboutMe').hide('slow');
        $('#Accomplishments').hide('slow');    
        $('#follow').hide('slow');
    
        $('#aboutBtn').removeClass('bgColor');
        $('#followBtn').removeClass('bgColor');
        $('#accompBtn').removeClass('bgColor');    
    });
    //show in Question comment Box
 
    // $("#textareaComment").focus(function(){
    //     alert("textarea focus");
        
    // });
    $(".boxQus > textarea").click(function(){
        $(this).on("mousedown mouseup click focus blur", function(e) {
            $("#commentBtn").addClass('show');
          })

    });
    //show follow
    $('#followBtn').click(function()
    {
        $('#follow').show('slow');
        $(this).addClass('bgColor');
    
        $('#aboutMe').hide('slow');
        $('#question').hide('slow');
        $('#Accomplishments').hide('slow');    
    
        $('#aboutBtn').removeClass('bgColor');
        $('#quesBtn').removeClass('bgColor');
        $('#accompBtn').removeClass('bgColor');    
        
    });
    //show menu delete person
    $('.delete').click(function(){
       
      $(this).children('.menuDelete').toggleClass('show');
    });
    $('#accompBtn').click(function()
    {
        $('#Accomplishments').show('slow'); 
        $(this).addClass('bgColor');
    
        $('#question').hide('slow');
        $('#aboutMe').hide('slow');
        $('#follow').hide('slow');
    
        $('#aboutBtn').removeClass('bgColor');
        $('#quesBtn').removeClass('bgColor');
        $('#followBtn').removeClass('bgColor');  
    });
    function fixDiv() {
        var $cache = $('#overview');
        if ($(window).scrollTop() > 500)
        {
            $cache.css({
                'position': 'fixed',
                'top': '80px',
                'width':'26%'
              });
              if ($(window).width() > 990)
              {
                $cache.css({
                    'position': 'fixed',
                    'top': '80px',
                    'width':'23%'
                  });
              }
              
              if ($(window).width() < 790)
              {
                $cache.css({
                    'position': 'fixed',
                    'top': '80px',
                    'width':'25%'
                  });
              }
              if ($(window).width() < 767)
              {
                $cache.css({
                    'position': 'fixed',
                    'top': '80px',
                    'width':'23%'
                  });
              }
              if ($(window).width() < 575)
              {
                $cache.css({
                    'position': 'relative',
                    'top': 'auto',
                    'width':'100%'
                  });
              }
            
        }
         
         
        else
          $cache.css({
             'position': 'relative',
            'top': 'auto',
            'width':'100%'
          });
         
         
      }
      $(window).scroll(fixDiv);
      fixDiv();
    //    upload image

      $('#imageUploadForm').on('submit',(function(e) {
        e.preventDefault();
        var token = $.cookie("token");
        var formData = new FormData(this);
        var image;
      console.log(formData);
        $.ajax({
            type:'POST',
            url: 'http://localhost:2449/api/uploadstudentimage',
            data:formData,
            headers: {"Authorization": "bearer "+token},
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
                console.log("success");
                console.log(data);
                angular.element($("#profile")).scope().getNewPath(data.imagePath);
            },
            error: function(data){
                console.log("error");
                console.log(data);
            }
        });
    }));
    
    $("#ImageBrowse").on("change", function() {
        $("#imageUploadForm").submit();
    });
    
    
    
    
    })();