import { Country } from './../../country/entities/country.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class CountrySeed implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const countryRepository = dataSource.getRepository(Country);
    
    const count = await countryRepository.count();
    
    if (count > 0) {
      console.log('Countries table already has data, skipping seed');
      return;
    }
    
    const countries = [
      { CountryCode: 'AF', CountryName: 'Afghanistan' },
      { CountryCode: 'AX', CountryName: 'Åland Islands' },
      { CountryCode: 'AL', CountryName: 'Albania' },
      { CountryCode: 'DZ', CountryName: 'Algeria' },
      { CountryCode: 'AS', CountryName: 'American Samoa' },
      { CountryCode: 'AD', CountryName: 'Andorra' },
      { CountryCode: 'AO', CountryName: 'Angola' },
      { CountryCode: 'AI', CountryName: 'Anguilla' },
      { CountryCode: 'AQ', CountryName: 'Antarctica' },
      { CountryCode: 'AG', CountryName: 'Antigua and Barbuda' },
      { CountryCode: 'AR', CountryName: 'Argentina' },
      { CountryCode: 'AM', CountryName: 'Armenia' },
      { CountryCode: 'AW', CountryName: 'Aruba' },
      { CountryCode: 'AU', CountryName: 'Australia' },
      { CountryCode: 'AT', CountryName: 'Austria' },
      { CountryCode: 'AZ', CountryName: 'Azerbaijan' },
      { CountryCode: 'BS', CountryName: 'Bahamas' },
      { CountryCode: 'BH', CountryName: 'Bahrain' },
      { CountryCode: 'BD', CountryName: 'Bangladesh' },
      { CountryCode: 'BB', CountryName: 'Barbados' },
      { CountryCode: 'BY', CountryName: 'Belarus' },
      { CountryCode: 'BE', CountryName: 'Belgium' },
      { CountryCode: 'BZ', CountryName: 'Belize' },
      { CountryCode: 'BJ', CountryName: 'Benin' },
      { CountryCode: 'BM', CountryName: 'Bermuda' },
      { CountryCode: 'BT', CountryName: 'Bhutan' },
      { CountryCode: 'BO', CountryName: 'Bolivia' },
      { CountryCode: 'BQ', CountryName: 'Bonaire, Sint Eustatius and Saba' },
      { CountryCode: 'BA', CountryName: 'Bosnia and Herzegovina' },
      { CountryCode: 'BW', CountryName: 'Botswana' },
      { CountryCode: 'BV', CountryName: 'Bouvet Island' },
      { CountryCode: 'BR', CountryName: 'Brazil' },
      { CountryCode: 'IO', CountryName: 'British Indian Ocean Territory' },
      { CountryCode: 'BN', CountryName: 'Brunei Darussalam' },
      { CountryCode: 'BG', CountryName: 'Bulgaria' },
      { CountryCode: 'BF', CountryName: 'Burkina Faso' },
      { CountryCode: 'BI', CountryName: 'Burundi' },
      { CountryCode: 'KH', CountryName: 'Cambodia' },
      { CountryCode: 'CM', CountryName: 'Cameroon' },
      { CountryCode: 'CA', CountryName: 'Canada' },
      { CountryCode: 'CV', CountryName: 'Cape Verde' },
      { CountryCode: 'KY', CountryName: 'Cayman Islands' },
      { CountryCode: 'CF', CountryName: 'Central African Republic' },
      { CountryCode: 'TD', CountryName: 'Chad' },
      { CountryCode: 'CL', CountryName: 'Chile' },
      { CountryCode: 'CN', CountryName: 'China' },
      { CountryCode: 'CX', CountryName: 'Christmas Island' },
      { CountryCode: 'CC', CountryName: 'Cocos (Keeling) Islands' },
      { CountryCode: 'CO', CountryName: 'Colombia' },
      { CountryCode: 'KM', CountryName: 'Comoros' },
      { CountryCode: 'CG', CountryName: 'Congo' },
      { CountryCode: 'CD', CountryName: 'Congo, the Democratic Republic of the' },
      { CountryCode: 'CK', CountryName: 'Cook Islands' },
      { CountryCode: 'CR', CountryName: 'Costa Rica' },
      { CountryCode: 'CI', CountryName: 'Côte d\'Ivoire' },
      { CountryCode: 'HR', CountryName: 'Croatia' },
      { CountryCode: 'CU', CountryName: 'Cuba' },
      { CountryCode: 'CW', CountryName: 'Curaçao' },
      { CountryCode: 'CY', CountryName: 'Cyprus' },
      { CountryCode: 'CZ', CountryName: 'Czech Republic' },
      { CountryCode: 'DK', CountryName: 'Denmark' },
      { CountryCode: 'DJ', CountryName: 'Djibouti' },
      { CountryCode: 'DM', CountryName: 'Dominica' },
      { CountryCode: 'DO', CountryName: 'Dominican Republic' },
      { CountryCode: 'EC', CountryName: 'Ecuador' },
      { CountryCode: 'EG', CountryName: 'Egypt' },
      { CountryCode: 'SV', CountryName: 'El Salvador' },
      { CountryCode: 'GQ', CountryName: 'Equatorial Guinea' },
      { CountryCode: 'ER', CountryName: 'Eritrea' },
      { CountryCode: 'EE', CountryName: 'Estonia' },
      { CountryCode: 'ET', CountryName: 'Ethiopia' },
      { CountryCode: 'FK', CountryName: 'Falkland Islands (Malvinas)' },
      { CountryCode: 'FO', CountryName: 'Faroe Islands' },
      { CountryCode: 'FJ', CountryName: 'Fiji' },
      { CountryCode: 'FI', CountryName: 'Finland' },
      { CountryCode: 'FR', CountryName: 'France' },
      { CountryCode: 'GF', CountryName: 'French Guiana' },
      { CountryCode: 'PF', CountryName: 'French Polynesia' },
      { CountryCode: 'TF', CountryName: 'French Southern Territories' },
      { CountryCode: 'GA', CountryName: 'Gabon' },
      { CountryCode: 'GM', CountryName: 'Gambia' },
      { CountryCode: 'GE', CountryName: 'Georgia' },
      { CountryCode: 'DE', CountryName: 'Germany' },
      { CountryCode: 'GH', CountryName: 'Ghana' },
      { CountryCode: 'GI', CountryName: 'Gibraltar' },
      { CountryCode: 'GR', CountryName: 'Greece' },
      { CountryCode: 'GL', CountryName: 'Greenland' },
      { CountryCode: 'GD', CountryName: 'Grenada' },
      { CountryCode: 'GP', CountryName: 'Guadeloupe' },
      { CountryCode: 'GU', CountryName: 'Guam' },
      { CountryCode: 'GT', CountryName: 'Guatemala' },
      { CountryCode: 'GG', CountryName: 'Guernsey' },
      { CountryCode: 'GN', CountryName: 'Guinea' },
      { CountryCode: 'GW', CountryName: 'Guinea-Bissau' },
      { CountryCode: 'GY', CountryName: 'Guyana' },
      { CountryCode: 'HT', CountryName: 'Haiti' },
      { CountryCode: 'HM', CountryName: 'Heard Island and McDonald Islands' },
      { CountryCode: 'VA', CountryName: 'Holy See (Vatican City State)' },
      { CountryCode: 'HN', CountryName: 'Honduras' },
      { CountryCode: 'HK', CountryName: 'Hong Kong' },
      { CountryCode: 'HU', CountryName: 'Hungary' },
      { CountryCode: 'IS', CountryName: 'Iceland' },
      { CountryCode: 'IN', CountryName: 'India' },
      { CountryCode: 'ID', CountryName: 'Indonesia' },
      { CountryCode: 'IR', CountryName: 'Iran, Islamic Republic of' },
      { CountryCode: 'IQ', CountryName: 'Iraq' },
      { CountryCode: 'IE', CountryName: 'Ireland' },
      { CountryCode: 'IM', CountryName: 'Isle of Man' },
      { CountryCode: 'IL', CountryName: 'Israel' },
      { CountryCode: 'IT', CountryName: 'Italy' },
      { CountryCode: 'JM', CountryName: 'Jamaica' },
      { CountryCode: 'JP', CountryName: 'Japan' },
      { CountryCode: 'JE', CountryName: 'Jersey' },
      { CountryCode: 'JO', CountryName: 'Jordan' },
      { CountryCode: 'KZ', CountryName: 'Kazakhstan' },
      { CountryCode: 'KE', CountryName: 'Kenya' },
      { CountryCode: 'KI', CountryName: 'Kiribati' },
      { CountryCode: 'KP', CountryName: 'Korea, Democratic People\'s Republic of' },
      { CountryCode: 'KR', CountryName: 'Korea, Republic of' },
      { CountryCode: 'KW', CountryName: 'Kuwait' },
      { CountryCode: 'KG', CountryName: 'Kyrgyzstan' },
      { CountryCode: 'LA', CountryName: 'Lao People\'s Democratic Republic' },
      { CountryCode: 'LV', CountryName: 'Latvia' },
      { CountryCode: 'LB', CountryName: 'Lebanon' },
      { CountryCode: 'LS', CountryName: 'Lesotho' },
      { CountryCode: 'LR', CountryName: 'Liberia' },
      { CountryCode: 'LY', CountryName: 'Libya' },
      { CountryCode: 'LI', CountryName: 'Liechtenstein' },
      { CountryCode: 'LT', CountryName: 'Lithuania' },
      { CountryCode: 'LU', CountryName: 'Luxembourg' },
      { CountryCode: 'MO', CountryName: 'Macao' },
      { CountryCode: 'MK', CountryName: 'Macedonia, the Former Yugoslav Republic of' },
      { CountryCode: 'MG', CountryName: 'Madagascar' },
      { CountryCode: 'MW', CountryName: 'Malawi' },
      { CountryCode: 'MY', CountryName: 'Malaysia' },
      { CountryCode: 'MV', CountryName: 'Maldives' },
      { CountryCode: 'ML', CountryName: 'Mali' },
      { CountryCode: 'MT', CountryName: 'Malta' },
      { CountryCode: 'MH', CountryName: 'Marshall Islands' },
      { CountryCode: 'MQ', CountryName: 'Martinique' },
      { CountryCode: 'MR', CountryName: 'Mauritania' },
      { CountryCode: 'MU', CountryName: 'Mauritius' },
      { CountryCode: 'YT', CountryName: 'Mayotte' },
      { CountryCode: 'MX', CountryName: 'Mexico' },
      { CountryCode: 'FM', CountryName: 'Micronesia, Federated States of' },
      { CountryCode: 'MD', CountryName: 'Moldova, Republic of' },
      { CountryCode: 'MC', CountryName: 'Monaco' },
      { CountryCode: 'MN', CountryName: 'Mongolia' },
      { CountryCode: 'ME', CountryName: 'Montenegro' },
      { CountryCode: 'MS', CountryName: 'Montserrat' },
      { CountryCode: 'MA', CountryName: 'Morocco' },
      { CountryCode: 'MZ', CountryName: 'Mozambique' },
      { CountryCode: 'MM', CountryName: 'Myanmar' },
      { CountryCode: 'NA', CountryName: 'Namibia' },
      { CountryCode: 'NR', CountryName: 'Nauru' },
      { CountryCode: 'NP', CountryName: 'Nepal' },
      { CountryCode: 'NL', CountryName: 'Netherlands' },
      { CountryCode: 'NC', CountryName: 'New Caledonia' },
      { CountryCode: 'NZ', CountryName: 'New Zealand' },
      { CountryCode: 'NI', CountryName: 'Nicaragua' },
      { CountryCode: 'NE', CountryName: 'Niger' },
      { CountryCode: 'NG', CountryName: 'Nigeria' },
      { CountryCode: 'NU', CountryName: 'Niue' },
      { CountryCode: 'NF', CountryName: 'Norfolk Island' },
      { CountryCode: 'MP', CountryName: 'Northern Mariana Islands' },
      { CountryCode: 'NO', CountryName: 'Norway' },
      { CountryCode: 'OM', CountryName: 'Oman' },
      { CountryCode: 'PK', CountryName: 'Pakistan' },
      { CountryCode: 'PW', CountryName: 'Palau' },
      { CountryCode: 'PS', CountryName: 'Palestine, State of' },
      { CountryCode: 'PA', CountryName: 'Panama' },
      { CountryCode: 'PG', CountryName: 'Papua New Guinea' },
      { CountryCode: 'PY', CountryName: 'Paraguay' },
      { CountryCode: 'PE', CountryName: 'Peru' },
      { CountryCode: 'PH', CountryName: 'Philippines' },
      { CountryCode: 'PN', CountryName: 'Pitcairn' },
      { CountryCode: 'PL', CountryName: 'Poland' },
      { CountryCode: 'PT', CountryName: 'Portugal' },
      { CountryCode: 'PR', CountryName: 'Puerto Rico' },
      { CountryCode: 'QA', CountryName: 'Qatar' },
      { CountryCode: 'RE', CountryName: 'Réunion' },
      { CountryCode: 'RO', CountryName: 'Romania' },
      { CountryCode: 'RU', CountryName: 'Russian Federation' },
      { CountryCode: 'RW', CountryName: 'Rwanda' },
      { CountryCode: 'BL', CountryName: 'Saint Barthélemy' },
      { CountryCode: 'SH', CountryName: 'Saint Helena, Ascension and Tristan da Cunha' },
      { CountryCode: 'KN', CountryName: 'Saint Kitts and Nevis' },
      { CountryCode: 'LC', CountryName: 'Saint Lucia' },
      { CountryCode: 'MF', CountryName: 'Saint Martin (French part)' },
      { CountryCode: 'PM', CountryName: 'Saint Pierre and Miquelon' },
      { CountryCode: 'VC', CountryName: 'Saint Vincent and the Grenadines' },
      { CountryCode: 'WS', CountryName: 'Samoa' },
      { CountryCode: 'SM', CountryName: 'San Marino' },
      { CountryCode: 'ST', CountryName: 'Sao Tome and Principe' },
      { CountryCode: 'SA', CountryName: 'Saudi Arabia' },
      { CountryCode: 'SN', CountryName: 'Senegal' },
      { CountryCode: 'RS', CountryName: 'Serbia' },
      { CountryCode: 'SC', CountryName: 'Seychelles' },
      { CountryCode: 'SL', CountryName: 'Sierra Leone' },
      { CountryCode: 'SG', CountryName: 'Singapore' },
      { CountryCode: 'SX', CountryName: 'Sint Maarten (Dutch part)' },
      { CountryCode: 'SK', CountryName: 'Slovakia' },
      { CountryCode: 'SI', CountryName: 'Slovenia' },
      { CountryCode: 'SB', CountryName: 'Solomon Islands' },
      { CountryCode: 'SO', CountryName: 'Somalia' },
      { CountryCode: 'ZA', CountryName: 'South Africa' },
      { CountryCode: 'GS', CountryName: 'South Georgia and the South Sandwich Islands' },
      { CountryCode: 'SS', CountryName: 'South Sudan' },
      { CountryCode: 'ES', CountryName: 'Spain' },
      { CountryCode: 'LK', CountryName: 'Sri Lanka' },
      { CountryCode: 'SD', CountryName: 'Sudan' },
      { CountryCode: 'SR', CountryName: 'Suriname' },
      { CountryCode: 'SJ', CountryName: 'Svalbard and Jan Mayen' },
      { CountryCode: 'SZ', CountryName: 'Swaziland' },
      { CountryCode: 'SE', CountryName: 'Sweden' },
      { CountryCode: 'CH', CountryName: 'Switzerland' },
      { CountryCode: 'SY', CountryName: 'Syrian Arab Republic' },
      { CountryCode: 'TW', CountryName: 'Taiwan, Province of China' },
      { CountryCode: 'TJ', CountryName: 'Tajikistan' },
      { CountryCode: 'TZ', CountryName: 'Tanzania, United Republic of' },
      { CountryCode: 'TH', CountryName: 'Thailand' },
      { CountryCode: 'TL', CountryName: 'Timor-Leste' },
      { CountryCode: 'TG', CountryName: 'Togo' },
      { CountryCode: 'TK', CountryName: 'Tokelau' },
      { CountryCode: 'TO', CountryName: 'Tonga' },
      { CountryCode: 'TT', CountryName: 'Trinidad and Tobago' },
      { CountryCode: 'TN', CountryName: 'Tunisia' },
      { CountryCode: 'TR', CountryName: 'Turkey' },
      { CountryCode: 'TM', CountryName: 'Turkmenistan' },
      { CountryCode: 'TC', CountryName: 'Turks and Caicos Islands' },
      { CountryCode: 'TV', CountryName: 'Tuvalu' },
      { CountryCode: 'UG', CountryName: 'Uganda' },
      { CountryCode: 'UA', CountryName: 'Ukraine' },
      { CountryCode: 'AE', CountryName: 'United Arab Emirates' },
      { CountryCode: 'GB', CountryName: 'United Kingdom' },
      { CountryCode: 'US', CountryName: 'United States' },
      { CountryCode: 'UM', CountryName: 'United States Minor Outlying Islands' },
      { CountryCode: 'UY', CountryName: 'Uruguay' },
      { CountryCode: 'UZ', CountryName: 'Uzbekistan' },
      { CountryCode: 'VU', CountryName: 'Vanuatu' },
      { CountryCode: 'VE', CountryName: 'Venezuela, Bolivarian Republic of' },
      { CountryCode: 'VN', CountryName: 'Viet Nam' },
      { CountryCode: 'VG', CountryName: 'Virgin Islands, British' },
      { CountryCode: 'VI', CountryName: 'Virgin Islands, U.S.' },
      { CountryCode: 'WF', CountryName: 'Wallis and Futuna' },
      { CountryCode: 'EH', CountryName: 'Western Sahara' },
      { CountryCode: 'YE', CountryName: 'Yemen' },
      { CountryCode: 'ZM', CountryName: 'Zambia' },
      { CountryCode: 'ZW', CountryName: 'Zimbabwe' },
    ];
    
    await countryRepository.insert(countries);
    
    console.log(`Seeded ${countries.length} countries`);
  }
}