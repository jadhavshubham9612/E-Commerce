import "../components/css/home.css";
import Carousel from 'react-bootstrap/Carousel';
import { useBoundStore } from "../store/store";
import { useEffect ,useState} from "react";


// import {img1} from ""

export default function Home() {
const [search,setSearch]=useState("")
  const links=useBoundStore((state)=>state.images)
  const getImages=useBoundStore((state)=>state.getImages)

 

  useEffect(()=>{
    if(search !=="")
    {
      getImages(search)
    }
   
  },[getImages,search])
  return (
    <>
     <Carousel>
      <Carousel.Item interval={1000}>
      <div>
            <img src="IMAGE/shopping1.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block ">
                <h2 class="text-capitalize text-white">best collection</h2>
                <h1 class="text-uppercase py-2 fw-bold text-white">new arrivals</h1>
                <a href="#" class="btn mt-3 text-uppercase">shop now</a>
            </div>
          </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div>
            <img src="IMAGE/shopping2.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h2 class="text-capitalize text-white">best price & offfer</h2>
                <h1 class="text-uppercase py-2 fw-bold text-white">new season</h1>
                <a href="#" class="btn mt-3 text-uppercase">buy now</a>
            </div>
          </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <div >
            <img src="IMAGE/shopping3.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h2 class="text-capitalize text-white">best sale</h2>
                <h1 class="text-uppercase py-2 fw-bold text-white">new offer</h1>
                <a href="#" class="btn mt-3 text-uppercase">shop now</a>
            </div>
          </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div >
            <img src="IMAGE/shopping4.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h2 class="text-capitalize text-white">best sale</h2>
                <h1 class="text-uppercase py-2 fw-bold text-white">new offer</h1>
                <a href="#" class="btn mt-3 text-uppercase">shop now</a>
            </div>
          </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <div >
            <img src="IMAGE/shopping5.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h2 class="text-capitalize text-white">best sale</h2>
                <h1 class="text-uppercase py-2 fw-bold text-white">new offer</h1>
                <a href="#" class="btn mt-3 text-uppercase">shop now</a>
            </div>
          </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <section id="collection" class="py-5">
        <div class="container">
          <div class="title text-center">
            <h2 class="position-relative d-inline-block">New Collection</h2>
          </div>

          <div class="row g-0">
            <div class="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <button
                type="button"
                class="btn m-2 text-dark active-filter-btn"
                data-filter="*"
              >
                All
              </button>
              <button
                type="button"
                class="btn m-2 text-dark"
                data-filter=".best"
              >
                Best Sellers
              </button>
              <button
                type="button"
                class="btn m-2 text-dark"
                data-filter=".feat"
              >
                Featured
              </button>
              <button
                type="button"
                class="btn m-2 text-dark"
                data-filter=".new"
              >
                New Arrival
              </button>
            </div>

            <div class="collection-list mt-4 row justify-content-center gx-0 gy-3">
              <div class="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div class="collection-img position-relative">
                  <img src="IMAGE/collection1.jpg" class="w-100" />
                  <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div class="text-center">
                  <div class="rating mt-3">
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <p class="text-capitalize my-1">Classy Modern</p>
                  <span class="fw-bold">Rs 8000</span>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div class="collection-img position-relative">
                  <img src="IMAGE/collection2.jpg" class="w-100" />
                  <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div class="text-center">
                  <div class="rating mt-3">
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <p class="text-capitalize my-1">Jacket</p>
                  <span class="fw-bold">Rs 6000</span>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3 p-2 new">
                <div class="collection-img position-relative">
                  <img src="IMAGE/collection3.jpg" class="w-100" />
                  <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div class="text-center">
                  <div class="rating mt-3">
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <p class="text-capitalize my-1">Panjabi Dress</p>
                  <span class="fw-bold">Rs 4000</span>
                </div>
              </div>
            </div>

            <div class="collection-list mt-4 row justify-content-center gx-0 gy-3">
              <div class="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div class="collection-img position-relative">
                  <img src="IMAGE/collection4.png" class="w-100" />
                  <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div class="text-center">
                  <div class="rating mt-3">
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <p class="text-capitalize my-1">Navy Blue shirt</p>
                  <span class="fw-bold">Rs 4500</span>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div class="collection-img position-relative">
                  <img src="IMAGE/collection5.png" class="w-100" />
                  <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div class="text-center">
                  <div class="rating mt-3">
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <p class="text-capitalize my-1">gray shirt</p>
                  <span class="fw-bold">Rs 5050</span>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3 p-2 new">
                <div class="collection-img position-relative">
                  <img src="IMAGE/collection6.png" class="w-100" />
                  <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div class="text-center">
                  <div class="rating mt-3">
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="text-primary">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <p class="text-capitalize my-1"> Pink shirt</p>
                  <span class="fw-bold">Rs 3000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
  <section>
    <div class="nasa-img">
    <h2>Search Nasa Images</h2>
    </div>
    <div class="input-group justify-content-center  m-auto p-4  w-50">
    <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
    </div>


      <div className="row  m-1">
     {links.map((item)=>(
      <>
      <div className="col-4">{
        item !==undefined ? <img src={`${item[0].href}`} class="w-100"
        />:""
      }
      
      </div>
      </>
     ))}
      </div>
  </section>
    </>
  );
}
