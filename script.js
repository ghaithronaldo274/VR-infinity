function showPage(page){

let html="";

/* HOME */
if(page==="home"){
html=`
<div class="hero">
<h1>VR Infinity</h1>
<p>Experience Next Generation VR Gaming</p>
</div>

<h2>Features</h2>
<div class="grid">
<div class="card">50+ VR Games</div>
<div class="card">Multiplayer Rooms</div>
<div class="card">High-End Equipment</div>
</div>
`;
}

/* SHOP */
else if(page==="shop"){
html=`
<h2>Shop</h2>

<div class="grid">

<div class="card">
<img src="headset.jpg" alt="VR Headset">
<h3>VR Headset</h3>
<p>£300</p>
<button onclick="buy('VR Headset')">Buy</button>
</div>

<div class="card">
<img src="controller.jpg" alt="VR Controllers">
<h3>VR Controllers</h3>
<p>£100</p>
<button onclick="buy('VR Controllers')">Buy</button>
</div>

<div class="card">
<img src="gloves.jpg" alt="VR Gloves">
<h3>VR Gloves</h3>
<p>£150</p>
<button onclick="buy('VR Gloves')">Buy</button>
</div>

<div class="card">
<img src="chair.jpg" alt="VR Chair">
<h3>VR Chair</h3>
<p>£250</p>
<button onclick="buy('VR Chair')">Buy</button>
</div>

</div>
`;
}

/* MEMBERSHIP */
else if(page==="membership"){
html=`
<h2>Membership Plans</h2>

<div class="grid">
<div class="card"><h3>Basic</h3><p>£10/month</p><button onclick="buy('Basic')">Buy</button></div>
<div class="card"><h3>Pro</h3><p>£25/month</p><button onclick="buy('Pro')">Buy</button></div>
<div class="card"><h3>Elite</h3><p>£50/month</p><button onclick="buy('Elite')">Buy</button></div>
<div class="card"><h3>Ultimate</h3><p>£75/month</p><button onclick="buy('Ultimate')">Buy</button></div>
</div>
`;
}

/* BOOKING */
else if(page==="booking"){
html=`
<h2>Book VR Session</h2>

<input type="text" placeholder="Full Name">
<input type="email" placeholder="Email">
<input type="date">
<input type="time">
<input type="number" placeholder="Players">

<select>
<option>Action</option>
<option>Racing</option>
<option>Horror</option>
</select>

<button onclick="confirmBooking()">Confirm Booking</button>
`;
}

/* CONTACT */
else if(page==="contact"){
html=`
<h2>Contact Us</h2>

<p>Email: vr@infinity.com</p>
<p>Phone: 0161 000 000</p>

<h3>Send a message</h3>

<input placeholder="Your Name">
<input placeholder="Your Email">
<textarea placeholder="Message"></textarea>

<button onclick="alert('Message sent!')">Send</button>
`;
}

document.getElementById("content").innerHTML=html;
}

/* SEARCH */
function searchSite(){
  let value=document.getElementById("searchInput").value.toLowerCase();

  if(value.includes("shop")) showPage("shop");
  else if(value.includes("book")) showPage("booking");
  else if(value.includes("member")) showPage("membership");
  else showPage("home");
}

/* BUY */
function buy(item){
  alert("You purchased: " + item);
}

/* BOOKING */
function confirmBooking(){
  alert("Booking Confirmed!");
}

showPage("home");
