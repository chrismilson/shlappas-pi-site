import React from 'react'

import './Icon.scss'

/**
 * The OG Butter Chicken SVG
 * @param {*} props
 */
export default function Icon (props) {
  return (
    <svg
      className='Icon'
      width='100%'
      height='100%'
      viewBox='0 0 500 500'
    >
      <path
        className='chicken skin'
        id='body'
        d='m414.79269,245.65885c-2.16487,-182.54659 -145.0461,-204.25483 -152.62314,-101.63404c-7.57703,102.62078 -216.48672,-0.98674 -218.65159,147.02401c-2.16487,148.01074 373.4396,137.15662 371.27473,-45.38996l0,-0.00001z'
      />
      <path
        className='chicken skin'
        id='wing'
        d='m217.78978,242.69863c-98.50146,35.52258 -61.69871,92.7534 66.02845,61.17777'
      />
      <line
        className='chicken skin'
        id='upper-feather'
        x1='206.20049' x2='165.01358'
        y1='276.69054' y2='287.35362'
      />
      <line
        className='chicken skin'
        id='lower-feather'
        x1='232.78665' x2='177.58253'
        y1='292.4986' y2='306.31294'
      />
      <line
        className='chicken skin'
        id='left-leg'
        x1='263.82601' x2='278.25845'
        y1='388.08186' y2='475.18394'
      />
      <path
        className='chicken skin'
        id='left-foot'
        d='m302.38431,470.88414c-7.26981,-51.25904 -60.07163,-22.89238 -53.56707,8.95791'
      />
      <line
        className='chicken skin'
        id='right-leg'
        x1='185.87367' x2='176.4612'
        y1='393.08059' y2='476.59583'
      />
      <path
        className='chicken skin'
        id='right-foot'
        d='m205.06439,478.92587c5.94521,-27.90894 -46.38929,-38.7561 -58.21555,-7.89175'
      />
      <path
        className='chicken beak'
        id='upper-beak'
        d='m402.0167,162.99896c58.38581,80.73313 89.21877,93.88964 13.77643,88.50744'
      />
      <path
        className='chicken beak'
        id='lower-beak'
        d='m439.13033,253.26276c22.04799,25.52779 -18.74507,16.74464 -43.01783,58.00825'
      />
      <path
        className='chicken comb'
        id='upper-comb'
        d='m368.49244,107.0332c3.07164,-91.23851 -22.08493,-91.90786 -32.14059,-57.86957c-30.6219,-33.05991 -69.18362,-41.7758 -57.78957,-6.36653c-60.6978,-32.96844 -51.07843,33.54458 -16.76259,87.44998'
      />
      <path
        className='chicken comb'
        id='lower-comb'
        d='m422.48765,284.5258c6.04713,41.89503 -19.35077,102.53257 -31.44501,50.71503c-1.20943,31.42127 -33.86384,58.9838 -32.04971,13.78126'
      />
      <ellipse
        className='chicken eye'
        id='eye'
        cx='323.24461' cy='165.64521'
        rx='2.70609' ry='15.29444'
      />
    </svg>
  )
}
