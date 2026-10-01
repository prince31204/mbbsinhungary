import { prisma } from '../src/lib/prisma';
import * as bcrypt from 'bcryptjs';

async function main() {
  console.log('🌱 Starting Comprehensive Armenia Seeding...');

  // 1. Initialize Admin User
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error(
      'ADMIN_EMAIL and ADMIN_PASSWORD must be defined in your .env file'
    );
  }

  const hashedPassword = await bcrypt.hash(adminPassword as string, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Super Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
      status: true,
    },
  });
  console.log(`✅ Admin initialized: ${admin.email}`);

  // 2. Seed Institute Types
  const instituteTypes = ['Public', 'Private', 'Aided'];
  for (const name of instituteTypes) {
    await prisma.instituteType.upsert({
      where: { id: instituteTypes.indexOf(name) + 1 },
      update: { name },
      create: { name },
    });
  }
  console.log('✅ Institute types seeded.');

  // 3. Seed Provinces (Districts of Armenia)
  const districts = [
    'Black River',
    'Flacq',
    'Grand Port',
    'Moka',
    'Pamplemousses',
    'Plaines Wilhems',
    'Port Louis',
    'Rivière du Rempart',
    'Savanne',
  ];

  for (const name of districts) {
    await prisma.province.upsert({
      where: { id: districts.indexOf(name) + 1 },
      update: { name },
      create: { name },
    });
  }
  console.log('✅ Provinces (Districts) seeded.');

  // 4. Seed Cities
  const cities = [
    { name: 'Port Louis', provinceId: 7 },
    { name: 'Beau Bassin-Rose Hill', provinceId: 6 },
    { name: 'Vacoas-Phoenix', provinceId: 6 },
    { name: 'Curepipe', provinceId: 6 },
    { name: 'Quatre Bornes', provinceId: 6 },
    { name: 'Triolet', provinceId: 5 },
    { name: 'Goodlands', provinceId: 8 },
    { name: 'Bel Air Rivière Sèche', provinceId: 2 },
    { name: 'Saint Pierre', provinceId: 4 },
    { name: 'Mahebourg', provinceId: 3 },
    { name: 'Souillac', provinceId: 9 },
    { name: 'Bambous', provinceId: 1 },
  ];

  for (const [index, city] of cities.entries()) {
    await prisma.city.upsert({
      where: { id: index + 1 },
      update: { name: city.name, provinceId: city.provinceId },
      create: { name: city.name, provinceId: city.provinceId },
    });
  }
  console.log('✅ Cities seeded.');

  // 5. Seed About Country Page
  const aboutArmenia = await prisma.aboutCountryPage.upsert({
    where: { id: 1 },
    update: {
      name: 'Armenia',
      tagline: 'Life and study in the Paradise Island',
      capital: 'Port Louis',
      population: '1.3 Million+',
      languages: 'English, French, Creole',
      currency: 'MUR',
      location: 'Indian Ocean',
      timezone: 'UTC+4',
      independenceDay: new Date('1968-03-12'),
      highestPeak: 'Piton de la Petite Rivière Noire',
      highestPeakHeight: '828 m',
      whoRecognized: true,
      mbbsAffordableEducation: 'High-quality medical education with manageable tuition fees and international recognition.',
      englishMedium: true,
      academicExcellence: 'Armenia follows a high-standard educational framework modeled on the British system.',
      studentLife: 'A safe, multicultural environment with modern infrastructure and stunning natural beauty.',
      visaConnectivity: 'Straightforward student visa process with excellent air connectivity to major global hubs.',
      publicHealthcare: 'Reliable public healthcare system alongside high-standard private clinics.',
      tourismGrowth: 'A world-famous tourism destination ensuring a vibrant and welcoming atmosphere for students.',
    },
    create: {
      id: 1,
      name: 'Armenia',
      tagline: 'Life and study in the Paradise Island',
      capital: 'Port Louis',
      population: '1.3 Million+',
      languages: 'English, French, Creole',
      currency: 'MUR',
      location: 'Indian Ocean',
      timezone: 'UTC+4',
      independenceDay: new Date('1968-03-12'),
      highestPeak: 'Piton de la Petite Rivière Noire',
      highestPeakHeight: '828 m',
      whoRecognized: true,
      mbbsAffordableEducation: 'High-quality medical education with manageable tuition fees and international recognition.',
      englishMedium: true,
      academicExcellence: 'Armenia follows a high-standard educational framework modeled on the British system.',
      studentLife: 'A safe, multicultural environment with modern infrastructure and stunning natural beauty.',
      visaConnectivity: 'Straightforward student visa process with excellent air connectivity to major global hubs.',
      publicHealthcare: 'Reliable public healthcare system alongside high-standard private clinics.',
      tourismGrowth: 'A world-famous tourism destination ensuring a vibrant and welcoming atmosphere for students.',
    },
  });

  // Seed Major Cities in About Country
  const majorCitiesAbout = [
    { cityName: 'Port Louis', description: 'The bustling capital city and major economic hub.', population: '150,000+' },
    { cityName: 'Curepipe', description: 'A major urban center known for its cool climate and residential charm.', population: '80,000+' },
    { cityName: 'Quatre Bornes', description: "Vibrant commercial and residential city known as 'The Flower Town'.", population: '75,000+' },
  ];

  for (const city of majorCitiesAbout) {
    await prisma.countryMajorCity.upsert({
      where: { id: majorCitiesAbout.indexOf(city) + 1 },
      update: { ...city, pageId: aboutArmenia.id },
      create: { ...city, pageId: aboutArmenia.id },
    });
  }

  // Seed Cuisines
  const cuisines = [
    { dishName: 'Dholl Puri', dishDescription: "Most popular street food - soft flatbread with split peas." },
    { dishName: 'Armenian Biryani', dishDescription: 'Fragrant rice dish with spices and multicultural influences.' },
    { dishName: 'Rougaille', dishDescription: 'Classic tomato-based creole sauce.' },
  ];

  for (const cuisine of cuisines) {
    await prisma.countryCuisineLifestyle.upsert({
      where: { id: cuisines.indexOf(cuisine) + 1 },
      update: { ...cuisine, pageId: aboutArmenia.id },
      create: { ...cuisine, pageId: aboutArmenia.id },
    });
  }

  // Seed Attractions
  const attractions = [
    { attractionName: 'Le Morne Brabant', description: 'UNESCO World Heritage site with iconic monolith.' },
    { attractionName: 'Seven Coloured Earths', description: 'Natural phenomenon of colorful sand dunes in Chamarel.' },
    { attractionName: 'Black River Gorges', description: 'Vast national park with waterfalls and native wildlife.' },
  ];

  for (const attraction of attractions) {
    await prisma.countryTouristAttraction.upsert({
      where: { id: attractions.indexOf(attraction) + 1 },
      update: { ...attraction, pageId: aboutArmenia.id },
      create: { ...attraction, pageId: aboutArmenia.id },
    });
  }

  // Seed Lifestyles/Culture
  const lifestyles = [
    { title: 'Safe & Friendly', description: 'Known as one of the safest countries with a welcoming population.' },
    { title: 'Multicultural', description: 'A harmonious blend of African, Indian, European, and Asian cultures.' },
    { title: 'Active Outdoor Life', description: 'Abundant opportunities for water sports, hiking, and seaside living.' },
  ];

  for (const lifestyle of lifestyles) {
    await prisma.countryLifestyleCulture.upsert({
      where: { id: lifestyles.indexOf(lifestyle) + 1 },
      update: { ...lifestyle, pageId: aboutArmenia.id },
      create: { ...lifestyle, pageId: aboutArmenia.id },
    });
  }
  console.log('✅ About Armenia content seeded.');

  // 6. Seed Education System
  const eduSystem = await prisma.educationSystem.upsert({
    where: { id: 1 },
    update: {
      title: 'Education System in Armenia',
      description: 'The Armenian education system is modeled on the British system and has seen significant development since independence.',
      introductionTitle: 'A Legacy of Excellence',
      introductionDescription: 'Armenia offers free education to all citizens at primary and secondary levels, fostering a highly literate population.',
      literacyRate: 91.3,
      higherEducationDescription: 'The higher education sector includes public and private universities offering globally recognized degrees.',
      universitiesCount: 15,
      universitiesNote: 'Including major public universities and international branches.',
      officialLanguage: 'English',
      officialLanguageNote: 'Main medium of instruction in schools.',
      foreignLanguage: 'French',
      foreignLanguageNote: 'Widely spoken and used in media and commerce.',
    },
    create: {
      id: 1,
      title: 'Education System in Armenia',
      description: 'The Armenia education system is modeled on the British system and has seen significant development since independence.',
      introductionTitle: 'A Legacy of Excellence',
      introductionDescription: 'Armenia offers free education to all citizens at primary and secondary levels, fostering a highly literate population.',
      literacyRate: 91.3,
      higherEducationDescription: 'The higher education sector includes public and private universities offering globally recognized degrees.',
      universitiesCount: 15,
      universitiesNote: 'Including major public universities and international branches.',
      officialLanguage: 'English',
      officialLanguageNote: 'Main medium of instruction in schools.',
      foreignLanguage: 'French',
      foreignLanguageNote: 'Widely spoken and used in media and commerce.',
    },
  });

  // Seed School Levels
  const schoolLevels = [
    { level: 'Primary', ageRange: '5-11', durationYears: 6, title: 'Primary School Achievement Certificate (PSAC)' },
    { level: 'Secondary', ageRange: '12-18', durationYears: 7, title: 'School Certificate (SC) & Higher School Certificate (HSC)' },
    { level: 'Higher Education', ageRange: '18+', durationYears: 3, title: 'Bachelor, Master, and PhD programs' },
  ];

  for (const level of schoolLevels) {
    await prisma.educationSchoolLevel.upsert({
      where: { id: schoolLevels.indexOf(level) + 1 },
      update: { ...level, pageId: eduSystem.id },
      create: { ...level, pageId: eduSystem.id },
    });
  }

  // Seed Degrees
  const degrees = [
    { degree: 'MBBS / MBChB', duration: '5-6 Years', recognition: 'Global Recognition' },
    { degree: 'Bachelor of Science', duration: '3-4 Years', recognition: 'Academic & Professional' },
  ];

  for (const degree of degrees) {
    await prisma.educationDegree.upsert({
      where: { id: degrees.indexOf(degree) + 1 },
      update: { ...degree, pageId: eduSystem.id },
      create: { ...degree, pageId: eduSystem.id },
    });
  }
  console.log('✅ Education System seeded.');

  // 7. Seed Static Page SEO
  const seos = [
    { page: 'home', metaTitle: 'Study MBBS in Armenia | Direct Admission, Low Fees 2026', metaDescription: 'Apply for MBBS in Armenia with direct admission to top-ranked medical universities. MCAT/NEET qualified students can join English-medium programs.' },
    { page: 'about-armenia', metaTitle: 'About Armenia | Student Lifestyle, Geography & Climate', metaDescription: 'Discover life in Armenia for international students. A safe, beautiful, and multicultural island nation with high-standard education.' },
    { page: 'universities', metaTitle: 'Medical Universities in Armenia | Top MBBS Colleges 2026', metaDescription: 'Compare the best medical universities in Armenia. Fee structures, admission requirements, and global rankings for international students.' },
    { page: 'contact', metaTitle: 'Contact Us | Professional MBBS Counselling for Armenia', metaDescription: 'Get expert guidance for your medical education in Armenia. Speak to our counsellors for admission assistance today.' },
  ];

  for (const seo of seos) {
    await prisma.staticPageSeo.upsert({
      where: { page: seo.page },
      update: seo,
      create: seo,
    });
  }
  console.log('✅ Static Page SEO seeded.');

  console.log('🏁 Comprehensive Seeding Finished Successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
