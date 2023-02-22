import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <div>
          <Link
            to="/"
            style={{
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
            }}
          >
            <p className="text-xl font-bold">{siteTitle}</p>
          </Link>
          
        </div>
        <div className="flex">
          <div className="menu px-4 py-1 lg:pl-8">
            <Link
              to="/developers/"
              className="font-bold px-2 lg:px-4 relative lg:top-1"
            >
              Developers
            </Link>
            <Link
              to="/corporations/"
              className="font-bold px-2 lg:px-4 relative lg:top-1"
            >
              Corporations
            </Link>
            <Link
              to="/faq/"
              className="font-bold px-2 lg:px-4 relative lg:top-1"
            >
              FAQ
            </Link>
          </div>
          <div>
            <input
              type="text"
              className="rounded rounded-full border border-slate-300 p-2 pl-4 lg:w-64"
              placeholder="Search marketplace..."
            />
          </div>
          <div className="lg:ml-8">
            <Link
                to="/login/"
                className="font-bold px-2 lg:px-4 text-pink-500 relative top-2"
              >
                Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
