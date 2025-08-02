---
sidebar_position: 5
---

# Final Steps

## Parasitic Extraction

:::warning

OpenLANE **does not** come with a native SPEF (Standard Parasitic Exchange Format) extractor. You must use a **separate external tool** provided in the `work/tools/` directory.

:::

### Steps for SPEF Extraction

1. Navigate to the Extraction Tool Directory:

   ```bash
   cd /home/vsduser/Desktop/work/tools/SPEF_EXTRACTOR
   ```

2. Review Available Files:
   * Inside this directory, you will find:
     * A Python script: `main.py`
     * Required LEF and DEF files

3. **Run the Python Script to Generate SPEF**:

   ```bash
   python3 main.py \
     /home/vsduser/work/tools/openlane_working_dir/openlane/designs/picorv32a/runs/26-03_05-49/tmp/merged.lef \
     /home/vsduser/work/tools/openlane_working_dir/openlane/designs/picorv32a/runs/26-03_05-49/tmp/routing/picorv32a.def
   ```

   **Result**: A `.spef` file is generated and saved in the same directory as the `.def`: `home/vsduser/work/tools/openlane_working_dir/openlane/designs/picorv32a/runs/26-03_05-49/tmp/routing/`

## Final Stage: GDSII Generation for Fabrication

After parasitic extraction, the final fabrication-ready file is the GDSII.

### Export GDSII using Magic

1. Use `run_magic` to stream the GDSII
2. Generated GDSII File Location: `runs/26-03_05-49/results/magic/picorv32a.gds`
3. Read the GDSII in Magic:
   1. You can view and verify the layout by opening the `.gds` file in the Magic GUI.

## Done!

