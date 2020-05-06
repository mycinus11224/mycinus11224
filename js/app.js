

const imf_button = document.getElementById('imfstart');
const overlay = document.getElementById('overlay1024');



function changeDisplayState() {

  if(overlay === null) {
    return;
  }

    overlay.style.display = 'none';
    imf_button.style.display = 'none';

}


const search_input = document.getElementById('searchbutton');
const search_box = document.getElementById('search-box');
const searchDiv = document.getElementById('search-section');

var documents = [{
  "id": "webservice.html Website Development and Design We provide all the latest features and programs to develop/design your website.",
  "text": "We provide all the latest features and programs service to develop/design your website. We provide all the latest features and programs to develop/design your website and/or mobile app. We work with Drupal, Wordpress, Joomla, CSS3, PHP, Java, AJAX, and HTML just to name a few and can build on any existing hosting sites. However, we also provide in-house hosting as an option. We guarantee that we can build websites for most budgets. The world of web design is ever changing. While we’re not yet gazing out at a virtual reality landscape, front-end designers are continuing to develop the functionality and feel of the web for the technology out there, keeping designs fresh and optimizing for UX. Here are five of the major trends that are driving website design today."
  }, {
  "id": "mobileservices.html Mobile Applications We create mobile apps for iOS and Android users. We customize apps based off the need of your company and marketing initiatives.",
  "text": "We create mobile apps for iOS and Android users. We customize apps based off the need of your company and marketing initiatives. We create mobile apps for iOS and Android users. We customize apps based on the need of your company and marketing initiatives. We also offer unique designs, consultation, and tracking services to ensure that your mobile app is being utilized to the best of its ability to attract customers and increase your smartphone visibility. Mobile now accounts for over half of all online traffic, so it’s only natural that the focus of web design has moved. Indeed, even if you do incorporate a responsive design, it’s likely to be more important for you to prioritize the appearance and functionality of your site on mobile than on desktop. That doesn’t just mean ensuring that the layout works on a smartphone screen but extends to the specific concerns of mobile users – does the site load quickly? Is the site properly navigable on a smaller screen? And is it easy to access and share content? If the answer to any of those questions is no, then you’re likely to be missing out. And favoring mobile isn’t optional anymore, either – Google will penalize your search rankings if you’re not making mobile work. Fortunately, they have a tool that tells you how you’re doing. You can read more"
}, {
  "id": "seoservices.html Internet Marketing/SEO/SMM/PPC We specialize in building your brand through a concise marketing plan that reaches all areas of internet marketing.",
  "text": "We specialize in building your brand service through a concise marketing plan that reaches all areas of internet marketing. We specialize in building your brand through a concise marketing plan that reaches all areas of internet marketing. This includes SEO, SMM, and PPC initiatives. We also handle all social media management to increase followers and traction to your site. As digital marketing specialists, we are privileged to work with a lot of companies on a daily basis and over the last three years, we realized that there are seven big patterns: 7 reasons why social media is not giving you or your company the bang for its buck. We’re providing you with these because I highly believe that social media (digital marketing as such) is still super underestimated because people don’t know the true power it and/or are doing things wrong."

 } , {
    "id": "investorservices.html Grants Management/Investor Relations We specialize in grants management with over 13 years of experience.",
    "text": "Grants Management/Investor Relations service We specialize in grants management with over 13 years of experience. We specialize in grants management with over 13 years of experience. We have secured millions of dollars in funding for our clients. What makes us unique is that we already have a database of over 100 grantors that we work with to secure funding in a shorter amount of time than the usual process. Take advantage of contracting grant writers, technology gurus, and experts on business development. This can be three different people or our reputable company that can take care of all three. Remember, you are your biggest investor. If you are not willing to invest everything into making your company a success then you’re not ready to truly OWN a business."

 }   , {
      "id": "marketingservices.html Pitch Decks/Marketing Materials Pitch decks are the most important and beneficial document a business can have.",
      "text": "Pitch Decks/Marketing Materials Pitch decks are the most important and beneficial document a business can have. We specialize in grants management with over 13 years of experience. Pitch decks are the most important and beneficial document a business can have. When talking to investors, visual aids provide cohesion, clarity, and (sometimes) entertainment. We have secured funding for non-profit organizations and multi-level companies by designing pitch decks, business plans, and white papers that focus on our clients' core areas and catering those materials to each individual funder. Pitch decks are the most important and beneficial document a business can have. When talking to investors, visual aids provide cohesion, clarity, and (sometimes) entertainment. Humans are visual creatures. No, that’s not a statement to convince you to use visual aids whenever you want to get your point across, but a scientific fact: half of the human brain is directly or indirectly devoted to processing visual information. Now that the science of it is clear, let’s move on to the part where I say that you need to use visual aids whenever you want to get your point across. For startups, “the point” to get across is usually the product or service. The best visual tool for this? The pitch deck."

 }    , {
        "id": "publicservices.html Branding/Public Relations Branding is a very beneficial process that a brand will go through when it’s ready to take the next step.",
        "text": "Branding/Public Relations service Branding is a very beneficial process that a brand will go through when it’s ready to take the next step. Branding is a very beneficial process that a brand will go through when it’s ready to take the next step. Unfortunately, only a fraction of businesses today really understand the importance of proper branding and public relation strategies whilst others should begin doing so. If your brand is having trouble against competitors, a rebrand could set you leaps and bounds beyond them- easily."

  }  , {
      "id": "about.html About Us: Why IMF?",
      "text": "about Us: Why IMF? William Spencer - Founder/Visionary Zarinah Hameen - Chief Executive about Officer Support Team & Interns about"

}  , {
      "id": "industries.html Our Industry Work",
      "text": "Our Industry Work Au'loni Magazine Disrupt Tech is a weekly podcast Access GRANTed is the only online portal to service all of your grant needs."

}  , {
      "id": "index1.html#testimonials Testimonials",
      "text": "Testimonials"

}  , {
      "id": "index1.html#partners Our partners",
      "text": "Our partners google microsoft general assembly national urban league"

}  , {
      "id": "index1.html#contactus Contact us",
      "text": "Contact us form"


}]



function configureSearch() {

  changeDisplayState();
  const search_results = document.getElementById('search-results'); // Search results <ul>

  while(( list = search_results.getElementsByTagName("li")).length > 0) {
	search_results.removeChild(list[0]);
    }

    var idx = lunr(function () {
        this.ref('id')
        this.field('text')
      
        documents.forEach(function (doc) {
          this.add(doc)
        }, this)
      });

    const results = idx.search(search_box.value);
    const results_list = document.getElementById('search-results');


    // If results has 0 length
    if (results.length == 0) {

      let item = document.createElement('li');
      let header = document.createElement('h5');
      header.innerHTML = 'Search Results: '+ results.length + ' Results';
      item.appendChild(header);
      results_list.appendChild(item);
      searchDiv.style.display ='block';
      return;
    }


    //Search Results title
    let item = document.createElement('li');
    let header = document.createElement('h5');
    header.innerHTML = 'Search Results: '+ results.length + ' Result(s)';
    item.appendChild(header);
    results_list.appendChild(item);


    for(i=0; i < results.length; i++) {

      let list_item = document.createElement('li');
      let a_tag = document.createElement('a');
      if( results[i].ref !== 'undefined' ) {
        results_split = results[i].ref.split(' ');
        a_tag.href = results_split[0];

        let innerhtml = '' + (i+1) + '. ';
        for( j=1; j < results_split.length; j++) {
          innerhtml+= results_split[j] + ' ';
        }
        a_tag.class='atag';
        a_tag.innerHTML = innerhtml;
        list_item.appendChild(a_tag);
        results_list.appendChild(list_item);
        searchDiv.style.display ='block';
      }
    }



}


