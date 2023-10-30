"use client"
import { useState } from "react"
import { BtnNearByNotableObs } from "./btn-nearby-notable-obs"
import { BtnNearByObs } from "."

import styles from "./observations.module.css"

export const Parameters = () => {
  const [distance, setDistance] = useState(25)
  const [observations, setObservations] = useState(10)
  return (
    <div className="grid grid-cols-1 gap-1  md:p-4 py-1 px-2">
      <div className="flex flex-col justify-start gap-2  py-1  items-start ">
        
        
        {/* inicio input */}
        <div className="flex flex-row gap-2 items-center  justify-between w-full">
          <label
            htmlFor="distance"
            className="block text-sm font-bold text-birdo-100 w-2/5 leading-none"
          >
            Distance
          </label>

          <input
            value={distance}
            max={50}
            min={5}
            step={5}
            type="range"
            id="distance"
            // className= "mx-auto text-center bg-birdo-100 px-1 border border-birdo-300 text-birdo-900 text-sm rounded-lg focus:ring-birdo-500 focus:border-birdo-500 block md:w-2/5"
            placeholder="km"
            className={styles.slider}
            onChange={(e) => setDistance(parseInt(e.target.value))}
          />

          <p className="block text-sm  text-end font-bold text-birdo-accent-500 w-1/5 leading-none">
            {distance} kms
          </p>
        </div>

        {/* fin input */}

        {/* inicio input */}
        <div className="flex flex-row gap-2 items-center  justify-between w-full">
          <label
            htmlFor="distance"
            className="block text-sm font-bold text-birdo-100 w-2/5 leading-none"
          >
            Observations
          </label>

          <input
            value={observations}
            max={200}
            min={10}
            step={10}
            type="range"
            id="observations"
            className={styles.slider}
            placeholder="km"
            onChange={(e) => setObservations(parseInt(e.target.value))}
          />

          <p className="block text-sm  text-end font-bold text-birdo-accent-500 w-1/5 leading-none">
            {observations}
          </p>
        </div>

        {/* fin input */}
      </div>
      <div className="flex flex-col gap-2 items-start">
        <BtnNearByNotableObs dist={distance} maxResults={observations} />
        <BtnNearByObs dist={distance} maxResults={observations} />
      </div>
    </div>
  )
}
