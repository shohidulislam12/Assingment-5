
const history= document.getElementById('history');
const amount=document.getElementById('amount');
const  sec1=document.getElementById('sec1');
const  sec2=document.getElementById('sec2');
const  sec3=document.getElementById('sec3');
//get input all by function
function getNumberofAmount(id){
  const number=document.getElementById(id);
  const number_todigit=parseFloat(number.value);

  const remainamount=parseFloat(amount.innerText)-number_todigit;
if(remainamount<0){

    alert('you have not  Sufficient balance');
 
   return null;
 }
 else  if(number_todigit>0){
    amount.innerText=remainamount;

    number.value='';
     return number_todigit;
    
  }

else 
number.value='';
 alert("you cannaot donat this amount");
 return  null;
}

//section -1 for noakhali
const fundCollectNoakhali=document.getElementById('fundCollectNoakhali');
const NoakhaliDonationButton=document.getElementById('NoakhaliBtn');
NoakhaliDonationButton.addEventListener('click',function(event){
    event.preventDefault();
    const Noakhaliinput=getNumberofAmount('Noakhaliinput');
  if(Noakhaliinput !==null){
    document.getElementById('my_modal_1').showModal();
    const totalfundCollectNoakhali=Noakhaliinput+parseFloat(fundCollectNoakhali.innerText)
   fundCollectNoakhali.innerText=totalfundCollectNoakhali;
   //history add  
     const div=document.createElement('div');
   div.innerHTML =`
   <div class="p-10 border border-gray-300 rounded-xl">
  <h1 class="text-2xl my-7"> ${Noakhaliinput}Taka Donate for Flood at Noakhali, Bangladesh</h1>
<p class="text-[#111111B3]">Time: ${new Date()} </p>
</div>

`
history.appendChild(div)
  }

   
})
//section -2 for feni
const fundCollectFeni=document.getElementById('fundCollectFeni');
const FeniDonationButton=document.getElementById('FeniBtn');
FeniDonationButton.addEventListener('click',function(event){
    event.preventDefault();
    if(Noakhaliinput !==null){
      document.getElementById('my_modal_1').showModal();
    const Feniinput=getNumberofAmount('Feniinput');
    const totalfundCollectFeni=Feniinput+parseFloat(fundCollectFeni.innerText)
   fundCollectFeni.innerText=totalfundCollectFeni;
   const div=document.createElement('div');
   div.innerHTML =`
        <div class="p-10 border border-gray-300 rounded-xl">
       <h1 class="text-2xl my-7"> ${Feniinput} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
    <p class="text-[#111111B3]">Time: ${new Date()} </p>
     </div>
     
   `
   history.appendChild(div)

    } 
})
//section 3 for Quota movement
const fundCollectQuotaMovement=document.getElementById('fundCollecQuotaMovement');
const QuotaMovementDonationButton=document.getElementById('QuotaMovementBtn');
QuotaMovementDonationButton.addEventListener('click',function(event){
    event.preventDefault();
    if(Noakhaliinput !==null){
      document.getElementById('my_modal_1').showModal();
    const  QuotaMovementinput=getNumberofAmount('QuotaMovementinput');
    const totalfundCollectQuotaMovement=QuotaMovementinput+parseFloat(fundCollectQuotaMovement.innerText)
   fundCollectQuotaMovement.innerText=totalfundCollectQuotaMovement;
  
   //history add 
   const div=document.createElement('div');
   div.innerHTML =`
        <div class="p-10 border border-gray-300 rounded-xl">
       <h1 class="text-2xl my-7"> ${QuotaMovementinput}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
    <p class="text-[#111111B3]">Time: ${new Date()} </p>
     </div>
     
   `
   history.appendChild(div)
    }
})
//history section
const Donationbtn=document.getElementById('Donationbtn');
const historybtn=document.getElementById('historybtn');
historybtn.addEventListener('click',function(event){
    event.preventDefault();
    Donationbtn.classList.remove('bg-primary');
    Donationbtn.classList.add('text-gray-500');
    historybtn.classList.add('bg-primary');
    historybtn.classList.remove('text-gray-500');
    history.classList.remove('hidden');
    sec1.classList.add('hidden');
    sec2.classList.add('hidden');
    sec3.classList.add('hidden');
}
)
//donation btn
Donationbtn.addEventListener('click',function(event){
    event.preventDefault();
    historybtn.classList.remove('bg-primary');
   historybtn.classList.add('text-gray-500');
    Donationbtn.classList.add('bg-primary');
   Donationbtn.classList.remove('text-gray-500');
   history.classList.add('hidden')
   sec1.classList.remove('hidden');
   sec2.classList.remove('hidden');
   sec3.classList.remove('hidden');
}
)