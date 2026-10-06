function prepareDesc(desc) {
  let regex = /L10N House/gmi;
  return desc.replaceAll(regex,`<span class="firstColor fw-medium"><span>L10N</span><span class="secondColor">House</span></span>`);

}

function openPopup(popupName) {
  $("body").css('overflow-y', 'hidden');
  $(`.popup[data-popup-name="${popupName}"]`).fadeIn(1000 , function () {
    if (popupName == 'languages') {
        $(this).delay(500).find('.box').addClass('show');
    };
  });
}

function closePopup(popupName) {

  $("body").css('overflow-y', 'auto');

  let $popup = $(`.popup[data-popup-name="${popupName}"]`);
  if (popupName == 'languages') 
  {
    $popup.find('.box').removeClass('show');
    $popup.delay(500).fadeOut(1000);

  }
  else 
  {
    $popup.fadeOut(1000);
  }

}

function preparePoints(points) {

  let lis = ` `;

    for(let point of points)
    {
      lis +=`<li>${point}</li>`;
    }

  return lis;
}

function prepareSectionsOfService(sections) {
  let sectionsEle = ``;

  let i = 0;
  for(let section of sections)
  {
    
    sectionsEle+=`
     <section class="${(i != 0)? 'mt-4' : ''}">
          <h6>${section.title}</h6>
            <ol>
              ${preparePoints(section.points)};
            </ol>
     </section>


    `;
    i++;
  }
  return sectionsEle;

}

function showService(serviceIndex) {

  console.log(services[serviceIndex]);

  let service = services[serviceIndex];

  

  $(`.popup[data-popup-name="service"] .box .body`).html(`
      <h3 class="mb-5 text-center secondColor">${service.title}</h3>
                <div class="row mb-5">
                    <div class="part part1 col-md-6">
                        <div class="item">
                            <p>${prepareDesc(service.description)}</p>
                        </div>
                    </div>
                    <div class="part part2 col-md-6">
                        <div class="item">
                            <img src="./assests/images_L10/images/${service.img}" alt="trans_image" class="rounded-4">
                        </div>
                    </div>
                </div>
               
                ${prepareSectionsOfService(service.sections)};
    
    `);
  openPopup('service');
}

function prepareLanguages(languages) {
    let lis = ` `;

    for(let language of languages)
    {
      lis +=`<li><i class="fa-regular fa-circle-dot"></i>${language}</li>`;
    }
    return lis;
}
function arrowCase()
{
  let aboutTop = $('section#About').offset().top,
      aboutHeightSection = $('section#About').height(),
      arrow = $('#arrowTop');
  if(window.scrollY <= (aboutTop - aboutHeightSection))
  {
    arrow.removeClass('show');
  }
  else 
    {
    arrow.addClass('show');

  }
}

