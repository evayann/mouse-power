import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mouse-eater")
export class MouseEater extends LitElement {
  @property({ type: Boolean }) isEating = false;

  static styles = css`
    :host {
      display: grid;
      align-items: center;
      justify-items: center;

      > * {
        grid-area: 1 / 1;
      }
    }

    svg {
      width: 100%;
      height: 100%;
      stroke-width: 0.35px;
      translate: 0 10%;

      path {
        stroke-dasharray: 286;
        stroke-dashoffset: 0;
        --animation-duration: 3.5s;
        --animation-start: calc(
          var(--animation-duration) * var(--animation-delay)
        );
        animation: stroked var(--animation-duration) linear
            var(--animation-start, 0s) infinite,
          rotation 1s linear infinite;
        transform-origin: center;
      }
    }

    @keyframes stroked {
      to {
        stroke-dashoffset: 286;
      }
    }

    @keyframes rotation {
      30% {
        rotate: -150deg;
      }
      70% {
        rotate: -240deg;
      }
      to {
        rotate: -360deg;
      }
    }

    img {
      width: 50%;
      height: 50%;
    }
  `;

  render(): TemplateResult {
    return html`
      <img class="mouse-eater" src="./assets/mouse-eater.svg" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="499"
        height="499"
        fill="none"
        stroke="#aaa"
        stroke="#000"
        viewBox="0 0 499 499"
      >
        <defs>
          <radialGradient id="gradient">
            <stop offset="0%" stop-color="white" stop-opacity="0" />
            <stop offset="60%" stop-color="white" stop-opacity="0.2" />
            <stop offset="80%" stop-color="white" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <mask id="mask">
            <circle cx="50%" cy="50%" r="50%" fill="url(#gradient)" />
          </mask>
        </defs>

        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248 249.469c38.5-8.666 124.6 16.9 161 188.5"
          style="--animation-delay: 0.95"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.973 247.724c23.108-31.991 104.552-69.854 245.469 34.617"
          style="--animation-delay: 0.62"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.129 248.743c17.949-35.146 92.651-85.009 247.876-3.297"
          style="--animation-delay: 0.53"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.278 247.747c11.465-37.761 76.198-100.023 243.405-46.981"
          style="--animation-delay: 0.46"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.682 248.115c30.064-25.565 118.184-42.935 230.155 92.099"
          style="--animation-delay: 0.84"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.33 248.643c35.564-17.104 125.209-11.557 199.271 147.459"
          style="--animation-delay: 0.21"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.199 250.311c.483-39.46 45.289-117.301 220.654-112.982"
          style="--animation-delay: 0.78"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.987 249.865c26.324 29.4 45.943 117.047-86.184 232.434"
          style="--animation-delay: 0.13"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.526 252.525c18.008 35.116 14.756 124.872-142.315 202.978"
          style="--animation-delay: 0.43"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.779 249.438c39.46-.527 118.421 42.274 118.588 217.692"
          style="--animation-delay: 0.19"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.957 247.987c-25.771-29.886-43.748-117.884 90.51-230.784"
          style="--animation-delay: 0.33"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.985 248.071c-30.035-25.598-61.248-109.816 54.183-241.904"
          style="--animation-delay: 0.61"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.122 252.24c-39.409-2.065-115.391-49.955-104.046-225.006"
          style="--animation-delay: 0.54"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.561 250.037C209.963 238.046 148.611 172.45 203.982 6"
          style="--animation-delay: 0.65"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.982 250.975C223.531 279.327 137.504 305.137 13 181.564"
          style="--animation-delay: 0.43"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.289 253.517c-1.793 39.423-49.158 115.733-224.283 105.596"
          style="--animation-delay: 0.82"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.599 252.75c4.253 39.234-30.897 121.886-205.514 138.626"
          style="--animation-delay: 0.21"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.453 255.155c12.671 37.373-3.69 125.686-170.505 179.947"
          style="--animation-delay: 0.22"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.819 248.669C213.738 228.772 168.156 151.383 258.47 1"
          style="--animation-delay: 0.65"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.271 248.36c-17.909-35.165-14.405-124.913 142.884-202.577"
          style="--animation-delay: 0.76"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.398 245.907c-8.405-38.558 17.746-124.482 189.589-159.716"
          style="--animation-delay: 0.48"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.731 254.673C226.02 287.628 146.28 328.96 1.001 230.647"
          style="--animation-delay: 0.67"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.302 256.323C238.376 294.518 176.218 359.351 7 313.126"
          style="--animation-delay: 0.27"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.617 247.823c-23.415 31.766-105.221 68.843-245.124-36.98"
          style="--animation-delay: 0.64"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.889 251.922c-17.111 35.561-90.611 87.18-247.728 9.168"
          style="--animation-delay: 0.09"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.447 254.205c-36.082 15.982-125.509 7.631-194.555-153.627"
          style="--animation-delay: 0"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M240.855 253.982C208.017 275.869 118.473 282.853 23 135.692"
          style="--animation-delay: 0.26"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M245.058 252.947C206.102 259.255 121.717 228.497 95.826 55"
          style="--animation-delay: 0.39"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.115 248.21c36.614 14.724 92.975 84.655 25.51 246.581"
          style="--animation-delay: 0.84"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.551 253.091c38.585 8.281 106.021 67.604 67.087 238.647"
          style="--animation-delay: 0.79"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.879 250.799c31.682 23.529 68.464 105.468-37.861 244.99"
          style="--animation-delay: 0.40"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.118 249.619c37.398-12.6 125.68 3.93 179.622 170.848"
          style="--animation-delay: 0.23"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.901 247.679c19.677-34.208 96.772-80.287 247.732 9.058"
          style="--animation-delay: 0.54"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.162 248.676c14.219-36.812 83.367-94.13 246.207-28.901"
          style="--animation-delay: 0.59"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.212 247.773c7.501-38.744 65.451-107.363 237.245-71.888"
          style="--animation-delay: 0.41"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.652 248.098c27.26-28.535 113.113-54.921 238.441 67.815"
          style="--animation-delay: 0.81"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.34 248.35c33.606-20.689 123.343-24.438 213.446 126.071"
          style="--animation-delay: 0.28"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.398 250.332c-3.598-39.299 32.922-121.354 207.794-135.185"
          style="--animation-delay: 0.88"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M253.12 249.497c29.223 26.521 57.795 111.671-61.696 240.098"
          style="--animation-delay: 0.48"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.937 252.191c21.541 33.065 27.584 122.678-120.572 216.6"
          style="--animation-delay: 0.13"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.879 249.3c39.195-4.602 122.157 29.808 140.455 204.269"
          style="--animation-delay: 0.06"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.923 248.149c-28.722-27.063-55.7-112.731 66.169-238.903"
          style="--animation-delay: 0.98"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.954 248.126c-32.52-22.356-72.271-102.896 28.888-246.209"
          style="--animation-delay: 0.35"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.521 252.258c-39.411 2.021-119.937-37.76-126.746-213.046"
          style="--animation-delay: 0.42"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.74 250.229c-38.635-8.041-106.439-66.943-68.57-238.225"
          style="--animation-delay: 0.25"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M251.24 250.808c-24.373 31.038-107.271 65.602-243.881-44.44"
          style="--animation-delay: 0.76"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.813 253.408c2.293 39.397-36.931 120.195-212.166 128.213"
          style="--animation-delay: 0.09"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.048 252.717c8.286 38.584-18.132 124.427-190.084 159.127"
          style="--animation-delay: 0.26"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M251.146 255.02c16.467 35.864 9.322 125.395-150.991 196.608"
          style="--animation-delay: 0.37"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.856 248.841c-35.955-16.267-89.293-88.53-15.007-247.443"
          style="--animation-delay: 0.38"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.273 248.488c-21.448-33.126-27.239-122.755 121.179-216.261"
          style="--animation-delay: 0.61"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.141 245.931c-12.346-37.483 4.783-125.65 172.064-178.457"
          style="--animation-delay: 0.83"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.389 254.823c-18.188 35.022-93.229 84.375-247.893 1.606"
          style="--animation-delay: 0.30"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.128 256.405c-5.925 39.016-61.048 109.926-234.138 81.44"
          style="--animation-delay: 0.78"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.541 247.504C232.535 281.521 155 326.855 4.908 236.06"
          style="--animation-delay: 0.55"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.251 251.864c-13.343 37.139-81.115 96.078-245.453 34.724"
          style="--animation-delay: 0.95"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.058 254.387C213.821 274.012 124.01 274.95 38.665 121.692"
          style="--animation-delay: 0.63"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M241.479 254.846c-30.4 25.164-118.742 41.366-228.915-95.138"
          style="--animation-delay: 0.24"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M245.552 253.382c-38.095 10.301-125.207-11.57-168.893-181.461"
          style="--animation-delay: 0.73"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.103 248.354c37.94 10.861 101.227 74.591 50.862 242.624"
          style="--animation-delay: 0.10"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M253.02 252.75c39.234 4.249 112.441 56.284 91.395 230.435"
          style="--animation-delay: 0.65"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.131 250.851c33.944 20.128 78.999 97.825-12.335 247.59"
          style="--animation-delay: 0.98"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mouse-eater": MouseEater;
  }
}
