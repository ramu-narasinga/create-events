import {
  MegaphoneIcon,
  ListIcon,
  LinkIcon,
  GalleryIcon,
  RsvpIcon,
  PaletteIcon,
  UsersIcon,
} from "../icons";

export const CustomizeSection = () => {
  const handleCustomize = () => {
    // TODO: Open customize modal
    console.log("Opening customize modal");
  };

  return (
    <div className="glass rounded-2xl px-8 py-10 flex flex-col items-center">
      <div className="flex items-center justify-around mb-6 w-full">
        <div className="flex items-center">
          <MegaphoneIcon />
          <ListIcon />
          <UsersIcon />
        </div>
        <div>
          <p className="text-white text-xl mb-6 text-center">
            Customize your
            <br />
            event your way
          </p>
        </div>
        <div>
          <LinkIcon />
          <GalleryIcon />
          <RsvpIcon />
        </div>
      </div>

      <button
        onClick={handleCustomize}
        className="w-full arrow border border-white/20 hover:bg-white/20 rounded-2xl py-2 px-6 flex items-center justify-center gap-2 text-white text-base font-medium transition-colors"
      >
        <PaletteIcon />
        Customize
      </button>
    </div>
  );
};
