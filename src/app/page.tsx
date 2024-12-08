import Image from "next/image";

export default function Home() {
  return (
  <body>
    <header className="text-center justify-center max:ml-6 ">
      <h1 className=" pt-[146px] text-2xl text-[#8F94FF]">JUST UX</h1>

      <h1 className="mt-2 pt-2 font-[700] text-4xl text-[#FFFFFF]">ecommerce<br/>
      user interface kit</h1>
      
    </header>

    {/* Images part */}
<div className="flex flex-row gap-7 justify-center">
<Image
  src="/images/chair.svg" alt="chair"
  width={13} height={12}
  className="h-[199px] w-[109px] "
  />


<div className="max:block mien:flex mien:gap-7">
<Image
  src="/images/bulb.svg" alt="chair"
  width={13} height={12}
  className="h-[199px] w-[109px] mt-20"
  />

<Image
  src="/images/dabba.svg" alt="chair"
  width={13} height={12}
  className="h-[199px] w-[109px] mt-12 max:hidden"
  />

<Image
  src="/images/table.svg" alt="chair"
  width={13} height={12}
  className="h-[199px] w-[109px] mt-4 max:hidden"
  />
  </div>

<Image
  src="/images/cup.svg" alt="chair"
  width={13} height={12}
  className="h-[199px] w-[109px] mb-[200px] max:mb-0"
  />
</div>

{/* mobileee... */}
<div className="flex mien:hidden">
<Image
  src="/images/dabba.svg" alt="chair"
  width={13} height={12}
  className="h-[199px] w-[109px] ml-24 mt-0 max:block"
  />

<Image
  src="/images/table.svg" alt="chair"
  width={13} height={12}
  className="h-[199px] w-[109px] mt-0 ml-20"
  />
  </div>

<section className="bg-[#2a254b]"> 
   <h1 className="font-[500] text-2xl max:pl-10 pl-14 pt-12 text-[#FFFFFF]">Build ecom sites, super fast</h1>

   <p className="pl-14 pt-2 max:hidden">This template was built to help you rapidly, 
    and modularly, build out high quality e-commerce concepts using pre-built content blocks, components and styles.</p>

    <p className="pl-14 max:hidden "> Customise and play around with the template to match your specific requirements, and most of all have fun with it! </p>

{/* For Mobile design */}
<p className="pl-10 pt-2 mien:hidden">This template was built to help you <br/> rapidly, 
 and modularly, build out high quality <br/> e-commerce concepts using pre-built content<br/>  blocks, components and styles.</p>

    <p className="pl-10 mien:hidden "><br/> Customise and play around with the template<br/> to match your specific requirements, and <br/> most of all have fun with it! </p>


{/* Blue Box 1 */}
<div className="grid grid-cols-4 max:grid-cols-1 ml-10 mt-10">
    <div className="h-[322px] w-[620px] max:h-[360px] max:w-[400px] bg-[#4E4D93]">
    <h1 className="pl-[47px] pt-[37px]">Use the styles</h1>

<p className="pl-[47px] pt-4 max:hidden text-xs">Styles in Figma mean you don’t have to repetitively enter values for typography, colors and elevations</p>
<p className="pl-[47px] max:hidden text-xs"> minimising the risk of inconsistencies and streamlining the design process.</p>

<p className="pl-[47px] pt-4 mien:hidden text-sm">Styles in Figma
   mean you don’t have to <br/>repetitively enter values for
    typography, colors<br/> and elevations minimising the risk of
   nconsistencies <br/>and streamlining the design process.</p>


<div className="flex">
<Image
  src="/images/headings.svg" alt="chair"
  width={13} height={12}
  className="h-[140px] w-[199px] mt-[73px] ml-[17px] max:h-[120px] max:w-[100px] max:mt-[95px] max:ml-[43px]"
  />

<Image
  src="/images/blue.svg" alt="chair"
  width={130} height={120}
  className="h-[190px] w-[199px] mt-6 max:h-[250px] max:ml-3 max:w-[100px] max:mt-0"
  />

<Image
  src="/images/dark.svg" alt="chair"
  width={130} height={120}
  className="h-[140px] w-[199px] mt-[73px] max:h-[250px] max:w-[100px] max:ml-3 max:mt-[21px] "
  />

   </div>
    </div>

{/* Blue Box2 */}

    <div className="bg-[#4E4D93] w-[620px] ml-80 max:mt-10 max:ml-0  max:h-[370px] max:w-[400px]">
    <h1 className="pl-[47px] pt-[27px] max:pl-10">Use the components</h1>

<p className="pl-[47px] max:hidden pt-4 text-xs">There’s a bunch of pre-configured components for you to use in this free template. Simply go to </p>
<p className="pl-[47px] max:hidden text-xs">the Style Guide page and under the components header you can see everything included. </p>

<p className="text-xs max:hidden mt-4 ml-[47px]">Buttons, steppers, filter options and more for you to integrate into your screens and modify to<br/>your tastes and requirements. </p>

<p className="pl-10 mien:hidden pt-4 text-xs">There’s a bunch of pre-configured components for <br/>you to use in this free template.Simply go to
the<br/> Style Guide page and under the components header<br/> you can see everything included. </p>

<p className="mien:hidden text-xs mt-4 ml-10">Buttons, steppers, filter options and more for you to<br/> integrate into your screens and modify to your tastes<br/> and requirements. </p>


<div className="flex">
        <Image
  src="/images/chair.svg" alt="chair"
  width={13} height={12}
  className="h-[120px] w-[109px] max:w-[90px] mt-3 ml-[47px] max:ml-10"
  />

<Image
  src="/images/dabba.svg" alt="chair"
  width={13} height={12}
  className="h-[120px] w-[109px] max:w-[90px] mt-3 max:ml-3"
  />

<div className="ml-8 max:ml-2 ">
<button className="bg-[#FFFFFF] py-[5px] items-center justify-center px-[14px] text-[#4E4D93]">Button</button>
  <button className="py-[5px] flex items-center mt-3 justify-center px-[14px] bg-[#2A254B] text-[#FFFFFF]">Button</button>
  <button className="py-[5px] mt-3 bg-[#FFFFFF] text-[#4E4D93] flex items-center justify-center px-[14px]">Button</button>
  <button className="py-[5px] bg-[#F9F9F926] text-[#FFFFFF] mt-3 flex items-center justify-center  px-[14px]">Button</button>
  </div>
  <Image
  src="/images/tick.svg" alt="chair"
  width={130} height={120}
  className="h-[170px] w-[199px] max:h-[155px] max:w-[134px]"
  />

        </div>
    </div>
    </div>
 
 {/* box 3 */}
    <div className="grid grid-cols-4 max:grid-cols-1 ml-10 mt-10 ">
    <div className="h-[322px] max:mt-0 max:ml-0 max:h-[370px] max:w-[400px] w-[620px] bg-[#4E4D93]">
    <h1 className="pl-[47px] max:pl-10 pt-[27px]">Check the layouts</h1>

    <p className="pl-[47px] max:pl-10 max:hidden pt-4 text-xs">As well as components and styles we’ve built a bunch of layouts in both mobile and desktop sizes. <br/>Play around with replacing and modifying the nested content blocks and to switch device, simply use<br/>
    the content block property ‘device’ to toggle between mobile and desktop.</p>

    <p className="pl-[47px] max:pl-10 mien:hidden pt-4 text-xs">As well as components and styles we’ve built a bunch of <br/>layouts in both mobile and desktop sizes.Play around with<br/> replacing and modifying the nested content blocks and<br/> to switch device, simply use
    the content block property<br/> ‘device’ to toggle between mobile and desktop.</p>


<div className="flex mt-3 ml-4">
<Image
  src="/images/chear.svg" alt="chair"
  width={13} height={12}
  className="h-[180px] w-[199px] max:h-[145px] max:w-[169px]  mt-3 "
  />

<Image
  src="/images/chear1.svg" alt="chair"
  width={13} height={12}
  className="h-[180px] w-[199px] max:h-[145px] max:w-[169px] mt-3"
  />


<Image
  src="/images/cap (2).svg" alt="chair"
  width={13} height={12}
  className="h-[180px] w-[199px] max:h-[145px] max:w-[169px] mt-3"
  />
</div>
    </div>

{/* Blue Box 4 */}
    <div className="bg-[#4E4D93] max:mt-10 max:ml-0 max:h-[370px] max:w-[400px] w-[620px] ml-80">
        <h1 className="pl-[47px] pt-[27px]">Use the content blocks</h1>

        <p className="pl-[47px] max:hidden pt-4 text-xs">We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections, forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing<br/> pages.</p>
        
        <p className="pl-[47px] mien:hidden pt-4 text-xs">We’ve built out a multitude of content blocks for you to <br/>use in your landing pages. From hero sections, forms,<br/> CTAs to pricing sections. Everything you need to get<br/> started building polished, modern landing pages.</p>
    
 <Image
  src="/images/email.svg" alt="chair"
  width={13} height={12}
  className="h-[180px] w-[520px] ml-[47px] mt-3 max:h-[120px] max:mt-10 max:w-[320px]"
  />
    </div>
    </div>
 </section> 

  </body>
  );
}
