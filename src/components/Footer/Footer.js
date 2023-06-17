import { Brand, BrandTitle2 } from "../../lib/Lib";
import ButtonLink from "../NavLinkCustom/ButtonLink";

export default function Footer() {
  return (
    <footer className="p-4 border-gray-200 dark:border-gray-700 bg-white sm:p-6 dark:bg-gray-900 border">
      <div className="lg:flex lg:justify-between lg:mx-7">
        <div className="mb-6 xl:mb-0">
          <ButtonLink to="/" className="flex items-center">
            <Brand
              className="h-10 mr-2"
              alt="IX A 29 Logo"
              style={{ aspectRatio: "1/1", width: "3rem" }}
            />
            <span className="self-center text-lg sm:text-xl md:text-xl font-semibold whitespace-nowrap dark:text-white">
              <BrandTitle2 className="text-blue-500" />
            </span>
          </ButtonLink>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Flowbite
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="https://reactrouter.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  React router
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.framer.com/motion/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Framer Motion
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://heroicons.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Hero icons
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.svgrepo.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Svg repo
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              FrameWork
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://react.dev/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  React
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://create-react-app.dev/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Create React App
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://www.instagram.com/ix.apaantuh/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Instagram IX A
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://github.com/jalun118/ix-a-29-vagta-front-end"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github Dev
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Official social media
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  href="https://smpn1pagedangan.sch.id/"
                  className="hover:underline "
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Website
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.instagram.com/smpn1pagedangan_vaghta/"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@smpn1pagedangan14"
                  className="hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <ButtonLink to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </ButtonLink>
              </li>
              <li>
                <ButtonLink to="/terms-conditions" className="hover:underline">
                  Terms &amp; Conditions
                </ButtonLink>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0">
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-1">
                <a
                  target={"_blank"}
                  href="https://ig.me/m/jlngho_c118"
                  className="hover:underline"
                  rel="noreferrer"
                >
                  Developer
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://ig.me/m/ix.apaantuh"
                  className="hover:underline"
                  rel="noreferrer"
                >
                  Instagram Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2023 - {new Date().getFullYear() + 8}{" "}
          <ButtonLink to="/team" className="hover:underline text-blue-600">
            <BrandTitle2 />™
          </ButtonLink>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.youtube.com/@smpn1pagedangan14"
            target={"_blank"}
            className="text-gray-500 hover:text-red-600"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
              <path fillRule="evenodd" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
            <span className="sr-only">youtube</span>
          </a>
          <a
            href="https://instagram.com/ix.apaantuh/"
            target={"_blank"}
            className="text-gray-500 hover:text-pink-600"
            rel="noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">instagram</span>
          </a>
          <a
            href="https://github.com/jalun118/ix-a-29-vagta-front-end"
            target={"_blank"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            rel="noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://smpn1pagedangan.sch.id/"
            target={"_blank"}
            className="text-gray-500 hover:text-blue-700"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
            <span className="sr-only">Website</span>
          </a>
        </div>
      </div>
    </footer>
  );
}