import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

import { Button } from "@material-ui/core";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 August to 30 August - 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;
