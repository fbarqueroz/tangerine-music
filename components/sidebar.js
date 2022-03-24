import { 
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
  RssIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-700 p-5 text-sm border-r border-gray-600">
      <div className="space-y-4">
        <button className="flex item-center space-x-2 hover:text-gray-800">
          <HomeIcon className="h-5 w-5"/>
          <p>
            Home
          </p>
        </button>

        <button className="flex item-center space-x-2 hover:text-gray-800">
          <SearchIcon className="h-5 w-5"/>
          <p>
            Search
          </p>
        </button>

        <button className="flex item-center space-x-2 hover:text-gray-800">
          <LibraryIcon className="h-5 w-5"/>
          <p>
            Library
          </p>
        </button>
        <hr className="borer-t-[0.1px] border-gray-600"/>


        <button className="flex item-center space-x-2 hover:text-gray-800">
          <HeartIcon className="h-5 w-5"/>
          <p>
            Liked Songs
          </p>
        </button>

        <button className="flex item-center space-x-2 hover:text-gray-800">
          <RssIcon className="h-5 w-5"/>
          <p>
            Your Episodes
          </p>
        </button>

        <button className="flex item-center space-x-2 hover:text-gray-800">
          <PlusCircleIcon className="h-5 w-5"/>
          <p>
            Create Playlist
          </p>
        </button>
        <hr className="borer-t-[0.1px] border-gray-600"/>

        {/*Playlist */}
        <p className="cursor-pointer hover:text-gray-800">
          Playlist name ...
        </p>
      </div>
    </div>
  )
}

export default Sidebar