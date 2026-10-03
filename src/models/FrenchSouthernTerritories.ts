import { Country } from "../Country";
import { Continent } from "../types/Continent";

/**
 * French Southern Territories (TF)
 */
export class FrenchSouthernTerritories extends Country {
  /**
   * ISO 3166-1 alpha-2 code
   */
  alpha2 = "TF";

  /**
   * ISO 3166-1 alpha-3 code
   */
  alpha3 = "ATF";

  /**
   * ISO 3166-1 numeric code
   */
  numeric = "260";

  /**
   * FIPS code
   * Federal Information Processing Standard
   */
  fipCode = "FS";

  /**
   * Telephone country code
   */
  callingCode = "262";

  /**
   * @deprecated Will be removed in the next major version. Use callingCode instead.
   */
  dial = "262";

  /**
   * Capital city
   */
  capital = "Port-aux-Francais";

  /**
   * Total area in square kilometers
   */
  area = "7,829.0";

  /**
   * Continent
   *
   * AF: Africa
   * AN: Antarctica
   * AS: Asia
   * EU: Europe
   * NA: North America
   * OC: Oceania
   * SA: South America
   */
  continent = Continent.AN;

  /**
   * English name of the country
   */
  en = "French Southern Territories";

  /**
   * Hungarian name of the country
   */
  hu = "Francia déli területek";

  /**
   * German name of the country
   */
  de = "Südfranzösische Territorien";

  /**
   * Spanish name of the country
   */
  es = "Territorios Franceses del Sur";

  /**
   * Italian name of the country
   */
  it = "Territori della Francia del sud";

  /**
   * French name of the country
   */
  fr = "Territoires du Sud français";

  /**
   * Portuguese name of the country
   */
  pt = "Territórios Franceses do Sul";

  /**
   * Dutch name of the country
   */
  nl = "French Southern Territories";

  /**
   * Danish name of the country
   */
  da = "Franske sydlige territorier";

  /**
   * Swedish name of the country
   */
  sv = "Franska sydterritorierna";

  /**
   * Norwegian name of the country
   */
  no = "Franske sørlige territorier";

  /**
   * Polish name of the country
   */
  pl = "Francuskie Terytoria Południowe";

  /**
   * Czech name of the country
   */
  cs = "Francouzská jižní území";

  /**
   * Slovak name of the country
   */
  sk = "Francúzske južné územia";

  /**
   * Slovenian name of the country
   */
  sl = "Francoska južna ozemlja";

  /**
   * Croatian name of the country
   */
  hr = "Francuski južni teritoriji";
}
