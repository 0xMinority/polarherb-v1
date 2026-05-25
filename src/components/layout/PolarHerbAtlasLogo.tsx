import Image from "next/image";
import Link from "next/link";

const LOGO_DISPLAY_HEIGHT = 54;
const LOGO_DISPLAY_WIDTH = 268;
const SOURCE_HEIGHT = 157;

export function PolarHerbAtlasLogo() {
    const scaledWidth = 1024 * (LOGO_DISPLAY_HEIGHT / SOURCE_HEIGHT);

    return (
        <Link
            href="/"
            className="relative block shrink-0 overflow-hidden"
            style={{ width: LOGO_DISPLAY_WIDTH, height: LOGO_DISPLAY_HEIGHT }}
            aria-label="Polar Herb Atlas home"
        >
            <Image
                src="/brand/header-reference.png"
                alt="Polar Herb Atlas"
                width={1024}
                height={SOURCE_HEIGHT}
                className="absolute left-0 top-1/2 max-w-none -translate-y-1/2 object-left"
                style={{
                    height: LOGO_DISPLAY_HEIGHT,
                    width: scaledWidth,
                }}
                priority
            />
        </Link>
    );
}
