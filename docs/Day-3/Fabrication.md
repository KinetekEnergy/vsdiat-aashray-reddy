---
sidebar_position: 4
---

# Fabrication of a CMOS

The fabrication process is 16 steps long:

## Creating Active Regions

1. Select the substrate. A P-type substrate is commonly used.
2. Create active regions.
   1. Grow 40nm of silicon dioxide.
   2. Deposit 80nm of silicon nitride.
   3. Deposit a layer of photoresist.
   4. Place mask-1.
   5. Apply UV light to remove layers on unmasked areas.
   6. Remove mask-1.
   7. Remove photoresist.
   8. Place the chip in a furnace to grow more oxide.
   9. Use hot phosporic acid to remove Si3N4. This leaves only the substrate and SiO2.

## Form N-Well and P-Well

3. Form the wells.
   1. Deposit a layer of photoresist
   2. Place mask-2 and mask-3. Mask-2 protects N-Well during P-Well fabrication and Mask-3 protects P-Well during N-Well fabrication
   3. Apply UV light to remove photoresist
   4. Place the chip in a furnace to add boron and phorphorus to form the wells.

## Gate Terminal

4. Make the gate.
   1. Add photoresist layer.
   2. Add mask-4.
   3. Apply UV light to remove unmasked photoresist.
   4. Use a low energy beam of boron on the P-Well surface.
   5. Apply mask-5.
   6. Add phorphoros/arsenic to N-Well.
   7. Use hydroflouric acid to remove SiO2.
   8. Regrow higher quality SiO2 on substrate.
   9. Add polysilicon film.
   10. Add mask-6.
   11. Etch using photolithography.
   12. Remove mask-6. Gate terminal is formed.

## Lightly Doped Drain (LDD)

5. Make the LDD.
   1. Add mask-7 and mask-8 for the NMOS and PMOS.
   2. Add doped impurity (NMOS = N+ and PMOS = P+).
   3. Add SiO2 as spacers.

## Source and Drain

6. Make the source and drain.
   1. Add screen oxide.
   2. Add mask-9 for N+ and mask-10 for P+.
   3. Perform high-temp annealing.

## Interconnects

7. Make the interconnects. This is what the user interfaces with.
   1. Remove screen oxide.
   2. Add Titanium disilicide (TiSi2) for interconnects.
   3. Add mask-11.
   4. Etch off titanium nitride (TiN) via RCA cleaning.

## High Level Metal

8. Make high-level metal
   1. Add a doped layer of SiO2 (doped w/ phorphorus or boron) on wafer surface
   2. Polish surface with Chemical Mechanical Polishing (CMP) to make surface flat
   3. Add contact holes via photolithography
   4. Add mask-12 for first contacts
   5. Add mask-13 for aluminum contact
   6. Add mask-14 for second contacs
   7. Add mask-15 for second aluminum contacts
   8. Add mask-16 for making contact to uppermost layer
