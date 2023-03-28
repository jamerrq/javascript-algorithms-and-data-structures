function convertHTML(str) {
    str = str.replaceAll("&", "&amp;");
    str = str.replaceAll("<", "&lt;");
    str = str.replaceAll(">", "&gt;");
    str = str.replaceAll('"', "&quot;");
    str = str.replaceAll("'", "&apos;");
    return str;
}

convertHTML("Hamburgers < Pizza < Tacos");
