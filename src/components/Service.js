import "../components/css/home.css";


export default function Service (){

    return(<>
    <section id = "special" class = "py-5">
        <div class = "container">
            <div class = "title text-center py-5">
                <h2 class = "position-relative d-inline-block">Special Selection</h2>
            </div>

            <div class = "special-list row justify-content-center g-0">
                <div class = "col-md-6 col-lg-4 col-xl-3 p-2">
                    <div class = "special-img position-relative overflow-hidden">
                        <img src = "IMAGE/special1.jpg" class = "w-100"/> 
                        <span class = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i class = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div class = "text-center">
                        <p class = "text-capitalize mt-3 mb-1">Blue shirt</p>
                        <span class = "fw-bold d-block">Rs 2500.50</span>
                        <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

                <div class = "col-md-6 col-lg-4 col-xl-3 p-2 ">
                    <div class = "special-img position-relative overflow-hidden">
                        <img src = "IMAGE/special2.jpg" class = "w-100"/>
                        <span class = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i class = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div class = "text-center">
                        <p class = "text-capitalize mt-3 mb-1">Watch</p>
                        <span class = "fw-bold d-block">Rs 3000.50</span>
                        <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

                <div class = "col-md-6 col-lg-4 col-xl-3 p-2">
                    <div class = "special-img position-relative overflow-hidden">
                        <img src = "IMAGE/special3.jpg" class = "w-100"/>
                        <span class = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i class = "fas fa-heart"></i>
                        </span>
                    </div>
                    <div class = "text-center">
                        <p class = "text-capitalize mt-3 mb-1">Red Hooday</p>
                        <span class = "fw-bold d-block">Rs 1500.50</span>
                        <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>

                
            </div>
        </div>
    </section>

    <section class="services-section mt-5">
        <div class="container text-center common-title fw-bold">
          <h2 class="common-heading"> What We will Do For<br/> your Business</h2>
          <hr class="w-25 mx-auto"></hr>

        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-4 col-md-12">
              <div class="text-center card-box rounded-2 p-5">
                <img src="IMAGE/link.gif" alt="image not found" class="img-fluid" width="200px"/>

                <h5 class="my-3 fw-normal"> Website Development
                 </h5>

                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti.</p>

                <div class="d-flex justify-content-center align-items-center">
                  <a href="services" class="icon-span rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-12">
              <div class="text-center card-box rounded-2 p-5 shadow">
                <img src="IMAGE/speaker.gif" alt="image not found" class="img-fluid" width="200px"/>

                <h5 class="my-3 fw-normal"> Web Application Development
                </h5>

                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti.</p>

                <div class="d-flex justify-content-center align-items-center">
                  <a href="services" class="icon-span rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-12">
              <div class="text-center card-box rounded-2 p-5 ">
                <img src="IMAGE/seo.gif" alt="image not found" class="img-fluid" width="200px"/>

                <h5 class="my-3 fw-normal">Social Media Management
                </h5>

                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti.</p>

                <div class="d-flex justify-content-center align-items-center">
                  <a href="services" class="icon-span rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-12">
              <div class="text-center card-box rounded-2 p-5 ">
                <img src="IMAGE/seo.gif" alt="image not found" class="img-fluid" width="200px"/>

                <h5 class="my-3 fw-normal"> Branding Solutions </h5>

                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti.</p>

                <div class="d-flex justify-content-center align-items-center">
                  <a href="services" class="icon-span rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-12">
              <div class="text-center card-box rounded-2 p-5 ">
                <img src="IMAGE/seo.gif" alt="image not found" class="img-fluid" width="200px"/>

                <h5 class="my-3 fw-normal"> Cloud Storage Solutions </h5>

                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti.</p>

                <div class="d-flex justify-content-center align-items-center">
                  <a href="services" class="icon-span rounded-circle d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


   
    </>)
}