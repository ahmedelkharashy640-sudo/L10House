let services = null,
    loadingPageEle=$(".loadingPage");
(
    async function () {
        let res = await fetch("https://semicode.tech/api/v1/l10nhouse/services") ;

         services = await res.json(); 
        
        let i = 0;
        for(let service of services)
        {
            $("#Services .row").append(`
                <div class="part col-md-6 wow ${(i+1) % 2 ==0 ? 'animate__fadeInRight' : 'animate__fadeInLeft'}"  data-wow-duration="1.5s" data-wow-delay="${i * 0.2}s">
                        <div class="item text-center">
                            <img src="./assests/images_L10/images/${service.icon}" alt="s1_image">
                            <h4 class="my-3 text-black fw-medium">${service.title}</h4>
                            <p>${prepareDesc(service.description.slice(0,160))}... <a class="firstColor" onclick="openPopup('service'); showService(${i})">Read More</a></p>
                        </div>
                    </div>
                
                `);
                i++;
        }
    }

)();


(
    async function () {
        let res = await fetch("https://semicode.tech/api/v1/l10nhouse/sectors") ;

         sectors = await res.json(); 
        
        console.log(sectors);
        let i = 0;
        for(let sector of sectors)
        {
            $(".popup[data-popup-name = 'sector'] .row").append(`
               <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="item text-center rounded-3 p-3">
                        <img src="./assests/images_L10/images/sec/${sector.icon}" alt="${sector.icon}-image" class="mb-3">
                        <p class="mb-0">${sector.name}</p>
                    </div>
                </div>
                
                `);
                i++;
        }
    }

)();


(
    async function () {
        let res = await fetch("https://semicode.tech/api/v1/l10nhouse/languages") ;

         let languages = await res.json(); 
        
        console.log(languages);
        let i = 0;
        for(let language of languages)
        {
            $(".popup[data-popup-name = 'languages'] .body").append(`
               <div class="section">
                    <h5>${language.continent}</h5>
                    <ul class="list-unstyled">
                        ${prepareLanguages(language.languages)};                      
                    </ul>
                </div>
                
                `);
                i++;
        }
    }

)();

$(".popup .box").click(function (e) {
    e.stopPropagation();
});

$(window).scroll(function (e) {

    $("nav").toggleClass("scrolled", window.scrollY >= 10);

   let  $sections = $('header, section[id]');

    $sections.each(function (index , section) {
        
         let  $section = $(section),
                sectionId = $section.attr('id'),
                sectionTop =  $section.offset().top,  //^ to access the top of section and store it in a variable
                sectionBottom = sectionTop + $section.outerHeight(true),
                navbarHeight = $('nav').outerHeight(true),
                scrollY = window.scrollY + navbarHeight;


    if (scrollY > sectionTop && scrollY < sectionBottom) {

        $(`.nav-link.active`).removeClass('active');
        $(`.nav-link[href='#${sectionId}']`).addClass('active');
    };
    })

  
});

 new WOW().init({

      animateClass: 'animate__animated',
 });


 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 5,
    margin : 10,
    loop : true,
    autoplay : true,
    autoplayTimeout :1000,
    autoplayHoverPause : true,
      responsive :  
      {
        0 : 
        {
            items : 1
        },
        650 : 
        {
            items : 2
        },
        850 : 
        {
            items : 3
        },
        1050 : 
        {
            items : 4
        },
        1250 : 
        {
            items : 5
        }
      }

  });
});
arrowCase();
$(window).on('scroll',arrowCase);

window.addEventListener("load",function(){
        loadingPageEle.addClass('hide');
    setTimeout(function(){
        loadingPageEle.addClass('d-none');
        },2500)
});














