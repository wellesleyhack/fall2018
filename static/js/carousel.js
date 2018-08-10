$(document).ready(function() {
  if (window.innerWidth <= 960 && window.innerWidth > 500) {
    $("#recipeCarousel").replaceWith(`<div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
      <div class="carousel-inner w-100" role="listbox" style="margin-left: 30px; margin-top: 50px">
          <div class="item row active">

              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/emily.jpg" alt="Emily Mattlin">
                  <div class="card-body">
                    <h5 class="card-title gold">Emily Mattlin</h5>
                    <h6 class="card-subtitle mb-2 gold">Co-Director</h6>
                    <h6 class="card-text">Major: Computer Science</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Outside of WHACK, Emily is on the Wellesley CS Club Executive Board and is the Head of Post Production for Wellesley College TV. In her spare time, Emily enjoys cooking, films, and exploring Boston.</h6>
                  </div>
                </div>
              </div>

              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/jackeline.jpg" alt="Jackeline Lopez Ruiz">
                  <div class="card-body">
                    <h5 class="card-title gold">Jackeline Lopez Ruiz</h5>
                    <h6 class="card-subtitle mb-2 gold">Co-Director</h6>
                    <h6 class="card-text">Major: Computer Science</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Born and raised in Los Angeles, Jackeline misses warm summer nights as much as she loves taking selfies in the New England snow. When not debugging her code, she enjoys spending time with friends in the city and eating good ethnic food.</h6>
                  </div>
                </div>
              </div>

            </div>

            <div class="item row">

              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/kealani.jpg" alt="Kealani Finegan">
                  <div class="card-body">
                    <h5 class="card-title gold">Kealani Finegan</h5>
                    <h6 class="card-subtitle mb-2 gold">Designer</h6>
                    <h6 class="card-text">Major: Media Arts and Science and Art History</h6>
                    <h6 class="card-text">Class of 2019</h6>
                    <h6 class="card-text">Originally from Vietnam but raised in New York City, Kealani loves anything art and design related. In her free time she enjoys ice skating, walking, and reading. In the future she hopes to return to Southeast Asia and create a website documenting her experiences.</h6>
                  </div>
                </div>
              </div>

              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/remi.jpg" alt="Remi Kobayashi">
                  <div class="card-body">
                    <h5 class="card-title gold">Remi Kobayashi</h5>
                    <h6 class="card-subtitle mb-2 gold">Designer</h6>
                    <h6 class="card-text"></h6>
                    <h6 class="card-text"></h6>
                    <h6 class="card-text"></h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/nicole.jpg" alt="Nicole Li">
                  <div class="card-body">
                    <h5 class="card-title gold">Nicole Li</h5>
                    <h6 class="card-subtitle mb-2 gold">Web Developer</h6>
                    <h6 class="card-text">Major: Undeclared</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Nicole hails from California and writes impulsively. She can be described primarily as a mixture of carbon, hydrogen, nitrogen, and oxygen atoms. You can find her staring at a screen about 90% of the time.</h6>
                  </div>
                </div>
              </div>

              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/allison.jpg" alt="Allison Turner">
                  <div class="card-body">
                    <h5 class="card-title gold">Allison Turner</h5>
                    <h6 class="card-subtitle mb-2 gold">Web Developer</h6>
                    <h6 class="card-text">Major: Computer Science and Mathematics</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Allison is a New England native who loves dogs, coding, and memes. When she isn’t in class, she enjoys playing Dungeons and Dragons with her family, wasting time on Twitter, and reading.</h6>
                  </div>
                </div>
              </div>

          </div>


          <div class="item row">
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/valeria.jpg" alt="Valeria Yang">
                  <div class="card-body">
                    <h5 class="card-title gold">Valeria Yang</h5>
                    <h6 class="card-subtitle mb-2 gold">Web Developer</h6>
                    <h6 class="card-text">Major: Media Arts and Sciences</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Originating from Vancouver, Valeria loves making 3D models and animations. In her free time, she enjoys playing and designing video games, drawing, traveling, and reading.</h6>
                  </div>
                </div>
              </div>


              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/artemisia.jpg" alt="Artemisia Luk">
                  <div class="card-body">
                    <h5 class="card-title gold">Artemisia Luk</h5>
                    <h6 class="card-subtitle mb-2 gold">Social Media Coordinator</h6>
                    <h6 class="card-text">Major: Media Arts and Sciences</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Artemisia grew up in San Francisco, CA and loves experimenting with everything related to art and design. Her favorite mediums are photography, graphic arts, and illustration. She also enjoys listening to music and playing her ukulele.</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/margaret.jpg" alt="Margaret Sun">
                  <div class="card-body">
                    <h5 class="card-title gold">Margaret Sun</h5>
                    <h6 class="card-subtitle mb-2 gold">Social Media Coordinator</h6>
                    <h6 class="card-text">Major: Undeclared</h6>
                    <h6 class="card-text">Class of 2021</h6>
                  </div>
                </div>
              </div>

              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/rachel.jpg" alt="Rachel Zhang">
                  <div class="card-body">
                    <h5 class="card-title gold">Rachel Zhang</h5>
                    <h6 class="card-subtitle mb-2 gold">Social Media Coordinator</h6>
                    <h6 class="card-text">Major: Undeclared</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Rachel made her start in programming at the local hackathons in her hometown near Wellesley. In her free time, she likes to immerse herself in anime and anything related to the Legend of Zelda. You can usually find her walking around petting other people’s dogs.</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/alicia.jpg" alt="Alicia Lee">
                  <div class="card-body">
                    <h5 class="card-title gold">Alicia Lee</h5>
                    <h6 class="card-subtitle mb-2 gold">Logistics Coordinator</h6>
                    <h6 class="card-text">Major: Computer Science and Psychology</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Alicia, a proud Bostonian native, enjoys restaurant hopping, bullet journaling, playing guitar, and Korean skincare. Outside of CS, she spends her time as student leader of Wellesley Christians on Campus Club and Alumnae Chair of Wellesley’s Taiwanese Cultural Organization.</h6>
                  </div>
                </div>
              </div>
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/logo yellow.png" alt="Ariele Xiao">
                  <div class="card-body">
                    <h5 class="card-title gold">Ariele Xiao</h5>
                    <h6 class="card-subtitle mb-2 gold">Logistics Coordinator</h6>
                    <h6 class="card-text">Major: Computer Science</h6>
                    <h6 class="card-text">Class of 2021</h6>
                  </div>
                </div>
              </div>
          </div>

          <div class="item row">
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/celine.jpg" alt="Celine Christory">
                  <div class="card-body">
                    <h5 class="card-title gold">Celine Christory</h5>
                    <h6 class="card-subtitle mb-2 gold">Logistics Coordinator</h6>
                    <h6 class="card-text">Major: Computer Science</h6>
                    <h6 class="card-text">Class of 2021</h6>
                    <h6 class="card-text">Celine is a French New Yorker who loves tech and building start-ups. When she’s not working on a new project, you can find her working with kids, advocating for women in tech and business or working on interfaith issues.</h6>
                  </div>
                </div>
              </div>
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/isabelle.jpg" alt="Isabelle Chun">
                  <div class="card-body">
                    <h5 class="card-title gold">Isabelle Chun</h5>
                    <h6 class="card-subtitle mb-2 gold">Treasurer</h6>
                    <h6 class="card-text">Major: Computer Science</h6>
                    <h6 class="card-text">Class of 2020</h6>
                    <h6 class="card-text">Isabelle grew up in Palo Alto, CA and plays on the Wellesley golf team. She loves baking, walks around Lake Waban, visiting art museums, and coding.</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="item row">
              <div class="col-6 float-left">
                <div class="card" style="width: 18rem; background-color: #DEE7EA">
                  <img style="display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 50px;
                  width: 50%;" class="img-circle" src="./static/img/profiles/heidi.jpg" alt="Heidi Cho">
                  <div class="card-body">
                    <h5 class="card-title gold">Heidi Cho</h5>
                    <h6 class="card-subtitle mb-2 gold">Treasurer</h6>
                    <h6 class="card-text">Major: Computer Science</h6>
                    <h6 class="card-text">Class of 2020</h6>
                    <h6 class="card-text">At Wellesley, Heidi is the co-Treasurer of the CS club, as well as the Vice President of Wellesley’s Korean Students Association. In her free time, she enjoys practicing card tricks, watching anime, and cooking with friends.</h6>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </a>
    </div>
`);
}

  $( window ).resize(function() {
    if (window.innerWidth <= 960 && window.innerWidth > 500) {
      $("#recipeCarousel").replaceWith(`<div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
        <div class="carousel-inner w-100" role="listbox" style="margin-left: 30px; margin-top: 50px">
            <div class="item row active">

                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/emily.jpg" alt="Emily Mattlin">
                    <div class="card-body">
                      <h5 class="card-title gold">Emily Mattlin</h5>
                      <h6 class="card-subtitle mb-2 gold">Co-Director</h6>
                      <h6 class="card-text">Major: Computer Science</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Outside of WHACK, Emily is on the Wellesley CS Club Executive Board and is the Head of Post Production for Wellesley College TV. In her spare time, Emily enjoys cooking, films, and exploring Boston.</h6>
                    </div>
                  </div>
                </div>

                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/jackeline.jpg" alt="Jackeline Lopez Ruiz">
                    <div class="card-body">
                      <h5 class="card-title gold">Jackeline Lopez Ruiz</h5>
                      <h6 class="card-subtitle mb-2 gold">Co-Director</h6>
                      <h6 class="card-text">Major: Computer Science</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Born and raised in Los Angeles, Jackeline misses warm summer nights as much as she loves taking selfies in the New England snow. When not debugging her code, she enjoys spending time with friends in the city and eating good ethnic food.</h6>
                    </div>
                  </div>
                </div>

              </div>

              <div class="item row">

                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/kealani.jpg" alt="Kealani Finegan">
                    <div class="card-body">
                      <h5 class="card-title gold">Kealani Finegan</h5>
                      <h6 class="card-subtitle mb-2 gold">Designer</h6>
                      <h6 class="card-text">Major: Media Arts and Science and Art History</h6>
                      <h6 class="card-text">Class of 2019</h6>
                      <h6 class="card-text">Originally from Vietnam but raised in New York City, Kealani loves anything art and design related. In her free time she enjoys ice skating, walking, and reading. In the future she hopes to return to Southeast Asia and create a website documenting her experiences.</h6>
                    </div>
                  </div>
                </div>

                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/remi.jpg" alt="Remi Kobayashi">
                    <div class="card-body">
                      <h5 class="card-title gold">Remi Kobayashi</h5>
                      <h6 class="card-subtitle mb-2 gold">Designer</h6>
                      <h6 class="card-text"></h6>
                      <h6 class="card-text"></h6>
                      <h6 class="card-text"></h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item row">
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/nicole.jpg" alt="Nicole Li">
                    <div class="card-body">
                      <h5 class="card-title gold">Nicole Li</h5>
                      <h6 class="card-subtitle mb-2 gold">Web Developer</h6>
                      <h6 class="card-text">Major: Undeclared</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Nicole hails from California and writes impulsively. She can be described primarily as a mixture of carbon, hydrogen, nitrogen, and oxygen atoms. You can find her staring at a screen about 90% of the time.</h6>
                    </div>
                  </div>
                </div>

                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/allison.jpg" alt="Allison Turner">
                    <div class="card-body">
                      <h5 class="card-title gold">Allison Turner</h5>
                      <h6 class="card-subtitle mb-2 gold">Web Developer</h6>
                      <h6 class="card-text">Major: Computer Science and Mathematics</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Allison is a New England native who loves dogs, coding, and memes. When she isn’t in class, she enjoys playing Dungeons and Dragons with her family, wasting time on Twitter, and reading.</h6>
                    </div>
                  </div>
                </div>

            </div>


            <div class="item row">
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/valeria.jpg" alt="Valeria Yang">
                    <div class="card-body">
                      <h5 class="card-title gold">Valeria Yang</h5>
                      <h6 class="card-subtitle mb-2 gold">Web Developer</h6>
                      <h6 class="card-text">Major: Media Arts and Sciences</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Originating from Vancouver, Valeria loves making 3D models and animations. In her free time, she enjoys playing and designing video games, drawing, traveling, and reading.</h6>
                    </div>
                  </div>
                </div>


                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/artemisia.jpg" alt="Artemisia Luk">
                    <div class="card-body">
                      <h5 class="card-title gold">Artemisia Luk</h5>
                      <h6 class="card-subtitle mb-2 gold">Social Media Coordinator</h6>
                      <h6 class="card-text">Major: Media Arts and Sciences</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Artemisia grew up in San Francisco, CA and loves experimenting with everything related to art and design. Her favorite mediums are photography, graphic arts, and illustration. She also enjoys listening to music and playing her ukulele.</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item row">
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/margaret.jpg" alt="Margaret Sun">
                    <div class="card-body">
                      <h5 class="card-title gold">Margaret Sun</h5>
                      <h6 class="card-subtitle mb-2 gold">Social Media Coordinator</h6>
                      <h6 class="card-text">Major: Undeclared</h6>
                      <h6 class="card-text">Class of 2021</h6>
                    </div>
                  </div>
                </div>

                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/rachel.jpg" alt="Rachel Zhang">
                    <div class="card-body">
                      <h5 class="card-title gold">Rachel Zhang</h5>
                      <h6 class="card-subtitle mb-2 gold">Social Media Coordinator</h6>
                      <h6 class="card-text">Major: Undeclared</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Rachel made her start in programming at the local hackathons in her hometown near Wellesley. In her free time, she likes to immerse herself in anime and anything related to the Legend of Zelda. You can usually find her walking around petting other people’s dogs.</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item row">
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/alicia.jpg" alt="Alicia Lee">
                    <div class="card-body">
                      <h5 class="card-title gold">Alicia Lee</h5>
                      <h6 class="card-subtitle mb-2 gold">Logistics Coordinator</h6>
                      <h6 class="card-text">Major: Computer Science and Psychology</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Alicia, a proud Bostonian native, enjoys restaurant hopping, bullet journaling, playing guitar, and Korean skincare. Outside of CS, she spends her time as student leader of Wellesley Christians on Campus Club and Alumnae Chair of Wellesley’s Taiwanese Cultural Organization.</h6>
                    </div>
                  </div>
                </div>
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/logo yellow.png" alt="Ariele Xiao">
                    <div class="card-body">
                      <h5 class="card-title gold">Ariele Xiao</h5>
                      <h6 class="card-subtitle mb-2 gold">Logistics Coordinator</h6>
                      <h6 class="card-text">Major: Computer Science</h6>
                      <h6 class="card-text">Class of 2021</h6>
                    </div>
                  </div>
                </div>
            </div>

            <div class="item row">
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/celine.jpg" alt="Celine Christory">
                    <div class="card-body">
                      <h5 class="card-title gold">Celine Christory</h5>
                      <h6 class="card-subtitle mb-2 gold">Logistics Coordinator</h6>
                      <h6 class="card-text">Major: Computer Science</h6>
                      <h6 class="card-text">Class of 2021</h6>
                      <h6 class="card-text">Celine is a French New Yorker who loves tech and building start-ups. When she’s not working on a new project, you can find her working with kids, advocating for women in tech and business or working on interfaith issues.</h6>
                    </div>
                  </div>
                </div>
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/isabelle.jpg" alt="Isabelle Chun">
                    <div class="card-body">
                      <h5 class="card-title gold">Isabelle Chun</h5>
                      <h6 class="card-subtitle mb-2 gold">Treasurer</h6>
                      <h6 class="card-text">Major: Computer Science</h6>
                      <h6 class="card-text">Class of 2020</h6>
                      <h6 class="card-text">Isabelle grew up in Palo Alto, CA and plays on the Wellesley golf team. She loves baking, walks around Lake Waban, visiting art museums, and coding.</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item row">
                <div class="col-6 float-left">
                  <div class="card" style="width: 18rem; background-color: #DEE7EA">
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 50px;
                    width: 50%;" class="img-circle" src="./static/img/profiles/heidi.jpg" alt="Heidi Cho">
                    <div class="card-body">
                      <h5 class="card-title gold">Heidi Cho</h5>
                      <h6 class="card-subtitle mb-2 gold">Treasurer</h6>
                      <h6 class="card-text">Major: Computer Science</h6>
                      <h6 class="card-text">Class of 2020</h6>
                      <h6 class="card-text">At Wellesley, Heidi is the co-Treasurer of the CS club, as well as the Vice President of Wellesley’s Korean Students Association. In her free time, she enjoys practicing card tricks, watching anime, and cooking with friends.</h6>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
      </div>
  `);
    }
  });
});
