<template>
    <div class=" w-full bg-white rounded-[1.25rem] max-w-[80rem] space-y-5 md:space-y-10 flex flex-col items-center md:items-start  px-4 sm:px-7 py-6">
        <div class=" w-full flex flex-col md:flex-row md:items-start items-center space-y-4 md:space-y-0 md:space-x-7 lg:space-x-3">
            <div class=" lg:w-full lg:max-w-[16.0625rem] flex">
                <div class="  relative">
                    <div class=" w-[9.5rem] h-[9.5rem] lg:w-[13.0625rem] lg:h-[13.0625rem] rounded-full overflow-hidden">
                        <img src="/assets/user.svg" class=" w-full h-full object-cover" alt="">
                    </div>
                    <div class=" w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 absolute bottom-0 right-2 md:right-4 rounded-full flex bg-[#FFCA41]">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" m-auto" width="16" height="16" viewBox="0 0 16 16" fill="none">
                           <path d="M8 13.3464L11.9981 15.872C12.6289 16.2704 13.407 15.6783 13.2396 14.928L12.1783 10.1672L15.7114 6.96363C16.2681 6.45918 15.9704 5.50164 15.2366 5.43679L10.586 5.02413L8.76679 0.531194C8.47955 -0.177065 7.52045 -0.177065 7.23321 0.531194L5.41399 5.02413L0.763362 5.43679C0.0295607 5.50164 -0.268144 6.45918 0.288644 6.96363L3.82167 10.1672L2.7604 14.928C2.59304 15.6783 3.37109 16.2704 4.00191 15.872L8 13.3464Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class=" w-full space-y-8">
               <div class=" w-full flex flex-col  items-center md:items-start space-y-6">
                 <div class=" md:w-full flex items-center justify-between">
                    <h1 class=" text-secondary font-semibold text-2xl font-lato leading-[133.333%]">Alexandra K.</h1>
                    <div class=" hidden items-center space-x-4 md:flex">
                            <div class=" w-6 h-6  rounded-full overflow-hidden">
                                <img src="/assets/it.svg" class=" w-full h-full object-cover" alt="">
                            </div>
                             <div class=" w-6 h-6  rounded-full overflow-hidden">
                                <img src="/assets/en.svg" class=" w-full h-full object-cover" alt="">
                            </div>
                             <div class=" w-6 h-6  rounded-full overflow-hidden">
                                <img src="/assets/de.svg" class=" w-full h-full object-cover" alt="">
                            </div>
                    </div>
                </div>
                <div class=" md:w-full flex items-center flex-wrap justify-start gap-2 sm:gap-4 lg:gap-7">
                    <div class=" bg-[#ec3a4714] py-[0.375rem] px-4 rounded-full flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M0 3.28571V12.7143C0 13.4241 0.597222 14 1.33333 14H2.66667V2H1.33333C0.597222 2 0 2.57589 0 3.28571ZM3.55556 14H12.4444V2H3.55556V14ZM5.33333 7.35714C5.33333 7.23929 5.43333 7.14286 5.55556 7.14286H7.11111V5.64286C7.11111 5.525 7.21111 5.42857 7.33333 5.42857H8.66667C8.78889 5.42857 8.88889 5.525 8.88889 5.64286V7.14286H10.4444C10.5667 7.14286 10.6667 7.23929 10.6667 7.35714V8.64286C10.6667 8.76071 10.5667 8.85714 10.4444 8.85714H8.88889V10.3571C8.88889 10.475 8.78889 10.5714 8.66667 10.5714H7.33333C7.21111 10.5714 7.11111 10.475 7.11111 10.3571V8.85714H5.55556C5.43333 8.85714 5.33333 8.76071 5.33333 8.64286V7.35714ZM14.6667 2H13.3333V14H14.6667C15.4028 14 16 13.4241 16 12.7143V3.28571C16 2.57589 15.4028 2 14.6667 2Z" fill="#EC3A47"/>
                        </svg>
                        <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito">First aid</span>
                    </div>
                     <div class=" bg-[#ec3a4714] py-[0.375rem] px-4 rounded-full flex items-center space-x-3">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15.6246 5.5H13.7537L13.2337 4.2C12.6993 2.86344 11.424 2 9.98427 2H6.01552C4.57614 2 3.30052 2.86344 2.76583 4.2L2.24583 5.5H0.375199C0.131137 5.5 -0.0479262 5.72938 0.0114489 5.96594L0.198949 6.71594C0.240512 6.88282 0.390512 7.00001 0.5627 7.00001H1.18989C0.7702 7.36657 0.499887 7.89938 0.499887 8.50001V10C0.499887 10.5038 0.692387 10.9584 0.999888 11.3103V13C0.999888 13.5522 1.4477 14 1.99989 14H2.99989C3.55208 14 3.99989 13.5522 3.99989 13V12H11.9999V13C11.9999 13.5522 12.4477 14 12.9999 14H13.9999C14.5521 14 14.9999 13.5522 14.9999 13V11.3103C15.3074 10.9588 15.4999 10.5041 15.4999 10V8.50001C15.4999 7.89938 15.2296 7.36657 14.8102 7.00001H15.4374C15.6096 7.00001 15.7596 6.88282 15.8012 6.71594L15.9887 5.96594C16.0477 5.72938 15.8687 5.5 15.6246 5.5ZM4.6227 4.94282C4.85052 4.37344 5.40208 4 6.01552 4H9.98427C10.5977 4 11.1493 4.37344 11.3771 4.94282L11.9999 6.5H3.99989L4.6227 4.94282ZM2.99989 9.99376C2.39989 9.99376 1.99989 9.59501 1.99989 8.99688C1.99989 8.39876 2.39989 8.00001 2.99989 8.00001C3.59989 8.00001 4.49989 8.8972 4.49989 9.49532C4.49989 10.0934 3.59989 9.99376 2.99989 9.99376ZM12.9999 9.99376C12.3999 9.99376 11.4999 10.0934 11.4999 9.49532C11.4999 8.8972 12.3999 8.00001 12.9999 8.00001C13.5999 8.00001 13.9999 8.39876 13.9999 8.99688C13.9999 9.59501 13.5999 9.99376 12.9999 9.99376Z" fill="#EC3A47"/>
                        </svg>
                        <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito">Own car</span>
                    </div>
                     <div class=" bg-[#ec3a4714] py-[0.375rem] px-4 rounded-full hidden md:flex  items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M15.9852 12.4404C15.7752 11.9304 15.1902 11.6879 14.6802 11.9004L14.1277 12.1304L13.1602 9.58291C14.3577 8.70791 14.7802 7.07541 14.0227 5.76291L11.8577 2.00041C11.6577 1.65291 11.2302 1.50791 10.8577 1.66041L8.00017 2.84541L5.14267 1.66041C4.77017 1.50541 4.34267 1.65291 4.14267 2.00041L1.97767 5.76291C1.22267 7.07541 1.64267 8.70791 2.84017 9.58041L1.87267 12.1279L1.32017 11.8979C0.81017 11.6854 0.22767 11.9279 0.0151701 12.4379C-0.0273299 12.5404 0.0201701 12.6579 0.12267 12.7004L4.18017 14.3854C4.28267 14.4279 4.39767 14.3804 4.44017 14.2779C4.65017 13.7679 4.41017 13.1829 3.90017 12.9704L3.34767 12.7404L4.33267 10.1504C4.44267 10.1629 4.55267 10.1829 4.66017 10.1829C5.95267 10.1829 7.14517 9.35541 7.49517 8.05041L8.00017 6.16541L8.50517 8.05041C8.85517 9.35541 10.0477 10.1829 11.3402 10.1829C11.4477 10.1829 11.5577 10.1629 11.6677 10.1504L12.6502 12.7404L12.0977 12.9704C11.5877 13.1829 11.3452 13.7679 11.5577 14.2779C11.6002 14.3804 11.7177 14.4279 11.8177 14.3854L15.8777 12.7004C15.9777 12.6579 16.0277 12.5429 15.9852 12.4404ZM6.89767 5.65291L4.09517 4.49041L5.00767 2.90541L7.37017 3.88541L6.89767 5.65291ZM9.10267 5.65291L8.63017 3.88541L10.9927 2.90541L11.9052 4.49041L9.10267 5.65291Z" fill="#EC3A47"/>
                        </svg>
                        <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito">Event jobs</span>
                    </div>
                     <div class=" bg-[#ec3a4714] py-[0.375rem] px-4 rounded-full hidden md:flex items-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.5 5H3.5C2.67156 5 2 5.67156 2 6.5V13.5C2 14.3284 2.67156 15 3.5 15H4V15.5C4 15.7762 4.22375 16 4.5 16H5.5C5.77625 16 6 15.7762 6 15.5V15H10V15.5C10 15.7762 10.2238 16 10.5 16H11.5C11.7762 16 12 15.7762 12 15.5V15H12.5C13.3284 15 14 14.3284 14 13.5V6.5C14 5.67156 13.3284 5 12.5 5ZM12 11.75C12 11.8881 11.8881 12 11.75 12H4.25C4.11188 12 4 11.8881 4 11.75V11.25C4 11.1119 4.11188 11 4.25 11H11.75C11.8881 11 12 11.1119 12 11.25V11.75ZM12 8.75C12 8.88813 11.8881 9 11.75 9H4.25C4.11188 9 4 8.88813 4 8.75V8.25C4 8.11187 4.11188 8 4.25 8H11.75C11.8881 8 12 8.11187 12 8.25V8.75ZM6.5 1.5H9.5V4H11V1.5C11 0.671562 10.3284 0 9.5 0H6.5C5.67156 0 5 0.671562 5 1.5V4H6.5V1.5Z" fill="#EC3A47"/>
                      </svg>
                        <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito">Traveller</span>
                    </div>
                     <div class=" bg-[#ec3a4714] py-[0.375rem] px-4 rounded-full hidden items-center space-x-3 lg:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <path d="M3.8025 7.505C3.715 7.2025 3.6075 6.675 3.6075 6.675H3.595C3.595 6.675 3.4875 7.2025 3.4 7.505L3.1225 8.4425H4.075L3.8025 7.505ZM15.4 4H8.4V12H15.4C15.7325 12 16 11.7325 16 11.4V4.6C16 4.2675 15.7325 4 15.4 4ZM14.8 7C14.8 7.165 14.665 7.3 14.5 7.3H14.215C14.0425 7.89 13.6725 8.485 13.1475 9.0475C13.3575 9.2075 13.575 9.36 13.8 9.4975C13.9375 9.5825 13.9825 9.76 13.9025 9.9025L13.705 10.25C13.62 10.3975 13.4325 10.445 13.2875 10.3575C12.9725 10.1625 12.675 9.955 12.4025 9.735C12.13 9.9525 11.835 10.1625 11.5175 10.3575C11.3725 10.445 11.185 10.3975 11.1 10.25L10.9025 9.9025C10.8225 9.7625 10.8675 9.5825 11.0075 9.4975C11.24 9.355 11.4575 9.205 11.66 9.0475C11.4625 8.8375 11.2875 8.6225 11.135 8.405C11.035 8.2625 11.08 8.065 11.2275 7.9775L11.39 7.88L11.5725 7.7725C11.7075 7.6925 11.8825 7.73 11.9725 7.8575C12.0975 8.0325 12.2425 8.2075 12.4075 8.38C12.745 8.025 13.0025 7.6575 13.1575 7.3H10.3C10.135 7.3 10 7.165 10 7V6.6C10 6.435 10.135 6.3 10.3 6.3H11.9V5.9C11.9 5.735 12.035 5.6 12.2 5.6H12.6C12.765 5.6 12.9 5.735 12.9 5.9V6.3H14.5C14.665 6.3 14.8 6.435 14.8 6.6V7ZM0 4.6V11.4C0 11.7325 0.2675 12 0.6 12H7.6V4H0.6C0.2675 4 0 4.2675 0 4.6ZM1.4725 10.0025L2.91 5.775C2.9525 5.6525 3.065 5.5725 3.195 5.5725H4.0075C4.135 5.5725 4.25 5.655 4.2925 5.775L5.73 10.0025C5.795 10.1975 5.6525 10.4 5.445 10.4H4.8725C4.8078 10.4 4.74485 10.379 4.69304 10.3403C4.64123 10.3015 4.60333 10.247 4.585 10.185L4.35 9.3875H2.845L2.6175 10.1825C2.58 10.31 2.4625 10.4 2.33 10.4H1.7575C1.5525 10.4 1.4075 10.1975 1.4725 10.0025Z" fill="#EC3A47"/>
                        </svg>
                        <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito">Multilingual</span>
                    </div>
                     <div class=" bg-[#ec3a4714] py-[0.375rem] px-4 rounded-full flex items-center space-x-3">
                         <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito lg:block hidden">+2 more</span>
                         <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito hidden md:block lg:hidden">+3 more</span>
                           <span class=" text-primary text-[0.875rem] font-bold leading-[171.429%] font-nunito md:hidden">+5 more</span>
                    </div>
                </div>
               </div>

               <div class=" w-full hidden flex-col items-start space-y-5 lg:flex">
                <p class=" text-secondary font-lato text-base font-normal leading-[175%] max-w-[56.9375rem]">
                    👋🏻 Reliable and with a strong motivation to grow professionally in the education sector, she knows how to take care of tasks
                    assigned with commitment and resoluteness, always acting in compliance with the feedback and recommendations of colleagues
                    and above with a view to continuous improve.
                </p>

                <div class=" flex items-center space-x-8 w-full">
                    <button class=" bg-primary py-[0.75rem] px-8 rounded-full text-white text-[0.875rem] font-lato font-bold leading-[171.429%] hover:scale-110 duration-200">BOOK NOW</button>
                    <a href="#" class=" text-primary font-bold font-lato text-base hover:text-secondary duration-200">EXPLORE PROFILE</a>
                </div>
               </div>
            </div>
        </div>
          <div class=" md:w-full lg:hidden flex-col items-center md:items-start space-y-5 flex">
                <p class=" text-secondary hidden md:block font-lato text-base font-normal leading-[175%] max-w-[36.5rem]">
                    👋🏻 Reliable and with a strong motivation to grow professionally in the education sector, she knows how to take care of tasks
                    assigned with commitment and resoluteness, always acting in compliance with the feedback and ...
                </p>
                 <p class=" text-secondary md:hidden font-lato text-center text-[0.875rem] font-normal leading-[175%] max-w-[36.5rem]">
                    👋🏻 Reliable and with a strong motivation to grow professionally in the education sector, she knows how to take care of tasks
                        assigned with commitment and ...
                </p>

                <div class=" flex items-center space-x-8 md:w-full">
                    <button class=" bg-primary py-[0.75rem] px-8 rounded-full text-white text-[0.75rem] md:text-[0.875rem] font-lato font-bold leading-[171.429%] hover:scale-110 duration-200">BOOK NOW</button>
                    <a href="#" class=" hidden md:block text-primary font-bold font-lato text-base hover:text-secondary duration-200">EXPLORE PROFILE</a>
                </div>
         </div>
    </div>
</template>
