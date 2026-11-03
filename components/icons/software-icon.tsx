import React, { forwardRef } from "react";

export interface SoftwareIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Defines both the width and height of the icon.
   * @default 24
   */
  size?: number | string;
  /**
   * Defines the stroke color of the icon.
   * @default "currentColor"
   */
  color?: string;
}

const SoftwareIcon = forwardRef<SVGSVGElement, SoftwareIconProps>(
  ({ color = "currentColor", size = 24, className = "", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 682.667 682.667"
        className={`lucide ${className}`.trim()}
        {...props}
      >
        <defs>
          <clipPath id="a" clipPathUnits="userSpaceOnUse">
            <path d="M0 512h512V0H0Z" />
          </clipPath>
        </defs>
        <g
          clipPath="url(#a)"
          transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
          fill="none"
          stroke={color}
          strokeWidth={20.176}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        >
          <path d="M0 0h455.519" transform="translate(10 356.674)" />
          <path
            d="M0 0c13.096 0 23.782 10.652 23.782 23.741S13.096 47.482 0 47.482c-13.067 0-23.754-10.652-23.754-23.741S-13.067 0 0 0Z"
            transform="translate(93.507 399.228)"
          />
          <path
            d="M0 0h89.46c13.067 0 23.754-10.681 23.754-23.741 0-13.061-10.687-23.741-23.754-23.741H0c-13.067 0-23.754 10.68-23.754 23.741C-23.754-10.681-13.067 0 0 0Z"
            transform="translate(299.95 446.71)"
          />
          <path
            d="M0 0c13.096 0 23.782 10.652 23.782 23.741S13.096 47.482 0 47.482c-13.067 0-23.754-10.652-23.754-23.741S-13.067 0 0 0Z"
            transform="translate(181.209 399.228)"
          />
          <path d="m0 0-20.013-83.747" transform="translate(162.416 279.756)" />
          <path
            d="m0 0 28.317 31.788c1.247 1.388 1.247 3.654 0 5.042L0 68.618"
            transform="translate(208.507 203.573)"
          />
          <path
            d="m0 0-28.317 31.788c-1.248 1.388-1.248 3.654 0 5.042L0 68.618"
            transform="translate(96.314 203.573)"
          />
          <path
            d="M0 0c10.941-2.437 21.174-6.743 30.387-12.522l8.192 8.159C43.426.51 51.391.51 56.267-4.363l12.897-12.891c4.875-4.873 4.875-12.834 0-17.679L61-43.12a96.571 96.571 0 0 0 12.473-30.088h11.479c6.889 0 12.529-5.638 12.529-12.494v-18.274c0-6.855-5.64-12.493-12.529-12.493H73.416A96.87 96.87 0 0 0 61-146.387l8.164-8.159c4.875-4.873 4.875-12.834 0-17.679l-12.897-12.919c-4.876-4.873-12.841-4.873-17.688 0l-8.192 8.16A96.692 96.692 0 0 0 .34-189.422v-11.615c0-6.885-5.641-12.523-12.5-12.523h-18.283c-6.861 0-12.501 5.638-12.501 12.523v11.643c-10.772 2.437-20.891 6.715-29.991 12.41l-8.163-8.16c-4.876-4.873-12.84-4.873-17.688 0l-12.925 12.919c-4.848 4.845-4.848 12.806 0 17.679l8.191 8.159a96.251 96.251 0 0 0-12.443 29.918h-11.594c-6.887 0-12.501 5.638-12.501 12.493v18.274c0 6.856 5.614 12.494 12.501 12.494h11.566a96.76 96.76 0 0 0 12.273 29.776l-8.22 8.244c-4.875 4.845-4.875 12.806 0 17.679l12.897 12.891c4.876 4.873 12.841 4.873 17.688 0l8.135-8.103A97.26 97.26 0 0 0-43.284-.17v11.53c0 6.885 5.612 12.523 12.5 12.523h18.255C-5.641 23.883 0 18.245 0 11.36Z"
            transform="translate(404.519 235.56)"
          />
          <path
            d="M0 0c28.459 0 51.533-23.062 51.533-51.534 0-28.445-23.074-51.506-51.533-51.506-28.487 0-51.562 23.061-51.562 51.506C-51.562-23.062-28.487 0 0 0Z"
            transform="translate(383.23 192.241)"
          />
          <path
            d="M0 0h-59.187c-20.464 0-37.246 20.029-37.246 44.479V326.43c0 24.477 16.752 44.479 37.246 44.479H321.84c20.494 0 37.246-20.03 37.246-44.479V107.374M170.529 0H89.375"
            transform="translate(106.433 119.09)"
          />
          <path d="M0 0h.198" transform="translate(151.22 119.09)" />
        </g>
      </svg>
    );
  }
);

SoftwareIcon.displayName = "SoftwareIcon";

export default SoftwareIcon;