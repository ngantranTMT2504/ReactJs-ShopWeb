import React from "react";

export const About = () => {
  return (
    <>
      <div className="follow py-5">
        <div className="follow-content text-center mb-5">
          <i class="bi bi-instagram fs-1"></i>
          <h1>Follow @bookshell</h1>
          <p>
            Leo nulla cras augue eros, diam vivamus et lectus volutpat at
            facilisi tortor porta.
          </p>
          <button className="btn-custom px-4 py-3">Follow instagram</button>
        </div>
        <div className="follow-image">
          <div className="d-flex w-100">
            <div className="img-wrap">
              <img src="/images/instagram-feed.jpg" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="features py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <i class="bi bi-truck fs-1"></i>
              <h4>Worldwide Free Shipping</h4>
              <p>
                Worldwide Free Shipping Justo vestibulum risus impe rdietsconse
                sectetur.
              </p>
            </div>
            <div className="col-lg-3">
              <i class="bi bi-recycle fs-1"></i>
              <h4>Free Returns For All</h4>
              <p>
                Worldwide Free Shipping Justo vestibulum risus impe rdietsconse
                sectetur.
              </p>
            </div>
            <div className="col-lg-3">
              <i class="bi bi-percent fs-1"></i>
              <h4>10% Student Discounts</h4>
              <p>
                Worldwide Free Shipping Justo vestibulum risus impe rdietsconse
                sectetur.
              </p>
            </div>
            <div className="col-lg-3">
              <i class="bi bi-gift fs-1"></i>
              <h4>Gift Vouchers</h4>
              <p>
                Worldwide Free Shipping Justo vestibulum risus impe rdietsconse
                sectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="publisher py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="/images/publisher-image.png"></img>
            </div>
            <div className="col-lg-6 my-auto">
              <h4>Become Our Partner</h4>
              <h1 className="">Self - Publishing And Book Writing</h1>
              <p className="my-3">
                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
              <div>
                <button className="btn-custom py-3 px-4">Contact now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
