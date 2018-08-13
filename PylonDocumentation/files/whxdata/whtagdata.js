﻿(function() {
var tagCombinations =  [["$"],["_ace_gige","_ace_usb"],["aca1280_60gc","aca1280_60gm","aca1300_60gc","aca1300_60gm","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1600_60gc","aca1600_60gm","aca1920_40gc","aca1920_40gm","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_35gc","aca2040_35gm","aca2440_20gc","aca2440_20gm","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca3088_16gc","aca3088_16gm","aca3800_10gc","aca3800_10gm","aca4024_8gc","aca4024_8gm","aca4096_11gc","aca4096_11gm","aca4112_8gc","aca4112_8gm","aca4600_7gc","aca640_300gc","aca640_300gm","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm"],["_dart_lvds","_dart_usb","_pulse_usb"],["_color"],["_ace_gige","_color"],["aca1280_60gm","aca1300_200um","aca1300_22gm","aca1300_30gm","aca1300_30um","aca1300_60gm","aca1300_60gmnir","aca1300_75gm","aca1440_73gm_p","aca1600_20gm","aca1600_20um","aca1600_60gm","aca1920_150um","aca1920_155um","aca1920_155ummed","aca1920_25gc","aca1920_25gm","aca1920_25uc","aca1920_25um","aca1920_40gm","aca1920_40um","aca1920_40ummed","aca1920_48gm","aca1920_50gm","aca2000_165um","aca2000_165umnir","aca2000_50gm","aca2000_50gmnir","aca2040_120um","aca2040_25gm","aca2040_25gmnir","aca2040_35gm","aca2040_55um","aca2040_90um","aca2040_90umnir","aca2440_20gm","aca2440_35um","aca2440_35ummed","aca2440_75um","aca2440_75ummed","aca2500_14gc","aca2500_14gm","aca2500_14uc","aca2500_14um","aca2500_20gm","aca2500_20gmmed","aca2500_60um","aca3088_16gm","aca3088_57um","aca3800_10gm","aca3800_14um","aca4024_29um","aca4024_8gm","aca4096_11gm","aca4096_30um","aca4096_40um","aca4112_20um","aca4112_30um","aca4112_8gm","aca4600_7gc","aca640_120gm","aca640_120um","aca640_300gm","aca640_750um","aca640_90gm","aca640_90um","aca645_100gm","aca720_290gm_p","aca750_30gm","aca780_75gm","aca800_200gm","aca800_510um","daa1280_54lc","daa1280_54lm","daa1280_54uc","daa1280_54um","daa1600_60lc","daa1600_60lm","daa1600_60uc","daa1600_60um","daa1920_15um","daa1920_30uc","daa1920_30um","daa2500_14lc","daa2500_14lm","daa2500_14uc","daa2500_14um","pua1280_54uc","pua1280_54um","pua1600_60uc","pua1600_60um","pua1920_30uc","pua1920_30um","pua2500_14uc","pua2500_14um"],["_dart_usb","_pulse_usb"],["aca1920_155ucmed","aca1920_155ummed","aca1920_40ucmed","aca1920_40ummed","aca2440_35ucmed","aca2440_35ummed","aca2440_75ucmed","aca2440_75ummed","aca2500_20gcmed","aca2500_20gmmed","daa1280_54lc","daa1280_54lm","daa1280_54uc","daa1280_54um","daa1600_60lc","daa1600_60lm","daa1600_60uc","daa1600_60um","daa1920_15um","daa1920_30uc","daa1920_30um","daa2500_14lc","daa2500_14lm","daa2500_14uc","daa2500_14um","pua1280_54uc","pua1280_54um","pua1600_60uc","pua1600_60um","pua1920_30uc","pua1920_30um","pua2500_14uc","pua2500_14um"],["aca1280_60gc","aca1300_200uc","aca1300_22gc","aca1300_30gc","aca1300_30uc","aca1300_60gc","aca1300_75gc","aca1440_73gc_p","aca1600_20gc","aca1600_20uc","aca1600_60gc","aca1920_150uc","aca1920_155uc","aca1920_155ucmed","aca1920_25gc","aca1920_25uc","aca1920_40gc","aca1920_40uc","aca1920_40ucmed","aca1920_48gc","aca1920_50gc","aca2000_50gc","aca2040_25gc","aca2040_35gc","aca2440_20gc","aca2440_75uc","aca2440_75ucmed","aca2500_14gc","aca2500_14uc","aca2500_20gc","aca2500_20gcmed","aca2500_60uc","aca3088_16gc","aca3088_57uc","aca3800_10gc","aca3800_14uc","aca4024_29uc","aca4024_8gc","aca4096_11gc","aca4096_30uc","aca4096_40uc","aca4112_20uc","aca4112_30uc","aca4112_8gc","aca4600_10uc","aca4600_7gc","aca640_120gc","aca640_120uc","aca640_300gc","aca640_750uc","aca640_90gc","aca640_90uc","aca645_100gc","aca720_290gc_p","aca750_30gc","aca780_75gc","aca800_200gc","aca800_510uc"],["aca1280_60gc","aca1300_200uc","aca1300_22gc","aca1300_30gc","aca1300_30uc","aca1300_60gc","aca1300_75gc","aca1440_73gc_p","aca1600_20gc","aca1600_20uc","aca1600_60gc","aca1920_150uc","aca1920_155uc","aca1920_155ucmed","aca1920_25gc","aca1920_25uc","aca1920_40gc","aca1920_40uc","aca1920_40ucmed","aca1920_48gc","aca1920_50gc","aca2000_50gc","aca2040_25gc","aca2040_35gc","aca2040_55uc","aca2040_90uc","aca2440_20gc","aca2440_35uc","aca2440_35ucmed","aca2440_75uc","aca2440_75ucmed","aca2500_14gc","aca2500_14uc","aca2500_20gc","aca2500_20gcmed","aca2500_60uc","aca3088_16gc","aca3088_57uc","aca3800_10gc","aca3800_14uc","aca4024_29uc","aca4024_8gc","aca4096_11gc","aca4096_30uc","aca4096_40uc","aca4112_20uc","aca4112_30uc","aca4112_8gc","aca4600_10uc","aca4600_7gc","aca640_120gc","aca640_120uc","aca640_300gc","aca640_750uc","aca640_90gc","aca640_90uc","aca645_100gc","aca720_290gc_p","aca750_30gc","aca780_75gc","aca800_200gc","aca800_510uc"],["aca1280_60gc","aca1280_60gm","aca1300_200uc","aca1300_200um","aca1300_22gc","aca1300_22gm","aca1300_30gc","aca1300_30gm","aca1300_30uc","aca1300_30um","aca1300_60gc","aca1300_60gm","aca1300_60gmnir","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1600_20gc","aca1600_20gm","aca1600_20uc","aca1600_20um","aca1600_60gc","aca1600_60gm","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_25gc","aca1920_25gm","aca1920_25uc","aca1920_25um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2000_165uc","aca2000_165um","aca2000_165umnir","aca2000_50gc","aca2000_50gm","aca2000_50gmnir","aca2040_120uc","aca2040_120um","aca2040_25gc","aca2040_25gm","aca2040_25gmnir","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2040_90uc","aca2040_90um","aca2040_90umnir","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_14gc","aca2500_14gm","aca2500_14uc","aca2500_14um","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca3800_10gc","aca3800_10gm","aca3800_14uc","aca3800_14um","aca4096_11gc","aca4096_11gm","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca4112_8gc","aca4112_8gm","aca4600_10uc","aca4600_7gc","aca640_120gc","aca640_120gm","aca640_120uc","aca640_120um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca640_90gc","aca640_90gm","aca640_90uc","aca640_90um","aca645_100gc","aca645_100gm","aca720_290gc_p","aca720_290gm_p","aca750_30gc","aca750_30gm","aca780_75gc","aca780_75gm","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["aca1280_60gc","aca1280_60gm","aca1300_60gc","aca1300_60gm","aca1300_60gmnir","aca1600_60gc","aca1600_60gm","aca2000_50gc","aca2000_50gm","aca2000_50gmnir","aca2040_25gc","aca2040_25gm","aca2040_25gmnir","aca3800_10gc","aca3800_10gm","aca3800_14uc","aca3800_14um","aca4600_10uc","aca4600_7gc"],["aca1280_60gc","aca1280_60gm","aca1300_22gc","aca1300_22gm","aca1300_30gc","aca1300_30gm","aca1300_30uc","aca1300_30um","aca1300_60gc","aca1300_60gm","aca1300_60gmnir","aca1440_73gc_p","aca1440_73gm_p","aca1600_20gc","aca1600_20gm","aca1600_20uc","aca1600_20um","aca1600_60gc","aca1600_60gm","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_25gc","aca1920_25gm","aca1920_25uc","aca1920_25um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_50gc","aca1920_50gm","aca2000_165uc","aca2000_165um","aca2000_165umnir","aca2000_50gc","aca2000_50gm","aca2000_50gmnir","aca2040_120uc","aca2040_120um","aca2040_25gc","aca2040_25gm","aca2040_25gmnir","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2040_90uc","aca2040_90um","aca2040_90umnir","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_14gc","aca2500_14gm","aca2500_14uc","aca2500_14um","aca3088_16gc","aca3088_16gm","aca3088_57uc","aca3088_57um","aca3800_10gc","aca3800_10gm","aca3800_14uc","aca3800_14um","aca4024_29uc","aca4024_29um","aca4024_8gc","aca4024_8gm","aca4096_11gc","aca4096_11gm","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca4112_8gc","aca4112_8gm","aca4600_10uc","aca4600_7gc","aca640_120gc","aca640_120gm","aca640_120uc","aca640_120um","aca640_90gc","aca640_90gm","aca640_90uc","aca640_90um","aca645_100gc","aca645_100gm","aca720_290gc_p","aca720_290gm_p","aca750_30gc","aca750_30gm","aca780_75gc","aca780_75gm"],["_ace_gige"],["aca1300_200uc","aca1300_200um","aca1300_22gc","aca1300_22gm","aca1300_30gc","aca1300_30gm","aca1300_30uc","aca1300_30um","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1600_20gc","aca1600_20gm","aca1600_20uc","aca1600_20um","aca1920_150uc","aca1920_150um","aca1920_25uc","aca1920_25um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2000_165uc","aca2000_165um","aca2000_165umnir","aca2000_50gc","aca2000_50gm","aca2000_50gmnir","aca2040_120uc","aca2040_120um","aca2040_25gc","aca2040_25gm","aca2040_25gmnir","aca2040_55uc","aca2040_55um","aca2040_90uc","aca2040_90um","aca2040_90umnir","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca4096_11gc","aca4096_11gm","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca4112_8gc","aca4112_8gm","aca640_120gc","aca640_120gm","aca640_120uc","aca640_120um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca640_90gc","aca640_90gm","aca640_90uc","aca640_90um","aca645_100gc","aca645_100gm","aca720_290gc_p","aca720_290gm_p","aca750_30gc","aca750_30gm","aca780_75gc","aca780_75gm","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["aca750_30gc","aca750_30gm"],["aca1920_155ucmed","aca1920_40ucmed","aca2440_35ucmed","aca2440_75ucmed","aca2500_20gcmed","daa1280_54lc","daa1280_54uc","daa1600_60lc","daa1600_60uc","daa1920_30uc","daa2500_14lc","daa2500_14uc","pua1280_54uc","pua1600_60uc","pua1920_30uc","pua2500_14uc"],["_ace_gige","_ace_usb","_dart_lvds","_dart_usb"],["aca1280_60gc","aca1280_60gm","aca1300_200uc","aca1300_200um","aca1300_22gc","aca1300_22gm","aca1300_30uc","aca1300_30um","aca1300_60gc","aca1300_60gm","aca1300_60gmnir","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1600_20uc","aca1600_20um","aca1600_60gc","aca1600_60gm","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_25gc","aca1920_25gm","aca1920_25uc","aca1920_25um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2000_165uc","aca2000_165um","aca2000_165umnir","aca2000_50gc","aca2000_50gm","aca2000_50gmnir","aca2040_120uc","aca2040_120um","aca2040_25gc","aca2040_25gm","aca2040_25gmnir","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2040_90uc","aca2040_90um","aca2040_90umnir","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_14uc","aca2500_14um","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca3800_10gc","aca3800_10gm","aca3800_14uc","aca3800_14um","aca4096_11gc","aca4096_11gm","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca4112_8gc","aca4112_8gm","aca4600_10uc","aca4600_7gc","aca640_120uc","aca640_120um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca640_90uc","aca640_90um","aca645_100gc","aca645_100gm","aca720_290gc_p","aca720_290gm_p","aca780_75gc","aca780_75gm","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["aca3800_14uc","aca3800_14um","aca4600_10uc"],["aca1280_60gc","aca1280_60gm","aca1300_60gc","aca1300_60gm","aca1600_60gc","aca1600_60gm"],["aca3800_10gm","aca3800_14um"],["aca1300_200uc","aca1300_200um","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_120uc","aca2040_120um","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca4096_11gc","aca4096_11gm","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca4112_8gc","aca4112_8gm","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um","daa1280_54lc","daa1280_54uc","daa1600_60lc","daa1600_60uc","daa1920_30uc","daa2500_14lc","daa2500_14uc","pua1280_54uc","pua1600_60uc","pua1920_30uc","pua2500_14uc"],["aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1920_40gc","aca1920_40gm","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_35gc","aca2040_35gm","aca2440_20gc","aca2440_20gm","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca3088_16gc","aca3088_16gm","aca4024_8gc","aca4024_8gm","aca4096_11gc","aca4096_11gm","aca4112_8gc","aca4112_8gm","aca640_300gc","aca640_300gm","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm"],["aca1280_60gc","aca1300_22gc","aca1300_30gc","aca1300_60gc","aca1600_20gc","aca1600_60gc","aca1920_25gc","aca2000_50gc","aca2040_25gc","aca2500_14gc","aca3800_10gc","aca4600_7gc","aca640_120gc","aca640_90gc","aca645_100gc","aca750_30gc","aca780_75gc"],["aca1280_60gc","aca1280_60gm","aca1300_200uc","aca1300_200um","aca1300_22gc","aca1300_22gm","aca1300_30gc","aca1300_30gm","aca1300_30uc","aca1300_30um","aca1300_60gc","aca1300_60gm","aca1300_60gmnir","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1600_20uc","aca1600_20um","aca1600_60gc","aca1600_60gm","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_25uc","aca1920_25um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_48gc","aca1920_48gm","aca2000_165uc","aca2000_165um","aca2000_165umnir","aca2000_50gc","aca2000_50gm","aca2040_120uc","aca2040_120um","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2040_90uc","aca2040_90um","aca2040_90umnir","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_14uc","aca2500_14um","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca3800_10gc","aca3800_10gm","aca3800_14uc","aca3800_14um","aca4096_11gc","aca4096_11gm","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca4112_8gc","aca4112_8gm","aca4600_10uc","aca4600_7gc","aca640_120gc","aca640_120gm","aca640_120uc","aca640_120um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca640_90gc","aca640_90gm","aca640_90uc","aca640_90um","aca645_100gc","aca645_100gm","aca720_290gc_p","aca720_290gm_p","aca780_75gc","aca780_75gm","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["aca3800_10gc","aca3800_10gm","aca3800_14uc","aca3800_14um","aca4600_10uc","aca4600_7gc"],["aca1300_200uc","aca1300_200um","aca1300_75gc","aca1300_75gm","aca1920_150uc","aca1920_150um","aca1920_48gc","aca1920_48gm","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["_ace_usb"],["aca1300_200uc","aca1300_200um","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_120uc","aca2040_120um","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca4096_40uc","aca4096_40um","aca4112_30uc","aca4112_30um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["aca2000_50gc","aca2000_50gm","aca2040_25gc","aca2040_25gm"],["aca1300_200uc","aca1300_200um","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_120uc","aca2040_120um","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["_dart_lvds"],["_ace_usb","_dart_usb","_pulse_usb"],["_ace_gige","_ace_usb","_dart_usb","_pulse_usb"],["_dart_usb"],["aca750_30gc"],["aca1300_200uc","aca1300_200um","aca1300_30uc","aca1300_30um","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1600_20uc","aca1600_20um","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155ucmed","aca1920_155um","aca1920_155ummed","aca1920_25uc","aca1920_25um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40ucmed","aca1920_40um","aca1920_40ummed","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2000_165uc","aca2000_165um","aca2000_165umnir","aca2040_120uc","aca2040_120um","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2040_90uc","aca2040_90um","aca2040_90umnir","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35ucmed","aca2440_35um","aca2440_35ummed","aca2440_75uc","aca2440_75ucmed","aca2440_75um","aca2440_75ummed","aca2500_14uc","aca2500_14um","aca2500_20gc","aca2500_20gcmed","aca2500_20gm","aca2500_20gmmed","aca2500_60uc","aca2500_60um","aca3088_16gc","aca3088_16gm","aca3088_57uc","aca3088_57um","aca3800_14uc","aca3800_14um","aca4024_29uc","aca4024_29um","aca4024_8gc","aca4024_8gm","aca4096_11gc","aca4096_11gm","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca4112_8gc","aca4112_8gm","aca4600_10uc","aca640_120uc","aca640_120um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca640_90uc","aca640_90um","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um","daa1280_54uc","daa1280_54um","daa1600_60uc","daa1600_60um","daa1920_15um","daa1920_30uc","daa1920_30um","daa2500_14uc","daa2500_14um"],["_dart_lvds","_dart_usb"],["_pulse_usb"],["_sfnc_1"],["_sfnc_2"],["aca640_90gm"],["aca640_90gc"],["aca640_120gm"],["aca640_120gc"],["aca640_300gm"],["aca640_300gc"],["aca645_100gm"],["aca645_100gc"],["aca720_290gm_p"],["aca720_290gc_p"],["aca750_30gm"],["aca780_75gm"],["aca780_75gc"],["aca800_200gm"],["aca800_200gc"],["aca1280_60gm"],["aca1280_60gc"],["aca1300_22gm"],["aca1300_22gc"],["aca1300_30gm"],["aca1300_30gc"],["aca1300_60gm"],["aca1300_60gmnir"],["aca1300_60gc"],["aca1300_75gm"],["aca1300_75gc"],["aca1440_73gm_p"],["aca1440_73gc_p"],["aca1600_20gm"],["aca1600_20gc"],["aca1600_60gm"],["aca1600_60gc"],["aca1920_25gm"],["aca1920_25gc"],["aca1920_40gm"],["aca1920_40gc"],["aca1920_48gm"],["aca1920_48gc"],["aca1920_50gm"],["aca1920_50gc"],["aca2000_50gm"],["aca2000_50gmnir"],["aca2000_50gc"],["aca2040_25gm"],["aca2040_25gmnir"],["aca2040_25gc"],["aca2040_35gm"],["aca2040_35gc"],["aca2440_20gm"],["aca2440_20gc"],["aca2500_14gm"],["aca2500_14gc"],["aca2500_20gm"],["aca2500_20gc"],["aca2500_20gmmed"],["aca2500_20gcmed"],["aca3088_16gm"],["aca3088_16gc"],["aca3800_10gm"],["aca3800_10gc"],["aca4024_8gm"],["aca4024_8gc"],["aca4096_11gm"],["aca2000_50gm","aca4096_11gc"],["aca4112_8gm"],["aca4112_8gc"],["aca4600_7gc"],["aca640_750um"],["aca640_750uc"],["aca640_90um"],["aca640_90uc"],["aca640_120um"],["aca640_120uc"],["aca800_510um"],["aca800_510uc"],["aca1300_200um"],["aca1300_200uc"],["aca1300_30um"],["aca1300_30uc"],["aca1600_20um"],["aca1600_20uc"],["aca1920_25um"],["aca1920_25uc"],["aca1920_40um"],["aca1920_40uc"],["aca1920_40ummed"],["aca1920_40ucmed"],["aca1920_150um"],["aca1920_150uc"],["aca1920_155um"],["aca1920_155uc"],["aca1920_155ummed"],["aca1920_155ucmed"],["aca2040_90um"],["aca2040_90umnir"],["aca2040_90uc"],["aca2000_165um"],["aca2000_165umnir"],["aca2000_165uc"],["aca2040_55um"],["aca2040_55uc"],["aca2040_120um"],["aca2040_120uc"],["aca2440_35um"],["aca2440_35uc"],["aca2440_35ummed"],["aca2440_35ucmed"],["aca2440_75um"],["aca2440_75uc"],["aca2440_75ummed"],["aca2440_75ucmed"],["aca2500_14um"],["aca2500_14uc"],["aca2500_60um"],["aca2500_60uc"],["aca3088_57um"],["aca3088_57uc"],["aca3800_14um"],["aca3800_14uc"],["aca4024_29um"],["aca4024_29uc"],["aca4096_30um"],["aca4096_30uc"],["aca4096_40um"],["aca4096_40uc"],["aca4112_20um"],["aca4112_20uc"],["aca4112_30um"],["aca4112_30uc"],["aca4600_10uc"],["aca1280_60gc","aca1280_60gm","aca1300_60gc","aca1300_60gm","aca1300_60gmnir"],["aca1600_60gc","aca1600_60gm"],["aca2000_165uc","aca2000_165um","aca2000_165umnir","aca2040_90uc","aca2040_90um","aca2040_90umnir"],["aca4024_29uc","aca4024_29um","aca4024_8gc","aca4024_8gm"],["aca1440_73gc_p","aca1440_73gm_p","aca720_290gc_p","aca720_290gm_p"],["aca1600_20um","aca780_75gm"],["aca4096_11gc"],["daa1280_54lm"],["daa1280_54lc"],["daa1600_60lm"],["daa1600_60lc"],["daa2500_14lm"],["daa2500_14lc"],["daa1280_54um"],["daa1280_54uc"],["daa1600_60um"],["daa1600_60uc"],["daa1920_15um"],["daa1920_30um"],["daa1920_30uc"],["daa2500_14um"],["daa2500_14uc"],["pua1280_54um"],["pua1280_54uc"],["pua1600_60um"],["pua1600_60uc"],["pua1920_30um"],["pua1920_30uc"],["pua2500_14um"],["pua2500_14uc"],["aca1920_25gc","aca1920_25gm","aca1920_25um","aca2500_14gc","aca2500_14gm","aca2500_14um"],["aca3800_10gm","aca4600_7gc"],["daa1280_54lc","daa1280_54lm","daa1280_54uc","daa1280_54um","pua1280_54uc","pua1280_54um"],["daa1920_15um","daa1920_30uc","daa1920_30um","daa2500_14lc","daa2500_14lm","daa2500_14uc","daa2500_14um","pua1920_30uc","pua1920_30um","pua2500_14uc","pua2500_14um"],["aca1300_22gm","aca1300_30gm","aca1300_30um","aca1600_20gm","aca1600_20um","aca2000_50gm","aca2040_25gm","aca3800_10gm","aca640_90gm","aca640_90um","aca645_100gm","aca780_75gm"],["_mono"],["_dart_mipi"],["daa1280_54uc","daa1280_54um"],["aca1280_60gc","aca1280_60gm","aca1300_22gc","aca1300_22gm","aca1300_30gc","aca1300_30gm","aca1300_60gc","aca1300_60gm","aca1300_60gmnir","aca1600_20gc","aca1600_20gm","aca1600_60gc","aca1600_60gm","aca1920_25gc","aca1920_25gm","aca2000_50gc","aca2000_50gm","aca2000_50gmnir","aca2040_25gm","aca2040_25gmnir","aca2500_14gc","aca2500_14gm","aca3800_10gc","aca3800_10gm","aca4600_7gc","aca640_120gc","aca640_120gm","aca640_90gc","aca640_90gm","aca645_100gc","aca645_100gm","aca750_30gc","aca750_30gm","aca780_75gc","aca780_75gm"],["aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1920_40gc","aca1920_40gm","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_35gc","aca2040_35gm","aca2440_20gc","aca2440_20gm","aca2500_20gc","aca2500_20gm","aca3088_16gc","aca3088_16gm","aca4024_8gc","aca4024_8gm","aca640_300gc","aca640_300gm","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm"],["aca4096_11gc","aca4096_11gm","aca4112_8gc","aca4112_8gm"],["_ace_usb","_dart_lvds","_dart_usb","_pulse_usb"],["aca1920_150uc","aca1920_150um","aca2500_60uc","aca2500_60um"],["daa1920_15um","daa1920_30uc","daa1920_30um","daa2500_14lc","daa2500_14lm","daa2500_14uc","daa2500_14um"],["aca1300_60gc","aca1300_60gm","aca1300_60gmnir","aca1600_60gc","aca1600_60gm"],["aca1920_155uc","aca1920_155um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40um","aca1920_50gc","aca1920_50gm","aca2040_120uc","aca2040_120um","aca2440_75uc","aca2440_75um","aca4024_29uc","aca4024_29um","aca4096_40uc","aca4096_40um","aca4112_30uc","aca4112_30um"],["aca1920_25gc","aca2500_14gc","aca2500_14gm"],["aca1920_25gc","aca1920_25gm","aca2500_14gc","aca2500_14gm"],["aca1920_25uc","aca1920_25um","aca2500_14uc","aca2500_14um","aca3800_14um"],["aca720_290gc_p","aca720_290gm_p"],["aca1440_73gm_p","aca720_290gm_p"],["aca1440_73gm_p","aca720_290gc_p"],["aca1440_73gc_p","aca720_290gm_p"],["aca1440_73gc_p","aca720_290gc_p"],["daa1600_60uc","daa1600_60um"],["aca1300_200uc","aca1300_75gc","aca1920_150uc","aca1920_48gc","aca2040_35gc","aca2440_20gc","aca2500_20gc","aca2500_60uc","aca4096_11gc","aca4096_30uc","aca4096_40uc","aca4112_20uc","aca4112_30uc","aca4112_8gc","aca640_300gc","aca640_750uc","aca800_200gc","aca800_510uc","daa1600_60lc","daa1600_60uc","daa1920_30uc","daa2500_14lc","daa2500_14uc","pua1600_60uc","pua1920_30uc","pua2500_14uc"],["aca1300_200uc","aca1300_75gc","aca1440_73gc_p","aca1920_150uc","aca1920_48gc","aca2040_35gc","aca2440_20gc","aca2500_20gc","aca2500_60uc","aca4096_11gc","aca4096_30uc","aca4096_40uc","aca4112_20uc","aca4112_30uc","aca4112_8gc","aca640_300gc","aca640_750uc","aca720_290gc_p","aca800_200gc","aca800_510uc","daa1600_60lc","daa1600_60uc","daa1920_30uc","daa2500_14lc","daa2500_14uc","pua1600_60uc","pua1920_30uc","pua2500_14uc"],["aca1280_60gc","aca1300_60gm","aca1600_60gc","daa1600_60lc","daa1600_60lm","daa1600_60uc","daa1600_60um","pua1600_60uc","pua1600_60um"],["daa1280_54lc","daa1280_54uc","daa1600_60lc","daa1600_60uc","daa1920_30uc","daa2500_14lc","daa2500_14uc","pua1280_54uc","pua1600_60uc","pua1920_30uc","pua2500_14uc"],["pua1280_54uc","pua1280_54um"],["aca1440_73gc_p","aca1440_73gm_p","aca1920_40gc","aca1920_40gm","aca1920_50gc","aca1920_50gm","aca2040_35gc","aca2040_35gm","aca2440_20gc","aca2440_20gm","aca720_290gc_p","aca720_290gm_p"],["aca640_120gc","aca640_120gm"],["aca2500_14gc","aca2500_14gm"],["aca1300_200uc","aca1300_200um","aca1300_75gc","aca1300_75gm","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40um","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_120uc","aca2040_120um","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35um","aca2440_75uc","aca2440_75um","aca2500_20gc","aca2500_20gm","aca2500_60uc","aca2500_60um","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["aca1300_200uc","aca1300_200um","aca1300_75gc","aca1300_75gm","aca1440_73gc_p","aca1440_73gm_p","aca1920_150uc","aca1920_150um","aca1920_155uc","aca1920_155um","aca1920_40gc","aca1920_40gm","aca1920_40uc","aca1920_40um","aca1920_48gc","aca1920_48gm","aca1920_50gc","aca1920_50gm","aca2040_120uc","aca2040_120um","aca2040_35gc","aca2040_35gm","aca2040_55uc","aca2040_55um","aca2440_20gc","aca2440_20gm","aca2440_35uc","aca2440_35um","aca2440_75uc","aca2440_75um","aca2500_20gc","aca2500_20gm","aca2500_60uc","aca2500_60um","aca4096_30uc","aca4096_30um","aca4096_40uc","aca4096_40um","aca4112_20uc","aca4112_20um","aca4112_30uc","aca4112_30um","aca640_300gc","aca640_300gm","aca640_750uc","aca640_750um","aca720_290gc_p","aca720_290gm_p","aca800_200gc","aca800_200gm","aca800_510uc","aca800_510um"],["aca1300_75gc","aca1300_75gm","aca1920_48gc","aca1920_48gm","aca2500_20gc","aca2500_20gm","aca640_300gc","aca640_300gm","aca800_200gc","aca800_200gm"]] ,
  tags =  [{"display":"Camera","type":"group","children":[{"display":"acA640-90gc","name":"aca640_90gc"},{"display":"acA640-90gm","name":"aca640_90gm"},{"display":"acA640-90uc","name":"aca640_90uc"},{"display":"acA640-90um","name":"aca640_90um"},{"display":"acA640-120gc","name":"aca640_120gc"},{"display":"acA640-120gm","name":"aca640_120gm"},{"display":"acA640-120uc","name":"aca640_120uc"},{"display":"acA640-120um","name":"aca640_120um"},{"display":"acA640-300gc","name":"aca640_300gc"},{"display":"acA640-300gm","name":"aca640_300gm"},{"display":"acA640-750uc","name":"aca640_750uc"},{"display":"acA640-750um","name":"aca640_750um"},{"display":"acA645-100gc","name":"aca645_100gc"},{"display":"acA645-100gm","name":"aca645_100gm"},{"display":"acA720-290gc","name":"aca720_290gc_p"},{"display":"acA720-290gm","name":"aca720_290gm_p"},{"display":"acA750-30gc","name":"aca750_30gc"},{"display":"acA750-30gm","name":"aca750_30gm"},{"display":"acA780-75gc","name":"aca780_75gc"},{"display":"acA780-75gm","name":"aca780_75gm"},{"display":"acA800-200gc","name":"aca800_200gc"},{"display":"acA800-200gm","name":"aca800_200gm"},{"display":"acA800-510uc","name":"aca800_510uc"},{"display":"acA800-510um","name":"aca800_510um"},{"display":"acA1280-60gc","name":"aca1280_60gc"},{"display":"acA1280-60gm","name":"aca1280_60gm"},{"display":"acA1300-22gc","name":"aca1300_22gc"},{"display":"acA1300-22gm","name":"aca1300_22gm"},{"display":"acA1300-30gc","name":"aca1300_30gc"},{"display":"acA1300-30gm","name":"aca1300_30gm"},{"display":"acA1300-30uc","name":"aca1300_30uc"},{"display":"acA1300-30um","name":"aca1300_30um"},{"display":"acA1300-60gc","name":"aca1300_60gc"},{"display":"acA1300-60gm","name":"aca1300_60gm"},{"display":"acA1300-60gmNIR","name":"aca1300_60gmnir"},{"display":"acA1300-75gc","name":"aca1300_75gc"},{"display":"acA1300-75gm","name":"aca1300_75gm"},{"display":"acA1300-200uc","name":"aca1300_200uc"},{"display":"acA1300-200um","name":"aca1300_200um"},{"display":"acA1440-73gc","name":"aca1440_73gc_p"},{"display":"acA1440-73gm","name":"aca1440_73gm_p"},{"display":"acA1600-20gc","name":"aca1600_20gc"},{"display":"acA1600-20gm","name":"aca1600_20gm"},{"display":"acA1600-20uc","name":"aca1600_20uc"},{"display":"acA1600-20um","name":"aca1600_20um"},{"display":"acA1600-60gc","name":"aca1600_60gc"},{"display":"acA1600-60gm","name":"aca1600_60gm"},{"display":"acA1920-25gc","name":"aca1920_25gc"},{"display":"acA1920-25gm","name":"aca1920_25gm"},{"display":"acA1920-25uc","name":"aca1920_25uc"},{"display":"acA1920-25um","name":"aca1920_25um"},{"display":"acA1920-40gc","name":"aca1920_40gc"},{"display":"acA1920-40gm","name":"aca1920_40gm"},{"display":"acA1920-40uc","name":"aca1920_40uc"},{"display":"acA1920-40ucMED","name":"aca1920_40ucmed"},{"display":"acA1920-40um","name":"aca1920_40um"},{"display":"acA1920-40umMED","name":"aca1920_40ummed"},{"display":"acA1920-48gc","name":"aca1920_48gc"},{"display":"acA1920-48gm","name":"aca1920_48gm"},{"display":"acA1920-50gc","name":"aca1920_50gc"},{"display":"acA1920-50gm","name":"aca1920_50gm"},{"display":"acA1920-150uc","name":"aca1920_150uc"},{"display":"acA1920-150um","name":"aca1920_150um"},{"display":"acA1920-155uc","name":"aca1920_155uc"},{"display":"acA1920-155ucMED","name":"aca1920_155ucmed"},{"display":"acA1920-155um","name":"aca1920_155um"},{"display":"acA1920-155umMED","name":"aca1920_155ummed"},{"display":"acA2000-50gc","name":"aca2000_50gc"},{"display":"acA2000-50gm","name":"aca2000_50gm"},{"display":"acA2000-50gmNIR","name":"aca2000_50gmnir"},{"display":"acA2000-165uc","name":"aca2000_165uc"},{"display":"acA2000-165um","name":"aca2000_165um"},{"display":"acA2000-165umNIR","name":"aca2000_165umnir"},{"display":"acA2040-25gc","name":"aca2040_25gc"},{"display":"acA2040-25gm","name":"aca2040_25gm"},{"display":"acA2040-25gmNIR","name":"aca2040_25gmnir"},{"display":"acA2040-35gc","name":"aca2040_35gc"},{"display":"acA2040-35gm","name":"aca2040_35gm"},{"display":"acA2040-55uc","name":"aca2040_55uc"},{"display":"acA2040-55um","name":"aca2040_55um"},{"display":"acA2040-90uc","name":"aca2040_90uc"},{"display":"acA2040-90um","name":"aca2040_90um"},{"display":"acA2040-90umNIR","name":"aca2040_90umnir"},{"display":"acA2040-120uc","name":"aca2040_120uc"},{"display":"acA2040-120um","name":"aca2040_120um"},{"display":"acA2440-20gc","name":"aca2440_20gc"},{"display":"acA2440-20gm","name":"aca2440_20gm"},{"display":"acA2440-35uc","name":"aca2440_35uc"},{"display":"acA2440-35ucMED","name":"aca2440_35ucmed"},{"display":"acA2440-35um","name":"aca2440_35um"},{"display":"acA2440-35umMED","name":"aca2440_35ummed"},{"display":"acA2440-75uc","name":"aca2440_75uc"},{"display":"acA2440-75ucMED","name":"aca2440_75ucmed"},{"display":"acA2440-75um","name":"aca2440_75um"},{"display":"acA2440-75umMED","name":"aca2440_75ummed"},{"display":"acA2500-14gc","name":"aca2500_14gc"},{"display":"acA2500-14gm","name":"aca2500_14gm"},{"display":"acA2500-14uc","name":"aca2500_14uc"},{"display":"acA2500-14um","name":"aca2500_14um"},{"display":"acA2500-20gc","name":"aca2500_20gc"},{"display":"acA2500-20gcMED","name":"aca2500_20gcmed"},{"display":"acA2500-20gm","name":"aca2500_20gm"},{"display":"acA2500-20gmMED","name":"aca2500_20gmmed"},{"display":"acA2500-60uc","name":"aca2500_60uc"},{"display":"acA2500-60um","name":"aca2500_60um"},{"display":"acA3088-16gc","name":"aca3088_16gc"},{"display":"acA3088-16gm","name":"aca3088_16gm"},{"display":"acA3088-57uc","name":"aca3088_57uc"},{"display":"acA3088-57um","name":"aca3088_57um"},{"display":"acA3800-10gc","name":"aca3800_10gc"},{"display":"acA3800-10gm","name":"aca3800_10gm"},{"display":"acA3800-14uc","name":"aca3800_14uc"},{"display":"acA3800-14um","name":"aca3800_14um"},{"display":"acA4024-8gc","name":"aca4024_8gc"},{"display":"acA4024-8gm","name":"aca4024_8gm"},{"display":"acA4024-29uc","name":"aca4024_29uc"},{"display":"acA4024-29um","name":"aca4024_29um"},{"display":"acA4600-7gc","name":"aca4600_7gc"},{"display":"acA4096-11gc","name":"aca4096_11gc"},{"display":"acA4096-11gm","name":"aca4096_11gm"},{"display":"acA4096-30uc","name":"aca4096_30uc"},{"display":"acA4096-30um","name":"aca4096_30um"},{"display":"acA4096-40uc","name":"aca4096_40uc"},{"display":"acA4096-40um","name":"aca4096_40um"},{"display":"acA4112-8gc","name":"aca4112_8gc"},{"display":"acA4112-8gm","name":"aca4112_8gm"},{"display":"acA4112-20uc","name":"aca4112_20uc"},{"display":"acA4112-20um","name":"aca4112_20um"},{"display":"acA4112-30uc","name":"aca4112_30uc"},{"display":"acA4112-30um","name":"aca4112_30um"},{"display":"acA4600-10uc","name":"aca4600_10uc"},{"display":"daA1280-54lc","name":"daa1280_54lc"},{"display":"daA1280-54lm","name":"daa1280_54lm"},{"display":"daA1280-54uc","name":"daa1280_54uc"},{"display":"daA1280-54um","name":"daa1280_54um"},{"display":"daA1600-60lc","name":"daa1600_60lc"},{"display":"daA1600-60lm","name":"daa1600_60lm"},{"display":"daA1600-60uc","name":"daa1600_60uc"},{"display":"daA1600-60um","name":"daa1600_60um"},{"display":"daA1920-15um","name":"daa1920_15um"},{"display":"daA1920-30uc","name":"daa1920_30uc"},{"display":"daA1920-30um","name":"daa1920_30um"},{"display":"daA2500-14lc","name":"daa2500_14lc"},{"display":"daA2500-14lm","name":"daa2500_14lm"},{"display":"daA2500-14uc","name":"daa2500_14uc"},{"display":"daA2500-14um","name":"daa2500_14um"},{"display":"puA1280-54uc","name":"pua1280_54uc"},{"display":"puA1280-54um","name":"pua1280_54um"},{"display":"puA1600-60uc","name":"pua1600_60uc"},{"display":"puA1600-60um","name":"pua1600_60um"},{"display":"puA1920-30uc","name":"pua1920_30uc"},{"display":"puA1920-30um","name":"pua1920_30um"},{"display":"puA2500-14uc","name":"pua2500_14uc"},{"display":"puA2500-14um","name":"pua2500_14um"}]},{"display":"Naming Convention","type":"group","children":[{"display":"SFNC 1.0","name":"_sfnc_1"},{"display":"SFNC 2.0","name":"_sfnc_2"}]},{"display":"Series","type":"group","children":[{"display":"ace GigE","name":"_ace_gige"},{"display":"ace USB 3.0","name":"_ace_usb"},{"display":"dart BCON for LVDS","name":"_dart_lvds"},{"display":"dart USB 3.0","name":"_dart_usb"},{"display":"dart MIPI","name":"_dart_mipi"},{"display":"pulse USB 3.0","name":"_pulse_usb"}]},{"display":"Mono/Color","type":"group","children":[{"display":"Mono Camera","name":"_mono"},{"display":"Color Camera","name":"_color"}]}],
  caption = "Filter",
  type = "radio",
  defFilter = {"0":{"96":"aca2500_14gm"},"1":{"1":"_sfnc_2"},"2":{"1":"_ace_usb"},"3":{"1":"_color"}};

window.rh.model.publish("p.tag_combinations", tagCombinations, { sync:true });
window.rh.model.publish("temp.data", {"tags": tags, "caption": caption, "type": type , "default": defFilter}, { sync:true });
})();