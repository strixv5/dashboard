
export default function RoundBorderGraph() {
  return (
    <div className="flex-1 flex relative items-center justify-center">
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89.724 9.00047C89.707 4.02994 93.7329 -0.059905 98.6803 0.419418C116.632 2.15864 133.724 9.26295 147.676 20.9096C163.94 34.4866 174.893 53.3661 178.607 74.2243C182.32 95.0826 178.556 116.582 167.978 134.938C158.903 150.685 145.313 163.252 129.065 171.08C124.587 173.237 119.397 170.788 117.697 166.117C115.998 161.446 118.441 156.331 122.864 154.063C135.149 147.76 145.425 138.024 152.382 125.951C160.845 111.266 163.856 94.0661 160.885 77.3795C157.914 60.6929 149.152 45.5893 136.141 34.7276C125.444 25.7981 112.439 20.2062 98.7335 18.5315C93.7996 17.9286 89.7409 13.971 89.724 9.00047Z"
          fill="#F0B03D"
        />
        <path
          d="M117.704 166.115C119.404 170.786 117.002 175.998 112.185 177.223C102.416 179.707 92.2788 180.539 82.1951 179.661C69.1157 178.522 56.4437 174.536 45.068 167.982C33.6924 161.427 23.8885 152.463 16.344 141.718C8.79946 130.974 3.69709 118.708 1.39472 105.783C-0.907656 92.8576 -0.35427 79.5849 3.01606 66.896C6.38639 54.2071 12.492 42.4092 20.9048 32.3298C29.3175 22.2505 39.8336 14.1337 51.7154 8.54886C60.8758 4.24318 70.677 1.52281 80.7023 0.481538C85.6463 -0.0319605 89.6999 4.02996 89.7172 9.00049C89.7346 13.971 85.7036 17.9566 80.774 18.5935C73.3771 19.5493 66.1552 21.6509 59.3723 24.8391C49.8669 29.307 41.454 35.8004 34.7238 43.8639C27.9936 51.9274 23.1091 61.3657 20.4128 71.5168C17.7166 81.668 17.2739 92.2861 19.1158 102.626C20.9577 112.967 25.0396 122.779 31.0752 131.375C37.1108 139.97 44.9539 147.142 54.0544 152.385C63.155 157.629 73.2925 160.818 83.7561 161.729C91.2226 162.379 98.7261 161.857 105.998 160.2C110.844 159.096 116.004 161.444 117.704 166.115Z"
          fill="#4285F4"
        />
      </svg>
      <svg
        className="absolute"
        width="100"
        height="101"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.166504" width="100" height="100" rx="50" fill="#CCF4EF" />
        <path
          d="M31.536 61.4465C29.9493 61.4465 28.5587 61.1198 27.364 60.4665C26.188 59.7945 25.1147 58.6465 24.144 57.0225L27.56 54.8105C27.9707 55.4638 28.3907 55.9865 28.82 56.3785C29.268 56.7705 29.7253 57.0598 30.192 57.2465C30.6773 57.4145 31.1813 57.4985 31.704 57.4985C32.2267 57.4985 32.7027 57.3865 33.132 57.1625C33.58 56.9198 33.9347 56.5838 34.196 56.1545C34.476 55.7252 34.616 55.2398 34.616 54.6985C34.616 54.1198 34.4947 53.6345 34.252 53.2425C34.028 52.8318 33.692 52.5238 33.244 52.3185C32.8147 52.1132 32.292 52.0105 31.676 52.0105C31.396 52.0105 31.0973 52.0478 30.78 52.1225C30.4627 52.1785 30.1267 52.2625 29.772 52.3745C29.4173 52.4865 29.0533 52.6358 28.68 52.8225L27.644 50.0505L32.404 44.8705L33.692 45.5705L25.516 45.4025V41.3985H37.556L38.424 43.1345L31.956 50.0785L30.836 48.7625C30.9853 48.6878 31.228 48.6225 31.564 48.5665C31.9187 48.4918 32.2547 48.4545 32.572 48.4545C33.4493 48.4545 34.2707 48.6132 35.036 48.9305C35.8013 49.2478 36.4827 49.6865 37.08 50.2465C37.6773 50.8065 38.144 51.4692 38.48 52.2345C38.816 52.9812 38.984 53.7838 38.984 54.6425C38.984 55.9492 38.648 57.1158 37.976 58.1425C37.3227 59.1505 36.4267 59.9532 35.288 60.5505C34.168 61.1478 32.9173 61.4465 31.536 61.4465ZM41.695 61.1665L40.771 58.8705L46.483 52.6265C46.8003 52.2718 47.1456 51.8705 47.519 51.4225C47.8923 50.9745 48.2563 50.5172 48.611 50.0505C48.9656 49.5652 49.2456 49.0985 49.451 48.6505C49.675 48.2025 49.787 47.7918 49.787 47.4185C49.787 47.0452 49.703 46.7185 49.535 46.4385C49.367 46.1585 49.1243 45.9438 48.807 45.7945C48.4896 45.6265 48.0883 45.5425 47.603 45.5425C47.1736 45.5425 46.763 45.6545 46.371 45.8785C45.979 46.0838 45.6056 46.4105 45.251 46.8585C44.915 47.3065 44.5976 47.8572 44.299 48.5105L40.771 46.6065C41.163 45.5238 41.7136 44.5718 42.423 43.7505C43.151 42.9105 44.0003 42.2665 44.971 41.8185C45.9416 41.3518 46.9776 41.1185 48.079 41.1185C49.2363 41.1372 50.2816 41.3892 51.215 41.8745C52.1483 42.3412 52.8856 43.0038 53.427 43.8625C53.987 44.7025 54.267 45.6918 54.267 46.8305C54.267 47.2225 54.2203 47.6332 54.127 48.0625C54.0336 48.4918 53.8936 48.9398 53.707 49.4065C53.5203 49.8545 53.2683 50.3398 52.951 50.8625C52.6523 51.3665 52.2883 51.8985 51.859 52.4585C51.4296 53.0185 50.9256 53.6158 50.347 54.2505L45.895 59.0945L45.335 56.9665H55.135V61.1665H41.695ZM61.3188 55.4265L60.0868 51.4225L69.8028 41.5665H75.4308L61.3188 55.4265ZM57.8468 61.1665V41.5665H62.6068V61.1665H57.8468ZM70.4188 61.1665L63.1388 51.5905L66.3588 48.8185L75.9628 61.1665H70.4188Z"
          fill="#0F9D58"
        />
      </svg>
    </div>
  );
}
