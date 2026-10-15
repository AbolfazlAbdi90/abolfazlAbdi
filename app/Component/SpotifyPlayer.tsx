"use client";

import { useState } from "react";

const SPOTIFY_URL =
  "https://open.spotify.com/track/0kfe9dDMNl5q8b6TjfZ76u?go=1&sp_cid=cfb28c64-4762-4c65-9c61-c71994b6cb5e&t=29&utm_source=embed_player_p&utm_medium=mobile&nd=1&dlsi=77e76101c9d6405c&autoplay_ok=1";

function getSpotifyEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    if (
      !["open.spotify.com", "www.open.spotify.com", "spotify.com"].includes(
        parsedUrl.hostname,
      )
    ) {
      return null;
    }

    const parts = parsedUrl.pathname.split("/").filter(Boolean);
    const typeIndex = parts[0] === "embed" ? 1 : 0;
    const type = parts[typeIndex];
    const id = parts[typeIndex + 1];

    const allowedTypes = ["track", "album", "playlist", "episode", "show"];

    if (!allowedTypes.includes(type) || !id) {
      return null;
    }

    return `https://open.spotify.com/embed/${type}/${id}?theme=0`;
  } catch {
    return null;
  }
}

export default function SpotifyPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingSession, setIsPlayingSession] = useState(false);
  const [playerKey, setPlayerKey] = useState(0);

  const embedUrl = getSpotifyEmbedUrl(SPOTIFY_URL);

  const startMusic = () => {
    setPlayerKey((previous) => previous + 1);
    setIsPlayingSession(true);
    setIsOpen(true);
  };

  const stopMusic = () => {
    setIsPlayingSession(false);
    setPlayerKey((previous) => previous + 1);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] font-sans">
      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close music player" : "Open music player"}
        className="
          flex items-center gap-3 rounded-full
          border border-[#dfc3a9]
          bg-gradient-to-br from-[#fffaf3] to-[#f1dfcb]
          px-4 py-3 text-[#603923]
          shadow-[0_8px_30px_rgba(75,45,28,0.2)]
          transition duration-300
          hover:-translate-y-1 hover:shadow-xl
        "
      >
        <span
          className={`
            flex h-11 w-11 items-center justify-center
            rounded-full bg-gradient-to-br
            from-[#75472e] to-[#bd8256] text-white shadow-md
            ${isPlayingSession ? "animate-pulse" : ""}
          `}
        >
          {isPlayingSession ? (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M9 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12 3v12.2a3.5 3.5 0 1 1-2-3.16V6l10-2v11.2a3.5 3.5 0 1 1-2-3.16V3.5L12 5v-2Z" />
            </svg>
          )}
        </span>

        <span className="pr-1 text-left">
          <span className="block text-sm font-bold">My Favorite Music</span>
          <span className="mt-0.5 block text-xs text-[#927361]">
            {isPlayingSession ? "Music player" : "Listen on Spotify"}
          </span>
        </span>
      </button>

      {/* Player Panel
          Keep the iframe mounted when closing the panel. */}
      <div
        aria-hidden={!isOpen}
        className={`
          absolute bottom-[76px] right-0
          w-[min(340px,calc(100vw-40px))]
          overflow-hidden rounded-[26px]
          border border-[#dfc3a9]
          bg-gradient-to-b from-[#fffaf3] to-[#f4e4d4]
          shadow-[0_15px_50px_rgba(75,45,28,0.25)]
          transition-all duration-300
          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none translate-y-3 opacity-0"
          }
        `}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#e8d3c0] px-4 py-4">
          <div>
            <h3 className="text-sm font-bold text-[#4e3021]">
              My Favorite Music
            </h3>
            <p className="mt-1 text-xs text-[#927361]">
              Music for coding and creativity
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close player panel"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full text-[#704b37]
              transition hover:bg-[#ead5c1]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Spotify Embed */}
        <div className="p-3">
          {embedUrl ? (
            isPlayingSession ? (
              <iframe
                key={playerKey}
                src={embedUrl}
                width="100%"
                height="352"
                title="My favorite Spotify music"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block rounded-xl"
              />
            ) : (
              <div className="rounded-xl border border-[#e3c8b2] bg-white/60 p-5 text-center">
                <p className="text-sm font-semibold text-[#603923]">
                  Ready for some music?
                </p>
                <p className="mt-2 text-xs leading-6 text-[#796453]">
                  Start the player and press Play in Spotify.
                </p>

                <button
                  type="button"
                  onClick={startMusic}
                  className="
                    mt-4 rounded-full
                    bg-gradient-to-r from-[#75472e] to-[#bd8256]
                    px-5 py-2.5 text-sm font-semibold text-white
                    shadow-md transition hover:brightness-110
                  "
                >
                  Open Spotify
                </button>
              </div>
            )
          ) : (
            <p className="rounded-xl bg-white/60 p-5 text-sm text-[#603923]">
              Please add a valid Spotify track or playlist link.
            </p>
          )}
        </div>

        {/* Stop Button */}
        <div className="px-3 pb-4">
          {isPlayingSession && (
            <button
              type="button"
              onClick={stopMusic}
              className="
                w-full rounded-xl border border-[#d9b79c]
                bg-white/60 px-4 py-2.5
                text-sm font-semibold text-[#70452e]
                transition hover:bg-[#ead5c1]
              "
            >
              Stop Music
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
