const listRumah = [
    {
      id: 1,
      tidakRawanBanjir: true,
      tidakRawanLongsor: true,
      tidakDiKawasanIndustri: true,
      luasTanah: 900,
      luasBangunan: 450,
      memilikiKolamRenang: true,
      parkirLuas: true,
      memilikiKebunBelakang: true,
    },
    {
      id: 2,
      tidakRawanBanjir: false,
      tidakRawanLongsor: true,
      tidakDiKawasanIndustri: true,
      luasTanah: 1000,
      luasBangunan: 350,
      memilikiKolamRenang: true,
      parkirLuas: false,
      memilikiKebunBelakang: true,
    },
    {
        id: 3,
        tidakRawanBanjir: true,
        tidakRawanLongsor: true,
        tidakDiKawasanIndustri: true,
        luasTanah: 1200,
        luasBangunan: 450,
        memilikiKolamRenang: true,
        parkirLuas: true,
        memilikiKebunBelakang: true,
      },
  ];

  function sortirRumah(rumah) {
    if (
      rumah.tidakRawanBanjir &&
      rumah.tidakRawanLongsor &&
      rumah.tidakDiKawasanIndustri &&
      rumah.luasTanah >= 800 &&
      rumah.luasBangunan >= 400 &&
      rumah.memilikiKolamRenang &&
      rumah.parkirLuas &&
      rumah.memilikiKebunBelakang
    ) {
      console.log(`Rumah ke-${rumah.id} telah memenuhi syarat yang diberikan Bapak Andi.`);
    } else {
      console.log(`Rumah ke-${rumah.id} belum memenuhi syarat yang diberikan Bapak Andi.`);
    }
  }

  for (const rumah of listRumah) {
    sortirRumah(rumah);
  }