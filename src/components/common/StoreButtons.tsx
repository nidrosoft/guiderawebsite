"use client"
import Image from "next/image"
import type { CSSProperties } from "react"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/storeLinks"

import appleIcon from "@/assets/images/icon/apple.svg"
import playstoreIcon from "@/assets/images/icon/playstore.svg"

type StoreButtonsProps = {
   className?: string
   buttonClassName?: string
   style?: CSSProperties
}

const StoreButtons = ({ className = "", buttonClassName = "", style }: StoreButtonsProps) => {
   return (
      <div
         className={`d-flex align-items-center flex-wrap platform-button-group ${className}`.trim()}
         style={{ gap: "10px", ...style }}
      >
         <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`d-flex align-items-center ios-button ${buttonClassName}`.trim()}
            aria-label="Download Guidera on the App Store"
         >
            <Image src={appleIcon} alt="" className="icon" />
            <div>
               <span>Download on the</span>
               <strong>App Store</strong>
            </div>
         </a>
         {PLAY_STORE_URL ? (
            <a
               href={PLAY_STORE_URL}
               target="_blank"
               rel="noopener noreferrer"
               className={`d-flex align-items-center windows-button ${buttonClassName}`.trim()}
               aria-label="Get Guidera on Google Play"
            >
               <Image src={playstoreIcon} alt="" className="icon" />
               <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
               </div>
            </a>
         ) : null}
      </div>
   )
}

export default StoreButtons
