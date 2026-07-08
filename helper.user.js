// ==UserScript==
// @name         Animevost
// @author       0x00000ED
// @description  No License, No advertising, Stickers, Rating, Night mode.
// @version      2.0.0.22
// @homepage     http://steamcommunity.com/profiles/76561198037471455/
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsSAAALEgHS3X78AAADG0lEQVQozwEQA+/8AZ4XRBETCD5BHujp9u8FEwbg4wMgCNDk5OXo9v/8/iERCFZIOsq52eT5AhwlFiQK9AN2Li3u7fj+BAQqMh/6BAeTyL7jMSkybGgURjzlFw3PAvuivMEI6/c3KB0oKg//9/kDl3hoB/r07eLw+gT9br60PHx2QUZFNDEyqqioycfIeXt7OVRRoNbJKg4AFvsGxcnmA0wEHR0jEBkdFH7Jy77y7UEzNRsaGqipqbu7u8PDwywsLFNPTw4UEtDy9eSvxwn8BQCzJ0XQQlmvUVMkKSgKCQkIBwfq6elaWloAAAAKCgoaGhp1dXW0srLe6uhzKjnGRGICBwwHBAD/wt3l6+/vMC8vhYeHFRYWERUVLy8v9vb2Ozw97vDwGBkZIRUXCS4m7e7uAg4SCwQKAwUSDiwvL0RHRzQpKKJ0cycKCicsLAQEBOTe3U9EQzM0NAAAAA8VEgkA9QQiNSENBwYT0fZ8OjhDS0ugnqA84uC/BwmCammANzQMCQkcHBn+9fX0Bgb78ew1PicC4uv92sPXFuTv5+jpBRcXI0NEyPf4FB4c7+7tKTU1EB0d8w0PAgsLwsPCAcjY1svpA18IGQkHBiMNDb7k3/4wMEM/P8Ha2iQGBPYZGyNCRAMcHAkbHObr6rF2fjz5B/T3/ANCEBuy9+skIBdcMy6sl5vJ7elbZmjW6eosMjMREhL+AAECAgKRi4sbusonLC33BQUDHScmYq+hs8LC5rnFASokDysqBgYHMzw8+fr68O7uDA0N3NzcTFRUqr26GvcCBBASA0g+NlhfYQoYGNoVEGGDgwwJCr29vN3d3b29vTU1NRMTE6Gjoz05Of8aFduxsBHk9AQO1eOUm5taYF8mMjEABASfqqlnYGEjICD49/gICQjn6en19vbz9fUwNDbfKBk2FRwEGeUE2oGZlsC+9PgABfH3COfppvf6TWZjGhUV2NzbsbGxPj8/+/z8Ew8P9gUO/CQjBPX9/1ozJyE+OsKty/jc6RIYHvTT1rxscNLu9RhEOlhWVh0fH/X09RIPDwHvAL6HqrWSTIe2nstyAAAAAElFTkSuQmCC
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVRo3o16d3xUZdb/ecq9d/pMeiGNJAQCJCC9QwRFUVBR1khRUV99V2XV1V1B0F1XcdkVcRdXXSvYBeUFxAKIgFKk95IQQnpInz5z2/M8vz8uzmb1Lb/nk08+k5mbuad+zznfc9G7qVMQRhghhAATzBn3JdkmVuQxJgABICQA2ez0/KmOhot+m4OCAECAEGCMAAEChBAgjJhmDhmX5051MQ4IAFN8am9dOBDHFHEOAABCCLBeXPktBDCTD59U4HTLTDWwz8tVTTK1jvbYob1NmCDOhRAgALjJU4b27zxejRBS44bdQSsqch1OiTGBEboiPYDgmk4J9PTEq893K3YqACGMMUGMQV5RsmKniGAkuLsg2zegL2KMSpQQRAgmCCSXnQ4qww4HF4IhYEIgAXaJuiU5SVGSFSVJsSUpikeWHZIkEYwJ0g0zLcftTXFwDohg2rdQ6pOt6+b5Ux2UIoIRwQgJLjTdjES9pXlcjauhmNcjTZ2W73LLjAmEgBKKQABCQGQpY9LwntMXcDRWe6EnPcuVmu40TIEwYly4fLacvr7G6k7W3t7n+om2jJSObd+7i/IwpQgjBMgEHlc1DyFep4MoCmcMYxRGZtCIh0xD4wwEUIScRPISyUdlN6Ipsm3g0DwhwASBMTLOn5MlVH22Ox7TZYUwUwAA9Tgln0dO8fW9cUpPVTMOBccM8RJTMwxmWZ3qGrc7qOAcEyK5HUQiAgGRydkT7eOnFmKCuABEiclETmFKBDs9t1xdcOct1O1kkWj0wqV4QwsXHAh2atxRc8ksTN7X0rqnoXFfXf2JS41dTIf/7jgAFSqeUTm5szvk0ZlZaT6vFtd0ZDbXBdpbww6HZDKBCQghZI/TXZDtHVBgy04fcvOoVLVHa2oxuuMII+ur0JbS6zs74w6nzBlDnBNKiEwIwYbO+uR5ysf31Q2OTAMwkRTaripqSnbfuTOxTWn57Gv/sdPh6lovlSnBp0M9O7SOrS2XLgdCCCEhhDclubhvYW5OTlpKisfjQQgHgoFwJOIPBFraLtc3N0X9AeAi0+OeVVJy3/Ch5a6UH7+rDps6Biy44FxwLphumnE97I9U/PXX7sO7EMJAKSIkYQs6YULW0eM9zY1Bp0sGAIwRxoAQ2B1Se1OgkyRlDciMHTuBCeYAHhY69+IXEI3YMlLP/vHljJLCNLt9n7/trfqzR4KdAOB0uW6aNeuGGTNGjxldVFTsdLl+af6TJ09+9eVXe374/sCBg4FQsD0cefPI0XdPnJiQnHVXcr9B7pRuTTWEIBghBMgmmYCHDc3OonHN62WcAxfAOQhh4QLqXDBfSfGdOnq5vjbgcEoYAUIIE4QxQkIQh2341cUyMI6wAFBctvpjDUHkVJJcSlXdJaGtvHD8+65mTEjF5ClzKytn3XRTalqaEOIKLAjBOTdNU1GUWCy2cuXKVatWBYPBrKysoqIip9PZ3t5+4cKFWCyGAAkQGOBXmf3uzx5IBAQNA3PQVLOkPKNvkU8HSUSjAMA5BwGCcYyRJCEqDFM3+JDhWXaHfLGqy26nGCOEEcaIEMzi6sVDdYMnFHGTY4yYwdL7ZQT3X7IFAu931P297lTcMBAgbrKxY8fec999AMAYE0JgjBFCViwpirJ169a5c+eapvnEE08sWLCgoKDA0hAAWltb161b95e//KW9vV2W5U/bag6GO/5YMKJY9rTHYuVjcrNyPGpMRzwOGIMQCCEuhGKX1Kh+4ngX6ph7B0lJESazOaSGukD1qXZFoYQihAAjRCg2dLNgUFZuaaahmQyEy+NqPN96/6bNOwOtIKC4qGjOr35VUFCwdOnSmTNnvvvuu4wx8lOMmqZJKV2xYsWSJUueffbZZ5555pcRZbmrq6tr9uzZx44erZg85aut3yiYPFM48jfXjmEuMFUTWVWEc8E4wYhS1FQfPHmsIxLRUfDll/UDP+LkZIGxzam0t4bPH2ulEqYUW9UKYyQ4HzihWPHabVTq1PVZa94/1thcWFDwzB//OHv2bJfLhRD6/vvvZ86cWV9fn5ycbMlkSf/3v/996dKlR44cKS4ufvvtt7dt29bc3Mw5T0pKGjly5OLFi71er2EYkiTpuj5s+LCSfiUzb7zxnnvvBQRv3Dzz/rLyzlCIIiQYF5xLBMVD8fNnuhsbwlacU9cDD8QzM/STJ5CqaqqZmeNV7NK5I82CCyoThAATBAhfOtl01bTBXZo+7Y13qtraS4qLb549e9OmTZmZmdOnTxdClJaWEkKamposBYQQlNJ9+/atXLny1KlTn3zyybJlyxJWJ4RYjvJ6vUIISZJM05Rl+dNPPi0rK3t40cO7du6cfu21D2zcIgFeWDa4IxBUKCGItHfG2yDtcmerzU44F4wJJDgHIeK7dum7vhPRqMBYskmxiF51uJEZTLZRAIExRiZLLUyfu3/b4UsNMiVOl9sfCGRnZ1dVVbndbgBob28vKSnZu3dvWVlZIoomTpw4e/bsDRs2dHV1lZeXf/bZZ7IsM8YwIYaub9y48eabb05cbHlszpw5DQ0Nhw4d+nLLlltmz2aMbVsw75rC/PbuYO3Jto5uPWPCsI69x7RIjAvEucAdh05f+o/f8C8+F9GIwBgRbBjM6bWVTSxyuBVmMEqIAJHidv5m+9bDlxooxgbj4UgEAEpKStxut2EYAHD48GFN07KyshJdzwcffNDd3f3555/v27fv/vvvHzlypIUhjDHTMAAgNTW1dzJYab1w4cLjx483NTXdOHPm22+9JYS4Z8uWU9Wt5/Y2tbeFKdPbvt1rxuKYEGS1ZIcffPbYN6dq6qKIUqpQAYAJMQ0u2aWBE4s9KU5V0zMcjo8aL3zT0WhXFJPzf/zjH08++WRCUEuB7du3Z2VlpaamWhAEAGvXrq2qqjp48GBycvKYMWNmzpw5dOhQ0zQxxtYFHR0dvRWw3hw5ciRC6Ny5cwBw1913P/7b3zb7g498s10BrNgoIpgqMpEIRmDBHI41trqyUhqrO4/tqQt2xRS7jDACjDkDREjRuKKc3NTaUODFC8clRbH6yI0bN65fvx4ATp8+3dra6nA4wuHwhx9+OH36dEsfjPH5c+d++OEHhBBjbPKkSYMGDVq1atWJEycQQpxzy9g7duywYNdSgHMOAGlpaUlJSRcvXrSCavkLLwwfNmx3oOWHSJuPyhwAIUBWB4oBI8AYI+Dc7pAM1Tx3qPHS6VZASFIoYOBCCC6Kxvd/s6cuxswlv//9woULHQ7Hjh07Ll68iDHu6elZsGDB+vXrb7rpJr/fP2fOnIRbdn///RVjE7Jx06YjR478+OOPVpxYOgDAhx9+WFNTY2WFECIBvna7PRqNWropivLSSy8BwJvNZ1XBJYIRAmwFj+UBapMRgAAgFMsKaa/vObe3NtgVkewKYORWlH2NzRuqzvYtKPjNI49UXH211+u13G0ZcteuXXfccceuXbtKS0snTpxoIYyVElfsyhhC6NChQ83NzZZ6VnnGGIfD4dtvv722tpYQghDavn17fX09AOi6LklSAqwmT5kyt7KyLh7aFWr1SjJHcGWAsQousckIhNX/IASKQzJ1s/ZwfdOpJiEAuZ2v/LAPAOrq6//5+usrVqy4fPkyxtjyu4X3siwDwIIFC2RZtqwOAJfq6iwTlpWV2Wy2p556KhgMYoyFECNGjBg4cCDnnBBy/Pjx8vLyyZMnjx8/fsaMGdFoVAjh9/vz8/MT7gKARx97DAA2tF00QVCEMMFYopgSBIISWboSVdbVAgglhKCuhi4zpDYWBL4+d96y5Zq1a8OhkBWsiUgQQqiqmpaWtnDhQssz1i2tK4UQEyZMaGlpicfjieiqra219GeMYYxVVf3hhx8AgFKampp69uxZVVUHDx5sKWC5euSoUdOmTtvx3Y4qNThA8fhDYSMUY0xQrxtjghFYI2LitwAAapcUBv/13YFwLE4RRgjV1tZ2dHYm8M6KYytgHnzwwczMTEug3piIMX799dcTtrcU8Pv9oVAo0UdIknTbbbd5PB6fz5eRkbFx48acnJySkpKf3eiOykoA2B9qUwB7BpcMXvbrqdvennVyE0YIrqRD74MBADDFe/xtAOB0OoQQEydOTMB8Tk5Ov379LKAoKCh49NFHEzho3S8zMzMRA1aO/gzvrdgTQjz00EOfffbZuHHjSktLAeCNN96orKy0vjlhBQCYUjEFKD7Y3WogwfzBwInz7d/92Lbr4JV52EqARBwB45IAv6ae6O5wer1F/foBgM/ns9vtlhDr169/4IEHrNfPP/+8z+djjCVaaACwYoAx5vP5nnzyyeLi4oTo1gUIIV3X77zzzpdeeikYDO7Zs+eRRx7ZvHlzS0vLokWLEnInXhQWFZX2L62OBfzC4N2Btu/2n3/p3f33LMU/Ex0hBCZzDChKHz+qORbuNvX8Pn3y8vMB4Ouvv7ZQ4vHHHx8zZsymTZsA4Pbbb583b56Vkb3hfOrUqdafs266acWKFatXr/6ZBwDglVdeee+99wDggQce6NOnz4QJE+68887Fixfn5eX1jsZErRg0YAAH6DJUm6LIPo8jK82RmYJRItfRT34gWPcHoLOrNR4FgKyMzPLycssSsiyvXr165cqVa9eu3bt3b9++fROSMcZM0xRCWKA0bdq0ESNGAEB1VRUAlJWV2e32xKADAOnp6QsXLtQ07a677lq3bt3rr79+xx135OfnP//8873ND70YmdycXADoYRpFSAguTCYYo1fktuS3opMSo6PLCEU7mQEAhODJkydbJbaysnLRokUrV774+98/qSjKRx99lJ6ebjXDV+7E+Xe7d69avfq5ZctWrFgxbdq0AwcOPPjgg8FgMB6PW/ON5YS2trYJEyaEw+Ha2trfPfHE8uXLz507d/z4cUKIVSV+OTkkJycBgMqZNW0CRhgw/SlrkTVCWTCIJEpkKWzoANDY2Dhu3LihQ4eeOHFi8+bNJSX9amouUko/+eSTsWPHMsYkSQqHwwePHNn81Vdbvvyyo6Ymz6bM2L+/qrr6z3/+85IlS954443etk8UkJMnTwoh+peUvLNmTWZm5onjxzOzsv4n6QHgChAIwZkwTQ6mMJmgzGSCA2eIY0QoBo4IxcIagQQHgKoLF06ePLlp06aJEyY0NTeHQqHUtLSPP/74mmnTmpubX33ttV379l88d9bo6RmUmnr/wAHTJk8sSU+fuPofv1+69M1XX1UUZcmSJZqmUUIIpZwxzrm4UkwAAOobGx+5/z+WL19OqMSiUeKww/9wenq6AcBtU+xuOcmFZYlQidDB4/qaJmMmN3XGDZNxwUxuGgam2C7JADCkrGzWTTfNnTcvJy+vqbl56rRpb7/+ekFxMQA0Njf/fcWKp8ePGzhlUnFmZrLDAabpV1V/KPTYpImPfPzxc08//dhjj11/3XUrV678Ztu21paWf9EhktS/IP+WyZPunXNbQf/+et0l7nBQX5IgBGQZ/bsTLO81NTcDwPDRxYMz0yOaSgEE59Se7MAYIUrBphAqcV3jCJkmS3a5+nkZnDr0q9tuG1FetnLVy/37ZC97b801EycSRYk1NdqSkwcNGNCnsHBCv+KSlJSOeLw9GLSKStQwJhb29X2745MNGx596KHivgVvv7I6cLGm+szppuZm3TCSHY6+qamFOX0kr0/r6fafOkWdTsnjMQFACOxyAyGAECHENE0rp5lpVl2okTHKSvJGDVMzucE4ZpyCZjKCkWZKmTnC6eDV54ksA0IgeHFGKgAcPXL4qQf/c+qgUmIaEI2qwaCq64rbzQjxZvcpGDhwzYGDz98ww2DMhrHOmCkEwdhOaeWQ8k8/++zRhx5ifr/Z3emKhEcX5I/Oy9E7OvVY3JmSHOrqwnanxIVdcKHrLBQCKkkOJ0EAkmSNPpRSa8BoqKs7e/bM0KzMbJs9HovJCJkgTBAUU4wJZgCsrVmSZWyT40JgghmCkuwMl005fOyY/+SJaFMj1nTF6XAOGCjFoiB4xDCSUlNvmTnzL4sWPc0YRUgAMCEkShljdkoYwMH9+1vq6vo47D3+gByPam1tka5uk1KPxx1tbuG6Rjs7I5Riu50qiiM5BTPGdC0WCtm8WJLl3qV99+7dIERFv2KKIGYYTkoJIJ0xDHl946FYIKpF/NFwe6C7LRhu9cda/c0XWpRG/7iM7KaW1gO7djnDESMaZeFI6OCPscZGU9Mw56Bps6ZP71aUIw2NHlnmQshUYgJyvJ6Xvt9zSIiClOQvt20HhCjBWo8fdMOWlOSklIcjejgsdAMUm0AIx+NElhkAokQ3mcPhxBhzLnqnwabNmwHg2sJCzTBkWQKMqIQlmdJoRuGRpW848jJlu50SBAgwQVSWmGkgu/261D7bG+q+Onnqmnl3GLquUMoYd2ZlCUlSbDZNVXPy8qZcc83aQwenFBeFVBUBT7XZdl289ElTU92GdfOfefar7dseuGu+rNhwaipxuyJdXTQ9HSOQNc3udguMTcMkNkVQSpxO5HDKbjdQAgAWRlk1/uyZM1u2bS10eFLq4ocuVBNCQQgEYAiOM6ZPGrj8Cd+oodQuC4wURZIVSSLIbpNVAlMy+/io/P6u7y9TKSU9nbo9jqxMkxDickkeD7HZAODRX/96e1NzbXcPxjhumgFV/cOevW/8/nEgdMKgQceOHzdUjXq94HBgu8OdlSXbbYrdLnt9GhcIE8nlRDa75PUhrw+cLtnjwZJMKLVKpxU/b7/5FlO123JLbAxFY7oa1aNBLdgd72wN4ng8HotEwTQxAOM8bpqGacZ0QzVNv6Z6qbSgX2k4Gv3bpi9ISqqw2ZjNbrrcus1uyoqgUjQSqZg8edCoUX/bs8cuSdlu9zuHj4wfP+7awYMjTU3DS/p1d3Q0d3XR9Azh8eoORwwTpthMWYkhhFwu1WYzHU7u8WpOl2p3GIpNZdxkTNO0SCSi6zohpKam5o133/FReVpydqcRpwRjBBwLE3F7WhLu2L6nbsXr0ZNVTDMUQgkAE4JgJGNCEdYwWlgyKNPhXPXJJ3uaW1ylpYbHa8vKtqVnCsVmCoEJIZS+8Ic/rLtQczkSVXV9Z1v74so58UjEYKwwM8OOcU19A3i8SnoGSk135ubJmVmmz+fsk+PMybFn98Fp6ZCSSlPT3JlZ9iQfkSTTNDnnDofDbrcjhJ5euiwejd5bOChDsRucK5ggAUgACPDlZNPA7kOe/BzisIPgXAhKCLGoaQAboTFdz7bZnxky8sEfd9+/+Km93++2Z2UTm504HQT/q/2cMWPG1BkzVuzcNadsUPGAkuLsrHBXt02W7R5PittVe+kSAGC32+V2C10XpqlYww1CMiFIkkCSgFJAGDCWZCL9xKsSQjZt3Ljus/X93L7KrOKIaTgIZUwIAIowIhA4VY17jp4BSrnJrN0b59w0TGaYQgguBBXQEovOys6/vbCk6sKFOXfMFXYHdbuZ+Hmdf+3ll49Ho7/fvmPW2DGg64CQyRgQ4nO52iz+h0qgKMjpwm4PuNzI7cEeD3K5wW4HSQZM4N/7Z0ppS0vLww8/DADPDBgpY2xwLsSVjkgIwQUgScKJ7upKp2Qy74ihzkH9uWFaiiqEdOvanwYOm5ids2v37l/NmRONRhM18kqZZKykpOTPL77YoWk+lwtk5cqnCOySFI/FrH4AMAFKQZKQoiBFAUkGSQJCr4yzvaS3uMc7589vaW19fvDYUd60gK4RhLnJBGPctFaoIITA/9IJBBPC4Dza1q519QBCwEEAYA7IYN68jC9+t2j8gJKvt26tmDTpUm0tpdQK1gT/cedddy1atKjyqafP1NcnZWZwxoCLnlgsIz0d/r2z+dfPL47JGCHE0PVbbr115+7dTw0cWZld1KHFKcbcZNTrzphRQVxOYdFhQlyZtbkQjAsnpmkOl72l07zcyTAGAEM1sEz7jCjxDMxxynT74w/dPPyqw8eOjRo58qMPP6SUWjS6RUtxzlevXv2r+fPL7rr3k+07vDk5LX7/xZaWEcOH9x7E/pcjhKCEtLe3T6mo+ObLL1deNeHevP7taowgJDgAAItr0dpGMxYXCFlRg7YPnYkJwgT5ZPlYpPtM1J9ut1+dmp0syT1qPKMwI700B9skrplgk5Bmxs82/eXIwVXnT5mmeeMNN/zzn//sk5PDObf6eEuT55cvf3rZsn7ZWd3+QPmYMbt27kzMAP+79AihzZs3L3ro4aaW5icGDV9aPPRMoEcCbDHpjAumm1wgsCl6KMoFYoyTeRklAsArySvrT75Qc/RQT/uO9qZNrXV9fUk3XD1CyU1GArjOqEPWA9GmA1WRSGxGbv6E7JzzXPvh0OG33nnHZrONGD5ckuUEWTRl8uSFCxcim2Pq9Okv/vWviqL8n9JbLopGo11dXTfdfNP+ffu+rD5rApqSkh3SdQSIcyEQZqruKMzzlpf2nDhPHA5mMlKZ3i9FVtZ31L7VdK6kuPjll1/Oz8v74eDBL5pqCwv6jOqTE43HbU5bpM3feuQiAqCy3BUKDx5R+mjlrIrS0urG5jc//vjjjz9ijOXm5no8HkuHpKSkSRMnjh071hqRE3zoz9SwAjjxpizL+fn5RUVFN82atWXLlq8unst1uId6UkO6jgRiuhFr60qvGJtWMab+wy1AqQCEtpXfaCAx/8x2VZGOHTpcOmggAGz95pvZt94aj8d3PPTA1IElLReau841U5lgSvS4ml6QmTVpSFVD8+fHTqzd+UOtP0Awtjsco0aNeuGFF0aPHp0gQK38/hmb0lsB3TC6/P5krxdjLEuSABCcW2Pq6VOnx08Yr4Yj60dd10d2huOqZ1D/zJnT0qeOkzzOzn3HGz7f1rLjALZjeijSGWDG/ffcUzpooKqquq5fd/31a9esAYCHN25uOF3ferKBYWQIwQwzOz1Vy0+d99rbpUv/9MymrwdPnbb5i81NTU3BYPDbHTtGjRoFAKqmGaZJKbWy3NJk3bp1tbW1vR/6sNTTdP3IiRPheDwcjSIAjLEkSYZhlJWXvf7aawaIF2qOYYEEwuGa+qqVbzd8usV/ourY7/7avuco0w1yT0bpZx21NfHA8889V1hUhBCy/r+8vLy7o/PrXbukkHFLXhEH4aUKIHivp2neuk+P1jbce++9X2354r577i0pKXF7PFdADWMBEIxGo/G4TAilNMGB7ty589VXX507d27vsZ2Zps3p/OzTTy9fvjxg8GBd0xRZTuDykKFDq8+f3370UIbNNdSVEtJUrb3HVHUjEmvavBPZFM44VU3WoIWA4H696Ejrxs88+8f1G//rrYunBYJUu71djW1ovNgYi5QOKF2z5p3RY8YKIRK0ISEEYxwKh8+cPw9C5OTmCkrjum4BNqXU6/Pt2bPH4mAScU8IUSOR6dddV3nbbaNHj05KSbHbbJSQhCTPPb9841dfvll/aqIrgwokvO5Ya6cWPKSkJQsuhABcPj7HUECxOTxeT2/i0jTNtLS0pUuWBLj5t0tnlpz88eWqEyGbvPy5544dPzZ6zNgE/COEKKWNjY333XdfdlbW+NGjx48ZM7CkZNGvf93U3IwVRWesJxR6//33ZVn+WQ5gjOOxWL+SEkmW//7yy263u9vvT3xkmmZxv+JHH3yo3VB3ax1OLKmaaQTD4boWwJgzzoVA+pOPD3/nvTOh0OX6+oysrN5PCSCETMYGDBhww/XX33rbbcDYVcOHuz0ei1W3uERrx7h169bKyspgMNivX7+KigpZlg8fPnzw4MG0tLRrr722rr7+QnV1V1fXkiVLXnjhhd6bcABounw5JTX1zrlzf9y//9S5c5FoNCstTZYkqzHDGNfX1RUPKO3vc393y+2nD9Tbhg9jfn/X0XOCUMYEJSb0TU4+3dXV0NiYkZXFhSA/OYFzTglZsnTp8aNHJ02aZJimRKnVJCamVWtJcfPNNwPAmjVr7r777oTy1dXVixcv/uijj5xOZ25u7uLFiy0Su7f0/6INc3M3tLYGAgGb3R6MRNKSkhJdVkHfvvNun/P+Bx+eivmnXl1cHY7UNLQbJlACIABjBGNzcgBgx3ffWdxgb//GVHX6jBm33HprQ2trR3c3F8IClt4SLFu2TNO0te+/f/fdd1sMKWOMc15SUrJx48YvtmyprKw8f/78448//staxji3MMqibzVVJYTEVdX8afNnnfnz5gPA52fOE0ozpMiQErs7yRaLGcxkOGbo0/PzAODdd9e0dXWFYzHeSwdV00zTLBsyBGNsMtbZ05P41GI7qmpqvv7664qKiptvvTUWjxNCLPS0NiuMsZk33rhq1Spd1xPLyd5H03XGOQhRW1urKIrT5bK6klg83ptbHz9hQnp29tYLF/yaJjj2JTsmTs4tKUkiDhuOaPpVGamV/QfW1l588c9/dno8TZcvhyKRuKp2+v2RWIxgbC2ICMaqrl/u6gpFo5quB8Lh7lCopaUFAIYNH64bRtTaI/XCeAsN3W63LMuJ7VPvE45GJUkKBAI/7t8/aPBgr89nbWnjmpboLxhjDqfz2quvbopGawMhByW6bpocBvZzTXv4OuywS2dOXb5BzUqT7atWrXrx+eVZ2dkRVW1pb7fW8QkzCACMkGmaXT09ze3tnd3dpmk6nE5rI0YJCUUiqqb9TMafRXzvE43Hw5FIcnLyd99+6/f7Z82aJcmy5SjdMBL7YytJKqZMAYAzXZ02TAQIAKRpzFU2EJ853n74SEsSkZ/KGOak8rKnl91VeUeox5+Tk5OSkmIBX2K9hTG22e1JSUkZ6em5OTlulys1KcnldH67fXssGqWUdvT0xFX1l13aL6W3mgjFZovHYn969llFUebcfns4FLIU5pzrvQYmALhqyBAAONvZhTESXPB4HDFG+vbF5051OGxS0DRKJO+L2WPy7Z5P168bPXL4w/ffv+vbb3s6OzFCdpvNbrNJlBqa1tbcfPjHH9UCegUAAAQeSURBVD9cs/bxRx+bVDGlbORwXdPr6uvfeO21nOxsTdM6enq6AwHjp9v/tyemqq0dHQIgIz198e9+d7GmZsnSpQWFhdYOwVLXeoJB/KR/Xn4+yHK9v0dwAZSS1FTblCk0Jwd91GeaAEEw5ki4qcSQ2Bhu2Nh9MWxtNyQpLSPD43IBIFVX/cFgOBAAxq3deAais7IKp2X3feLMviY18sEHH9wxf37L5cvWptqmKDZFkSWJWBEoBONc0/VYPB5TVZ/X63A4nnziiVdfeWXaNdes37AhHIkkfMU5dzkcKT5fApQFYxl9+5YZxnfP/iFSNsQ5dCiy20EI9H7m1dZakmDEEciUuASFZNKVB9su1p24fLkl4I+YDBDIAvmIku1wF7l8pZ6Uga6kAodbRggDOhHu+s/T30eZsXTJU48+8YTD7Q4Fg/F4nHGO/n23Ryh1uVxul+vc2bNPPProzp07x44bt37DBkKpruuJHokLYZPljJSU3rNO+egR2qFzW2fcllLo0EGWS/q5H3gArc24+sqeDIO1pOHAp15TnJHqFkxoCEWTk7XWpq5uteFEu8cuK4hQjAQCXTBNcA4CQCTLtupYcEntoYZQoKio6KGHHpp+/fV9cnNlRbky+AFYuRSNRM6dPfv+e+999MEHmqbNmz9/1erVnHNVVXunuxBCojQrLS3hEIzxiInj1L0nn0mbmFPqLC/1xQLRpOXLqeCCI8AYgCNAoMaN4WP7OD1SezCMOKc+n2vkSPumxtq6EDAR1Y0I6GA9Tocx4hw4J7LUran5xLnnjnmvVJ18Zd+B3/72t3Tx4sHl5cOGDMnPy7fbbZyLbn/PxZqagwcOtLa2AsDAgQP/+NxzM2bO9Pf0MNP8JVjxf591rHxIBsWmkGPHOnQdhg10sUuXqGUgzgUhKB4zcgu8fYt8qsokWRJxFXt9yrCrLvzz/faOqM1OORM/Pe0CzDCVZJ8zPzt0uhpjHGKGXcJ/vbriwaFXbbxw4b/OnD109OiJI0d+JlZWVta8BQtuvfXWyRUVVJI62tsJIfgX0iegL9FcWlRXFnKaTNht9MzpznhPcNLIGso5YCwQQrrB7E7pquGZumqCbnBNiHBYyc6GpJTGLqG2d4HXSWSJKBJGQggkTA6STJN8jAPjDBMskOgKBNMk6bFhVz02avj+fbU1Ld0hZOiMmQgWV+2dMGnStu3bOYDJWCgY5Jxbffv/SVVYCrBIvL+cpDKTc2G3kdpGNfa3r61FEwIAZoqrhmcqClZ1LuXm0KJiqbhIKh0EACNef7Zz/4nuI2f9J6vUjm5BEOKAMI40tUWbLuMr6yBEMMIAqmFENM2mUAVQNrYVyC4vkXeHLgPAsKFDAePW5mZZlq06Df/fpycS6oMdhXZ73DSQAM6FzU7bmgL/DzyyFSl86Dv7AAAAAElFTkSuQmCC
// @match        http*://*.animevost.org/*
// @match        http*://*.vost.pw/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

//https://api.animevost.org/animevost/api/v0.2/GetInfo/1942
//https://api.animevost.org/v1/last?page=1&quantity=10
//animevost.org#@$#div[class^="headbg"] { background: transparent!important; } //adguard filter

function curtime() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000;
}

function addElement(name, text, parent, pos) { //name, text, parent, (before, add)
    let el = document.createElement(name);
    el.innerHTML = text;

    if(!pos)
        parent.appendChild(el);
    else
        parent.insertBefore(el, parent.firstChild);
    return el;
}

function removeDivByClass(name) {
    let item = $("div."+name);
    if(item)
        item.remove();
}

function removeDivById(name) {
    let item = $("#"+name);
    if(item)
        item.remove();
}

//console.log(document.readyState);

document.onreadystatechange = function() {
    switch (document.readyState) {
        case "loading":
            console.log("onLoading");
            break;
        case "interactive":
            //console.log(typeof jQuery !== "undefined", jQuery.fn.jquery);
            if(typeof jQuery == "undefined") {
                addElement("script", '', document.head, true).src = "//code.jquery.com/jquery-latest.js";
                console.log("Inject jQuery");
            }
            onInteractive();
            break;
        case "complete":
            onComplete();
            break;
    }
};

let onInteractive = function()
{
    console.log("onInteractive", location.host, location.href);
    let stop = false;
    if(stop) {
        window.stop();
        return;
    }

    function removeTrash() {
        $("#centerBlock").children().each(function(k,v) {
            if(v.id != "stext" && v.id != "dle-content")
                v.remove();
        });

        $("#leftBlock-1").children().each(function(k,v) {

            console.log(v.id, v.getAttribute("style"), !k, v);

            if((v.id ? v.id != "moduleLeft-1" : v.getAttribute("class") != "moduleLeft") || v.getAttribute("style") == "border:0;")
                v.remove();

            //if(v.id != "moduleLeft-1" || v.getAttribute("style") == "border:0;" || !k)
            //	v.remove();
        });

        $("#leftBlock-1").children()[0]?.remove(); // zerkalo

        removeDivById("futer");

        let funcpan = $(".functionPanel")[0];
        if(funcpan) {
            let next = null;
            while(true) {
                next = funcpan.nextElementSibling;
                if(next.tagName != "SCRIPT") {
                    console.log(next.tagName);
                    next.remove();
                } else {
                    console.log("end");
                    break;
                }
            }
        }
    }
    removeTrash();

    function nightMode()
    {
        let menuBG_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAA1CAYAAADS68GIAAABJGlDQ1BJQ0MgcHJvZmlsZQAAKJFjYGAycHRxcmUSYGDIzSspCnJ3UoiIjFJgP8/AxsDMAAaJycUFjgEBPiB2Xn5eKgMG+HaNgRFEX9YFmYUpjxdwJRcUlQDpP0BslJJanMzAwGgAZGeXlxQAxRnnANkiSdlg9gYQuygkyBnIPgJk86VD2FdA7CQI+wmIXQT0BJD9BaQ+Hcxm4gCbA2HLgNglqRUgexmc8wsqizLTM0oUDC0tLRUcU/KTUhWCK4tLUnOLFTzzkvOLCvKLEktSU4BqIe4DA0GIQlCIaQA1WmiS6G+CABQPENbnQHD4MoqdQYghQHJpURmUychkTJiPMGOOBAOD/1IGBpY/CDGTXgaGBToMDPxTEWJqhgwMAvoMDPvmAADAxk/9TmI01QAAAAlwSFlzAAALEgAACxIB0t1+/AAAA3JJREFUeJzt3U1vG1UYBeBzxxMnihUQbVWqrloQLT+sP7mbRgKyQKgVVKWElPrzshhPSQJCgKhzFT+PZMkeX0vv9ui8nim11jx79izXHCSZbV+HSSZJyvVDAAAAwD9Sk6yTzJNcbF/Lywf6az/oMoTyB0keJTn66CMCAADAfnmf5CzJywxBfZNcDehdks+SPElyb8fDAQAAwL44SvJ1hux9muRNks3lgD7L1XB+t5TyZZJPM6y5AwAAAP/dPMnbWus3SV7nj/z9PMn5GNAPkjwcvyylfFVrfVpr3fWwAAAAcFsdJrmf5H6t9bSUcpohhz9M8m23PXSS5PH2/d1a69PdzwkAAAD7oZTyZLVafb79+DjJyRjQZxla9JRShHMAAAD4yLque7JarSbZPkltDOjT8UCt9ZMbmQwAAAD2SNd1s/l8Pt7zbToG9MmlM9cfvQYAAAD8//rNZvMhl3d/exQAAAD4aGqtZXz/p7bcndsBAABg9zToAAAA0AABHQAAABpgxR0AAAAaoEEHAACABgjoAAAA0AAr7gAAANAADToAAAA0QIMOAAAADdCgAwAAQAM06AAAANAADToAAAA0QEAHAACABlhxBwAAgAZo0AEAAKABAjoAAAA0wIo7AAAANEBABwAAgAZYcQcAAIAGCOgAAADQACvuAAAA0AANOgAAADRAgw4AAAAN0KADAABAAzToAAAA0AANOgAAADRAgw4AAAAN0KADAABAAwR0AAAAaICADgAAAA3wH3QAAABogAYdAAAAGiCgAwAAQAOsuAMAAEADNOgAAADQgDGgry9dW93EIAAAALBnLmfx9bjivhivlFJ+2Ww2d3Y7EwAAAOydX7uuG/9nvhgb9IskyyQ5Ojp6cSNjAQAAwB4ppZx1XbfJkMcvxoB+nuS7JDk4OHjd9/3pTQ0IAAAAe+Asyc+Hh4fzDHn8fFxxXyb5IcmdJPdms9npu3fv3i6Xyy+SnCSZ3sS0AAAAcIsskpyXUr7PNpz3ff8qQx5fXn7M2kWSsTm/d3x8/Gq1Wv20WCym6/V6UmstOx4cAAAAbpVSSp1MJuvpdLrYhvPTDHn8ynPQN0neJHme5EGSR33fH/V9/9vOJwYAAIDb632GFfeXGcL5Jrka0LO9eL49/GOSWZLDvzgHAAAA/DurJPMMofzDzdpHvwPCe7yJsxsSRwAAAABJRU5ErkJggg==`;
        let menuRaz_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAvCAYAAADJhBvMAAABJGlDQ1BJQ0MgcHJvZmlsZQAAKJFjYGAycHRxcmUSYGDIzSspCnJ3UoiIjFJgP8/AxsDMAAaJycUFjgEBPiB2Xn5eKgMG+HaNgRFEX9YFmYUpjxdwJRcUlQDpP0BslJJanMzAwGgAZGeXlxQAxRnnANkiSdlg9gYQuygkyBnIPgJk86VD2FdA7CQI+wmIXQT0BJD9BaQ+Hcxm4gCbA2HLgNglqRUgexmc8wsqizLTM0oUDC0tLRUcU/KTUhWCK4tLUnOLFTzzkvOLCvKLEktSU4BqIe4DA0GIQlCIaQA1WmiS6G+CABQPENbnQHD4MoqdQYghQHJpURmUychkTJiPMGOOBAOD/1IGBpY/CDGTXgaGBToMDPxTEWJqhgwMAvoMDPvmAADAxk/9TmI01QAAAAlwSFlzAAALEgAACxIB0t1+/AAAACJJREFUGJVjjImJ8TUxMWFgYoCCUcbgYbAwMDD8YmBgYAAAlngDVxQgUREAAAAASUVORK5CYII=`;
        let stext_bg_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAAjCAYAAAC9zj0CAAAACXBIWXMAAAsSAAALEgHS3X78AAACAElEQVR4nO3bMY5WZRiG4ef9mAloQUOjxAVYuwLt3cf/T+Mi2MTMWYONjYnLMLEixmKMIUDDAIIOMue1GGNICJqvOj/huspTPeWdN9+p/GNZlpHk6ySfJ/k0SQcAAD5sL5L8muT73W73IEkqSZZluZvkmyQ3uvthVf3e3X9ttxMAADZ3I8nNqrqT6wPzd7vd7odaluU4yb3u/q27f+7uiySvutsFGgCAD1pVHVfVx1V1t6q+SPLtUZIvu/u8u3+8urq6SLJuvBMAAA5Cd/9RVc+TXIwxLscYX40kn3T3L+IZAADe1tf+XNf1vLufjVw/13ga8QwAAO/U3S+7+9Ho7svufr31IAAAOHBrklcjyVpVrs8AAPD/emy9AAAA3icCGgAAJghoAACYIKABAGCCgAYAgAkCGgAAJghoAACYIKABAGCCgAYAgAkCGgAAJghoAACYIKABAGCCgAYAgAkCGgAAJghoAACYIKABAGCCgAYAgAkCGgAAJghoAACYIKABAGCCgAYAgAmjqq66u7YeAgAA74PR3c+ryiUaAAD+Q1VVcv2E435V3dx4DwAAHLqjqno89vv9oyRPqup460UAAHCgxhjjoyQ//fv2+fT09LN1XW9395pk3W4bAAAcjqo6GmO8rqrz/X5/+dbPg2dnZ7e625MOAABI+uTk5NmbH/4GZuOVMZG3t0YAAAAASUVORK5CYII=`;
        let br_h2_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAACXBIWXMAAAsSAAALEgHS3X78AAAAoklEQVRIic3WQQrCMBCF4ectvEEPIgXBU/VoFYtH6RkE5XfjogtbZ8Y8cSCLJikfIclMBAgYiMUMdK9/wm35MQahB3CsIhnonoHedZ5bQ2sDl5bQ1mAz6NNSm0CRjfsaih7DDNRXEQFTAjpUEQHXCpRFStAOUCFmSfvAvJuk009W8nd7Yj9d9ntiv/H23GXPwvZ6Yq+M9hpvf61Y313VBJmKJ2ViEIKB3IYGAAAAAElFTkSuQmCC`;
        let spoiler_plus_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAAACXBIWXMAAAsSAAALEgHS3X78AAAARklEQVQYlWP8//8/AyHAwsDAQFAVC5RmxKPmPxM2QXQBbIpwWoduAozNiK6IEUkBihuJsg6bIgyfwqzDG1Ys2HQSYx15igDszwoiTR4iWwAAAABJRU5ErkJggg==`;
        let s_left_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAABJWlDQ1BJQ0MgcHJvZmlsZQAAKJFjYGAycHRxcmUSYGDIzSspCnJ3UoiIjFJgP8/AxsDMAAaJycUFjgEBPiB2Xn5eKgMqYGRg+HYNRDIwXNYFmcVAGuBKLigqAdJ/gNgoJbU4GWikAZCdXV5SABRnnANkiyRlg9kbQOyikCBnIPsIkM2XDmFfAbGTIOwnIHYR0BNA9heQ+nQwm4kDbA6ELQNil6RWgOxlcM4vqCzKTM8oUTC0tLRUcEzJT0pVCK4sLknNLVbwzEvOLyrIL0osSU0BqoW4DwwEIQpBIaYB1GihSaK/CQJQPEBYnwPB4csodgYhhgDJpUVlUCYjkzFhPsKMORIMDP5LGRhY/iDETHoZGBboMDDwT0WIqRkyMAjoMzDsmwMAwrNP/qj/MTkAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAHGSURBVFiF7ZexS1VhGIefK4JRGDgVpVAuilgg1B/QEpmrQYEUKBQIDkIZOLSJ1FhgU8sdtMUhahCS4q6RuLhHiA2uDhaIj8P5pLp14bzXe/UO5wcfnPMd3u97znteft97SiqtqLaTBqilAiyqAiyqAiyqAiyq9mPYowu4C9wGfgJ38gQ1M2O9wDNgEbgKPAV28wY3I2NDwDgwCKwCk8A3oB+4cBJgw8B94DTwDpgGOoG99HwWWMq9mnqU0aneUz+ob9URtV29pD5XN9Ub6oD6We3Iu3a9QOfVJ+pHdUG9luavq2V1x0xf03xZfRDZIwo0oM6nt59Te9Q29aa6ou75t26pvWpFPdMssBl1NWXqnHpKfZiy8j9VUtxLdSKYgBDYsno2XV9Rv9cAUt03q7eL6icDtXU4Ij5Wbw9eqicoAvYFWAYeA9tAH/AIWKsBMwNsARvAWJgsmOLq4u+2BYq/pe2iehwa7Hv/NdgXHsFgS9qw/8rqI6nM7yNpJ91XgDfNqLE8Y0h9lTI0q15O8/1mPthwu8irdWAKmCBrEhaA12QO8CPvIo38lLX0Z6P4CxjNE3QcYHWpZXv+AiyqAiyqAiyqAiyqA+ZHZ8hjP/3tAAAAAElFTkSuQmCC`;
        let s_right_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAABJWlDQ1BJQ0MgcHJvZmlsZQAAKJFjYGAycHRxcmUSYGDIzSspCnJ3UoiIjFJgP8/AxsDMAAaJycUFjgEBPiB2Xn5eKgMqYGRg+HYNRDIwXNYFmcVAGuBKLigqAdJ/gNgoJbU4GWikAZCdXV5SABRnnANkiyRlg9kbQOyikCBnIPsIkM2XDmFfAbGTIOwnIHYR0BNA9heQ+nQwm4kDbA6ELQNil6RWgOxlcM4vqCzKTM8oUTC0tLRUcEzJT0pVCK4sLknNLVbwzEvOLyrIL0osSU0BqoW4DwwEIQpBIaYB1GihSaK/CQJQPEBYnwPB4csodgYhhgDJpUVlUCYjkzFhPsKMORIMDP5LGRhY/iDETHoZGBboMDDwT0WIqRkyMAjoMzDsmwMAwrNP/qj/MTkAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAHeSURBVFiF7ZYxSJVRFMd/TwQFsSkwSkGECIIEweYIIoQGl5YXUoNQFI2pW7RI1Gro1JCDiIkOiUUN4RSR0RKNgkgRLQ2Kk/hz+K5DPB+88/zey+H7w+W73+Xe7/w437nnnJLKSVTL/waopgIsqgIsqgIsqgIsqtbA3kWgDVgF5oG/DSFKinhsF5gA+oE54DHQ1wgoiIGdBfaB+8ADYA94CUwBA3mDlQJFfBS4AtwGOsnCYDu9D5N5dBZ4mwuZWutoUz+qF9Wr6pb6XO1VW9Ub6rz6Ri2rnYFvV4zogTvqbJqvm2k7rV1O64PqtPpBHVPPNAOsQ11T+9Qh/9We+k69rrao3epk8vLT5OmGgaGOqlNpvubRWlfvqu1ql/ooeXC8kWCHsXbOLK72q8CpbqqX0rlT6mKtdurN/PX246VaN9YDNgJ8B34C41WMfQXuAReAP8AYsAR8rtlK8DdGgr/HYwR/pFYC3AQ2gQ1gIa3tAMtkFeALMAi8AM4D74Ey8Dto59gJ9pmVCXbFHBJsxGMjwBbwIz37qSxJr8ipJEXAysDDND8N3AKukV2EJ8C3PIDqAftFdotngF7gE1lh38gT6FCR7uI10E6TGsUIWFN1Ynv+AiyqAiyqAiyqAiyqA43PjIJyDBJdAAAAAElFTkSuQmCC`;
        let opisPrev_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAB6CAYAAADTcSEiAAABJGlDQ1BJQ0MgcHJvZmlsZQAAKJFjYGAycHRxcmUSYGDIzSspCnJ3UoiIjFJgP8/AxsDMAAaJycUFjgEBPiB2Xn5eKgMG+HaNgRFEX9YFmYUpjxdwJRcUlQDpP0BslJJanMzAwGgAZGeXlxQAxRnnANkiSdlg9gYQuygkyBnIPgJk86VD2FdA7CQI+wmIXQT0BJD9BaQ+Hcxm4gCbA2HLgNglqRUgexmc8wsqizLTM0oUDC0tLRUcU/KTUhWCK4tLUnOLFTzzkvOLCvKLEktSU4BqIe4DA0GIQlCIaQA1WmiS6G+CABQPENbnQHD4MoqdQYghQHJpURmUychkTJiPMGOOBAOD/1IGBpY/CDGTXgaGBToMDPxTEWJqhgwMAvoMDPvmAADAxk/9TmI01QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAuZJREFUeJztmU2IlVUYgJ/rSKum0SIcV/3IaIbQQjAZjIjAxIUgaEJYEIjS0p2blFkIuhnyBwYhhIJSkiL/wJ9pcKOUkDFKLlwWlYJUG3Xn4+KeoW/ufLc7rzpzZ/E+cLj3nvOe7zyce857zuU2VOYi87ot0I4Ui5JiUVIsSopFSbEoKRYlxaKkWJQUi5JiUVIsSopFSbEoKRYlxaKkWJQUi5JiUVIsSopFSbEoKRYlxaKkWAurgM+AK8B1YFdrQGMW/+F9GdgIbAD6gEvAV6X+c2DhbIotANYBm4FXgJvACeAC8KDEnAH+BLZXO86fAZkGsAbYUl7vAt8B3wJ3WmI3ASuBbVMe8hRnbFkZaB3QA4wBx4BfS/uzpdwun/uAcWA/MDLlaeqTlIXqR+pJ9Yb6pfqe2qjEDKoH1L/U85X6YfVntafu2Y8j84y6Vj2qXlNPqx+rfZWYV9Vd6lX1of/xYWl/Q/1bXd1unIjQ6+qQekX9Sd2jvtYye1vVs+o9p/K9Oq/Ejqkj/zdeJ5l+dYd6sUz7iPp2S8w76hH19xqZCf5Vl5b4zepv6ouPI7ZAPaRet/lVbVVfqLSvUHeX9unwaen3nHpL3dZhQtqKnVDPqQMt9e/aXMD3pymkzU3RW/oPqZdts+CnI/aPurym/kZAaIJ9lf7X1J2dpNS2Z+UoMAwMtNTvZHLWng7rgd7y/kzJdT0de7Uxnlhj486xNTZRFtvclRd8ervyfZ9gV3bKYz/a5TxWV1oz/ymnZv4lzmLmryvPO/ms/MLmWVmNGVQPGjwrZ/J28QNwnC7dLupKQ31LPaz+oo6qn6iLamI3lZnsn8kZq6PuBvsNcJHJN9g/gB3Vjt2+838NvAQcLXVdEauyCvgAeJPmujsO7K0GdEusI/mDN0qKRUmxKCkWJcWipFiUFIuSYlFSLEqKRUmxKCkWJcWipFiUFIuSYlFSLEqKRUmxKCkWJcWipFiUFIuSYlHmrNgjpladGQVGPtkAAAAASUVORK5CYII=`;
        let opisNext_night = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAB6CAYAAADTcSEiAAABJGlDQ1BJQ0MgcHJvZmlsZQAAKJFjYGAycHRxcmUSYGDIzSspCnJ3UoiIjFJgP8/AxsDMAAaJycUFjgEBPiB2Xn5eKgMG+HaNgRFEX9YFmYUpjxdwJRcUlQDpP0BslJJanMzAwGgAZGeXlxQAxRnnANkiSdlg9gYQuygkyBnIPgJk86VD2FdA7CQI+wmIXQT0BJD9BaQ+Hcxm4gCbA2HLgNglqRUgexmc8wsqizLTM0oUDC0tLRUcU/KTUhWCK4tLUnOLFTzzkvOLCvKLEktSU4BqIe4DA0GIQlCIaQA1WmiS6G+CABQPENbnQHD4MoqdQYghQHJpURmUychkTJiPMGOOBAOD/1IGBpY/CDGTXgaGBToMDPxTEWJqhgwMAvoMDPvmAADAxk/9TmI01QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAt1JREFUeJztmUtoXFUYgL8kRXARaxQx6q6S0kYhu1IE8dEaF+0yCW2tghKQuHPVQNFSV+LCPiyUdFFoF25SaJsgrRq6EasG4iNZ6cbXwp2JkNZV+7m4d+hkzCT5k8kkhf+Dw8w5c8+535w55z//ZVpUNiOtGy1QjxSLkmJRUixKikVJsSgpFiXFoqRYlBSLkmJRUixKikVJsSgpFiXFoqRYlBSLkmJRUixKikVJsSgpFiXFotx3YkeBGeAb4CSwq2lGJS11/uH9B3gL+B04BLxYto0Bl4HfNkpsBHgK2F/WHwReAQaAbuBXYBS4Dsyti5m6WOlU/1L7FvnscXVInVB/UM+oz6stdcZaVak3YwBDwBGgh+JnBOgE5ssC8AxwANgD3Cln8BLw83rNGGqbOqV+XNX2eTmTp9Xnaq5/Vb2gzqhX1TfUR1Y7Y8tdsFv9W+0p6697j7vqpDqsPl3VZ6v6pjqmfq+eV3vVBxophnpWvVG+b1Wv+H9uqZ+ph9WOqr471GPqt+pN9bja3Sixx9Q/1IGyvl2dW0Suwp/qiPpSzTgvlF9ySv1CfVt9Yi1iqIPqL+pDZf29JcSqmVbfV5+tGutRi5kdV39SP1EfXq1Ym/q1+kFZby9vulJuW2ycvTXjdqnX1NHViqG+a7GYK/UPA2IVZhYZd6c6W9u+ZYVRpQ3oA8bLejuwLxCV/gW+Aj6qae8CTgATkTjWjDU27RrWWGVX9tu4Xfmlxa7srHffZsWx72xwHFtp5N9W1acS+cddp8i/1Fl5yoVnZYvFWXnRhWdlx3IC9UojsouDwMs0KbtYLh97xyIf+9Em52PngCdZmMH2Av00KYOtJzYLDFLk9q+xiXL+YYqHkHlgEvi0fG0aSy3+DeW+e+DdcFIsSopFSbEoKRYlxaKkWJQUi5JiUVIsSopFSbEoKRYlxaKkWJQUi5JiUVIsSopFSbEoKRYlxaKkWJQUi7Jpxf4DEnUYI5Uf+aMAAAAASUVORK5CYII=`;

        let night_mode_css = `
::-webkit-scrollbar {
    width: 10px!important;
}

::-webkit-scrollbar-thumb {
    background: #1b1b1b!important;
}

body {
    background: #141414!important;
}

div.menu {
    background: url(${menuBG_night}) !important;
}

div.menu ul li a, div.menu ul li form {
    background: url(${menuRaz_night}) no-repeat right !important;
}

div#stext {
    background: url(${stext_bg_night}) no-repeat!important;
}

.menu ul#topnav li span.sar {
    background: rgba(93, 93, 93, 0.81);
}

ul#topnav li span.sar span a {
    color: #ffffff;
}


.menu ul#topnav li .sar {
    background: rgba(93, 93, 93, 0.81);
}

ul#topnav li .sar span a {
    color: #ffffff;
}


.global_search {
    background: #3c3c3c!important;
    border-color: #242424!important;
}

.global_searchCenter {
    color: #ddd!important;
}

.bbcodes {
    border-color: #232323!important;
    background: linear-gradient(to bottom, #2e2e2e 0%,#222222 100%)!important;
    color: #fff!important;
}

.bbcodes:hover {
    border-color: #232323!important;
    background: linear-gradient(to bottom, #222222 0%, #2e2e2e 100%)!important;
    color: #fff!important;
}


.interDub div.interDubBgTwo {
    background: #3b3b3b!important;
    border-color: #232323!important;
}

.interDub div.interDubBgTwo b {
    color: #b7b7b7 !important;
    border-bottom-color: #232323 !important;
}

.interDub div.interDubBgTwo p {
    color: #6f6f6f !important;
}

.interDub div.interDubBgTwo a {
    background: #232323 !important;

    color: #ffffff !important;
    text-shadow: none !important;
}

.interDub div.interDubBgTwo ul li {
    border-bottom: none !important;
}

.interDub div.interDubBgTwo h2 {
    background: #3b3b3b !important;
    border-bottom: 1px solid #232323 !important;
    text-shadow: none !important;
}

#raspisMon a, #raspisTue a, #raspisThu a, #raspisFri a, #raspisSat a, #raspisSun a, #raspisWed a, #raspisNest a {
    background: rgb(49, 49, 49) !important;
    color: rgb(173, 172, 172) !important;
}

#raspisMon a:hover, #raspisTue a:hover, #raspisThu a:hover, #raspisFri a:hover, #raspisSat a:hover, #raspisSun a:hover, #raspisWed a:hover, #raspisNest a:hover {
    background: rgb(35, 35, 35) !important;
}

#raspisNest p {
    background: rgb(208, 208, 208) !important;
    color: rgb(0, 0, 0) !important;
}


div.imgOngoing img {
    background: linear-gradient(to bottom, #464646 0%,#2d2d2d 100%)!important;
}

div.imgOngoing span {
    color: #dadada!important;
    background: rgba(0, 0, 0, 0.7)!important;
}


div#stext div, div#stext div a {
    color: #b1b1b1!important;
    text-shadow: 0 1px 0 #ffffff00!important;
}

div#stext div a:hover, div#stext div a:active {
    color: #ffffff!important;
    text-decoration: underline!important;
}

.shortstory {
    position: relative;
    width: 720px;
    /* background: #fde8cb; */
    background: -moz-linear-gradient(top,#fde8cb 0%,#fed79f 100%);
    /* background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#fde8cb),color-stop(100%,#fed79f)); */
    /* background: -webkit-linear-gradient(top,#fde8cb 0%,#fed79f 100%); */
    background: -o-linear-gradient(top,#fde8cb 0%,#fed79f 100%);
    background: -ms-linear-gradient(top,#fde8cb 0%,#fed79f 100%);
    background: linear-gradient(to bottom,#3d3d3d 0%,#373737 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fde8cb',endColorstr='#fed79f',GradientType=0);
    border-radius: 15px;
    /* -webkit-box-shadow: 0px 1px 1px 1px #cecece; */
    box-shadow: 0px 1px 1px 1px #2b2b2b;
    -o-box-shadow: 0px 1px 1px 1px #cecece;
    margin-bottom: 20px;
}

.shortstory .shortstoryHead h2 a, .shortstory .shortstoryHead h1 a {
    color: #ffffff;
}

.shortstory .shortstoryHead h2, .shortstory .shortstoryHead h1 {
    color: #ffffff;
    font-size: 17px;
    padding: 20px 58px 20px 48px;
    /* outline: 0px solid red; */
    border-bottom: 1px solid #343434;
    text-shadow: 0 1px 0 #333;
    background: url(${br_h2_night}) 2% 53% no-repeat;
}

div.staticInfo {
    position: relative;
    width: 720px;
    outline: 0px solid red;
    height: 28px;
    background: #3a3a3a;
    border-top: 1px solid #454545;
    border-bottom: 1px solid #343434;
}

div.staticInfo span, div.staticInfo span a {
    color: #fff;
    font-size: 12px;
    text-shadow: 0 1px 1px #bbbbbb;
    font-weight: bold;
}

.shortstoryContent {
    outline: 0px solid red;
    width: 696px;
    border-top: 1px solid #454545;
    border-bottom: 1px solid #303030;
    padding: 10px 12px;
    color: #ffffff;
    font-size: 14px;
    line-height: 18px;
    overflow: hidden;
}

.shortstoryContent a {
    color: #b1b1b1;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
}

.shortstoryContent a:hover {
    color: #ffffff;
    text-decoration: underline;
    font-size: 14px;
    line-height: 18px;
}

.imgRadius {
    margin-right: 12px;
    border-radius: 10px;
    /* -webkit-box-shadow: 0px 1px 1px 1px #b3b3b3; */
    box-shadow: 0px 1px 1px 1px #2b2b2b;
    -o-box-shadow: 0px 1px 1px 1px #b3b3b3;
    width: 240px;
    margin-bottom: 1px;
}

div.miniInfo {
    background: rgba(255, 0, 0, 0.5);
    color: #ffb2b2;
}

.shortstoryContent td div span {
    font-size: 11px;
    color: #a7a7a7;
}

.shortstoryFuter {
    width: 696px;
    padding: 20px 12px;
    border-top: 1px solid #454545;
    font-size: 14px;
    position: relative;
}

.shortstoryFuter form a {
    width: 86px;
    height: 24px;
    border: 1px solid #232323;
    border-radius: 7px;
    /* background: #ffca75; */
    background: -moz-linear-gradient(top,#ffca75 0%,#fca51e 100%);
    /* background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#ffca75),color-stop(100%,#fca51e)); */
    /* background: -webkit-linear-gradient(top,#ffca75 0%,#fca51e 100%); */
    background: -o-linear-gradient(top,#ffca75 0%,#fca51e 100%);
    background: -ms-linear-gradient(top,#ffca75 0%,#fca51e 100%);
    background: linear-gradient(to bottom,#2e2e2e 0%,#222222 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffca75',endColorstr='#fca51e',GradientType=0);
    color: #fff;
    font-size: 14px;
    vertical-align: top;
    display: inline-block;
    text-align: center;
    padding-top: 8px;
}

.shortstoryFuter form a:hover {
    /* background: #fca51e; */
    background: -moz-linear-gradient(top,#fca51e 0%,#ffca75 99%);
    /* background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#fca51e),color-stop(99%,#ffca75)); */
    /* background: -webkit-linear-gradient(top,#fca51e 0%,#ffca75 99%); */
    background: -o-linear-gradient(top,#fca51e 0%,#ffca75 99%);
    background: -ms-linear-gradient(top,#fca51e 0%,#ffca75 99%);
    background: linear-gradient(to bottom,#222222 0%,#2e2e2e 99%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fca51e',endColorstr='#ffca75',GradientType=0);
    cursor: pointer;
    text-decoration: none;
}

.shortstoryFuter span {
    text-shadow: 0 1px 0 #fff0;
    color: #ffffff;
}

.shortstoryFuter a {
    color: #ffffff;
}

.title_spoiler img {
    content: url(${spoiler_plus_night});
}

.title_quote, .title_spoiler {
    background: #ff0000;
    border: 1px solid #ffffff;
}

.shortstoryContent .title_spoiler a {
    color: #ffffff;
    text-decoration: none;
    font-size: 13px;
    line-height: 0;
}

.shortstoryContent .title_spoiler a:hover {
    color: #ffffff;
    text-decoration: underline;
    font-size: 13px;
    line-height: 0;
}

.scriptcode, .title_quote, .quote, .title_spoiler, .text_spoiler {
    background: #313131;
    border: 1px solid #242424;
}

#nexttime, .nexttime {
    background: #313131;
    color: #ffffff;
}


.block_4 a {
    background: linear-gradient(to bottom, #373737 0%, #222222 100%);
    box-shadow: 0px 1px 1px 1px #232323;
    color: #ffffff;
}

.block_4 span {
    background: linear-gradient(to bottom, #373737 0%, #222222 100%);
    box-shadow: 0px 1px 1px 1px #232323;
    color: #ffffff;
    text-decoration: underline;
}

fieldset.skrin {
    border: 1px solid #242424;
}

fieldset.skrin legend {
    color: #b1b1b1;
}

#stdplayer {
    border-left: 1px solid #242424;
}

a.prev {
    width: 38px;
    height: 37px;
    float: left;
    cursor: pointer;
    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, #2e2e2e 0%, #484848 100%) repeat scroll 0 0;
    border-top: 1px solid #242424;
    border-right: 1px solid #242424;
    content: url(${s_left_night});
}

a.next {
    width: 37px;
    height: 37px;
    float: left;
    cursor: pointer;
    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, #2e2e2e 0%, #484848 100%) repeat scroll 0 0;
    border-top: 1px solid #242424;
    border-right: 1px solid #242424;
    content: url(${s_right_night});
}

.epizode {
    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, #2e2e2e 0%, #484848 100%) repeat scroll 0 0;
    border-right: 1px solid #242424;
    border-top: 1px solid #242424;
    color: #ffffff;
}

.active {
    background: #404040;
    color: #a7a7a7;
}

#player2 {
    background: #000000;
    border: 1px solid #242424;
}

.functionPanel {
    border: 1px solid #242424;
    color: #ffffff;
}

.functionPanel div {
    border-right-color: #242424;
    background: linear-gradient(to bottom, #484848 0%, #2e2e2e 100%);
}


.ca-container {
    border-color: #242424;
}

div.ca-nav-prev {
    border-right-color: #242424;
    cursor: pointer;
}

div.ca-nav-prev img {
    content: url(${opisPrev_night});
}

div.ca-nav-next {
    border-left-color: #242424;
    cursor: pointer;
}

div.ca-nav-next img {
    content: url(${opisNext_night});
}

.zagolovok {
    color: #b1b1b1;
    background: #313131;
    border-bottom-color: #242424;
}

.ca-item-main {
    background: #383838;
    color: #b1b1b1;
}

.shortstoryContent #shortstoryContentTegi, #shortstoryContentTegi a {
    color: #ffffff;
}

.shortstoryContent #spoiler, .shortstoryContent #buttonLike, .shortstoryContent #shortstoryContentTegi {
    border-color: #242424;
    background: linear-gradient(to bottom, #333333 0%, #424242 100%);
}


#rulesComment {
    border-color: #242424;
    background: linear-gradient(to bottom, #343434 0%,#2b2b2b 100%);
}

#rulesComment a {
    color: #b3b3b3;
}

#rulesComment ul {
    border-top-color: #454545;
    border-bottom-color: #343434;
}

#rulesComment ul li {
    color: #9a9a9a;
}

#rulesComment .form_comment {
    border-top-color: #343434;
}

#rulesComment .form_comment div {
    color: #ffffff;
    border-top-color: #454545;
}


.commentFinal {
    border-color: #242424;
    background: #313131;
}

.commentFinalAva {
    border-right-color: #242424;
}

.commentFinalAva span a, .commentFinalAva span {
    color: #6f6f6f;
}

.commentFinalData {
    border-left-color: #242424;
    border-bottom-color: #242424;
    color: #adadad;
}

.commentFinalText {
    border-left-color: #242424;
    color: #777777;
    background: #3b3b3b;
}

.commentFinalText a {
    color: #969696;
}

.commentFinalIt {
    border-top-color: #242424;
    color: #868585;
    border-left-color: #242424;
}


.userinfo {
    background: #3b3b3b;
    border-color: #242424;
}

#newComment p, .userinfoHead {
    color: #6f6f6f;
    border-bottom-color: #242424;
}

.userinfoCenter {
    color: #6f6f6f;
}


.raspis .popup {
    border: 1px solid #454545;

    background: -moz-linear-gradient(top,#fde8cb 0%,#fed79f 100%);
    /* background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#fde8cb),color-stop(100%,#fed79f)); */
    /* background: -webkit-linear-gradient(top,#fde8cb 0%,#fed79f 100%); */
    background: -o-linear-gradient(top,#fde8cb 0%,#fed79f 100%);
    background: -ms-linear-gradient(top,#fde8cb 0%,#fed79f 100%);
    background: linear-gradient(to bottom,#3d3d3d 0%,#373737 100%);

    color: #ffffff;
    text-shadow: none;
}

.raspis .popup .cont_img img {
    box-shadow: 0px 1px 1px 1px #454545;
}
        `;

        function night_toggle(state) {
            let night_style = document.getElementById("night_mode");
            if(state) {
                if(!night_style) {
                    let night = addElement("style", "", document.head, false);
                    night.id = "night_mode";
                    night.rel = "stylesheet";
                    night.type = "text/css";
                    night.appendChild(document.createTextNode(night_mode_css));
                }
            } else {
                if(night_style) {
                    night_style.remove();
                }
            }
        }

        let stime = 20;
        let etime = 8;
        let ctime = curtime() / 3600;

        let wait  = 0;

        let s_time = stime % 24;
        let len = (etime % 24) - s_time;

        if(len < 0 || (!len && etime == 24)) {
            len = len + 24;
        }

        let dt = ctime - s_time;
        if(dt < 0) {
            dt = dt + 24;
        }

        night_toggle(dt <= len);
        setTimeout(nightMode, (dt <= len ? len - dt : 24 - len - dt) * 3600 * 1000);
    }
    nightMode();

    let beta = addElement("img", "", document.body, -1);
    beta.src = "data:image/png;base64,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";
    beta.style = "position:absolute;margin-top:1px";

    let divbottom = $(".bottomProblem")[0];
    if(divbottom) {
        divbottom.innerHTML = "[Hack by 0x00000ED]";
        divbottom.style = "cursor:pointer;width:230px;";
        divbottom.onclick = function() { window.open('http://steamcommunity.com/profiles/76561198037471455/','_blank'); };
    }

    function NewNavigation() {
        let topnav = document.getElementById("topnav");
        if(topnav) {
            removeDivByClass("topLine");

            $("#wrap").css("margin", "0");
            addElement("style", "div#wrap div.menu > ul > li > a{ padding: 14px 8px 0px 9px;!important }", document.head, false);

            let li = document.createElement('li');

            let form = document.createElement('form');
            form.setAttribute("class", "search");
            form.action = "";
            form.name   = "searchform";
            form.method = "post";
            form.style = "float:left;display:block;outline:0px solid red;height:33px;margin-top:3px;color:#fff;font-size:16px;padding:14px 0px 0px 5px;background: url(/templates/AnimeVostNext4/images/menuRaz.png) no-repeat right;";

            let input = document.createElement('input');
            input.type  = "hidden";
            input.name  = "do";
            input.value = "search";
            form.appendChild(input);

            input = document.createElement('input');
            input.type  = "hidden";
            input.name  = "subaction";
            input.value = "search";
            form.appendChild(input);

            input = document.createElement('input');
            input.setAttribute("class", "search");
            input.id           = "story";
            input.name         = "story";
            input.setAttribute("value", "Тут поиск, пользуйся, господин!");
            input.onblur       = function(){ if(this.value === '') this.value='Тут поиск, пользуйся, господин!'; };
            input.onfocus      = function(){ if(this.value == 'Тут поиск, пользуйся, господин!') this.value=''; };
            input.type         = "text";
            input.autocomplete = "off";
            input.style = "border-radius: 3px; width: 220px; height: 34px; border: 0; background-color:transparent; color: #FCFAF7; font-style: italic; font-size: 14px; /* padding: 0 41px 0px 0px; */ margin-top: -8px;float: left;"; // margin-left: 5px;
            form.appendChild(input);

            input = document.createElement('input');
            input.class = "searchButton";
            input.title = "Найти";
            input.alt   = "Найти";
            input.type  = "image";
            input.src   = "/templates/AnimeVostNext3/images/button_searchBG.png";
            input.style = "margin-top: -7px; background: url(/templates/AnimeVostNext3/images/button_search.png);";
            input.onmouseenter = function() { this.style.background = "url(/templates/AnimeVostNext3/images/button_search_hover.png)"; };
            input.onmouseleave = function() { this.style.background = "url(/templates/AnimeVostNext3/images/button_search.png)"; };
            form.appendChild(input);

            li.appendChild(form);

            console.log("ADD new serch box");
            topnav.appendChild(li);

            let a = document.getElementsByTagName('a');
            for(let i=0; i < a.length; i++) {
                if((a[i].href.indexOf("/rss.xml") > -1) || (a[i].href.indexOf("/index.php?action=mobile") > -1)) {
                    a[i].remove();
                    i--;
                }
            }
            
            let li2 = document.createElement('li');
            let a2 = document.createElement('a');
            a2.setAttribute("style", "padding:14px 1px 0 0;");
            a2.href = "http://animevost.org/rss.xml";
            a2.target = "_blank";
            a2.title = "RSS";
            let img = document.createElement('img');
            img.setAttribute("style", "margin-top:-13px;");
            img.src = "/templates/AnimeVostNext4/images/rssFF.png";
            img.alt = "rss";
            a2.appendChild(img);
            li2.appendChild(a2);
            topnav.appendChild(li2);

            console.log("ADD new RSS button");

            li2 = document.createElement('li');
            a2 = document.createElement('a');
            a2.setAttribute("style", "padding: 11px 10px 0 10px;background: none;");
            a2.href = "http://vk.com/animevostorg";
            a2.title = "Группа вконтакте";
            a2.target = "_blank";
            img = document.createElement('img');
            img.setAttribute("style", "width:27px;");
            img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsSAAALEgHS3X78AAACaklEQVRIibWVz4uOURTHP8/zvmOMjKSh8WOhFLGiJMpSkg0WLMQ/oMSK/8BCNpKFUlYsLC2YrMiKxWywkYWU0iQ/ys+Z8X4s3nNnrjvP+5ryzqnbee65557v+Z7nnnsrFWAtcAk4AowyOPkK3AMuAh9Qx9RJu/LbwUqKN6mOod4Iw7TaGTBYJ+Kq3qzUd8AGQKAaYAmTpLjvK/U7MLIEIKX8qlkaNk1StRvAOnSpE2t1Zu8Uvu3s22yfsa/q5ZykLuap5nXDWu7TtLdvZhXwBpiK75XAVqAFPAJuhX0G2A2cj3kVe6Yi1jdgI7CJ/OCpP+NozoY+rKK2Qz8M+xN1XdhQW+qrrJ/2hH1Z6GNF3OmcdirFqdCt0NdC7wdOxPcwMJTteQA8izKm/3pyQR0zZp0sk10Fu/uxdiHmlTqivg373oLVyYxxkmnUX5khUb4bm4ZC7wj7uZjXsfZJvVr4blM/FgQawXKHA0WQQ+r2jBnqUXWV8/9xufq0SDzJTBNYfnkOZ0wSQDlqu4cFu+VPMcp7thEsz+pyxq7VA7AKwDrmZ4qk/wmWO5/OANtF4IPqTucPU2J4Nvbm7PqCdWLMRraJRc7uud1DstmFJb0ScVKVZvpdL/m9dh14DBwHtgBjwE5gHFgNTAD7gDV0n6tR4PWCgOp0NGgvMRo1Nfks8BNYFqMTiXWAH1mSK4qEfy8GbM45dALNX4Z0a5Q30l9gTbd+LylBElAO0rQ2B94uHBYj/R7bvg9xDXxuyGqQkuJ+qumeJOj++EEDGnEBJlDH1Rc9uv5/JcV7qa5PzblBvR0NOjvA8UW9E/H5A/Lx8Eg127C/AAAAAElFTkSuQmCC";
            img.alt = "vkgroup";
            a2.appendChild(img);
            li2.appendChild(a2);
            //topnav.appendChild(li);

            console.log("ADD new VK button");
        }
    }
    NewNavigation();

    function Anidub_o_O() {
        let full    = 'data:image/png;base64,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';
        let mnogo   = 'data:image/png;base64,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';
        let movie   = 'data:image/png;base64,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';
        let ongoing = 'data:image/png;base64,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';
        let ova     = 'data:image/png;base64,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';
        let soon    = 'data:image/png;base64,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';
        let rating  = 'data:image/png;base64,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';

        let style =
            '.ox_sticker {float: left; position: absolute; margin-left: -27px; margin-top: -14px; width: 90px; height: 90px;} '+
            '.ox_rate_box {float: right; position: absolute; margin-left: -125px; margin-top: -3px; left: 100%;} '+
            '.ox_rate_view {background: none repeat scroll 0 0 #CD0000; border-radius: 20px; color: white; overflow: hidden; padding: 10px; text-align: center; height: 85px; font-family: Verdana; font-size: 20px;} '+
            '.ox_rate_view p {display: block; text-align: center; margin-bottom: 5px;} '+
            '.ox_rate_vot {font-size: 10px; margin-top: -3px;} '+
            '.ox_rate_col {padding-top: 7px; margin-left: 5px;} '+
            '.ox_rating {float: right; overflow: hidden; height: 20px; margin-right: 5px; } '+
            '.ox_unit-rating {list-style: none; margin: 0; padding: 0; width: 85px; height: 17px; position: relative; background: url("'+rating+'") repeat-x;} '+
            '.ox_unit-rating li.ox_current-rating {background: url("'+rating+'") 0 -34px; position: absolute; height: 17px; display: block; text-indent: -9000px; z-index: 1;}' +
            '.ox_full {background: url("'+full+'")} '+
            '.ox_mnogo {background: url("'+mnogo+'")} '+
            '.ox_movie {background: url("'+movie+'")} '+
            '.ox_ongoing {background: url("'+ongoing+'")} '+
            '.ox_ova {background: url("'+ova+'")}'+
            '.ox_soon {background: url("'+soon+'")}';
        addElement("style", style, document.head, false);

        let shortstory = document.getElementsByClassName("shortstory");
        if(shortstory && shortstory.length) {
            for(let i=0; i < shortstory.length; i++) {
                let shortstoryHead    = shortstory[i].getElementsByClassName("shortstoryHead")[0];
                let shortstoryContent = shortstory[i].getElementsByClassName("shortstoryContent")[0];

                let iframe = shortstoryContent.getElementsByTagName('iframe')[0];
                if(iframe)
                    iframe.remove();

                let h4 = shortstoryContent.getElementsByTagName('h4')[0];
                if(h4)
                    h4.remove();

                let center = shortstoryContent.getElementsByTagName('center')[0];
                if(center)
                    center.remove();

                let sticker_type = "";
                let pp = shortstoryContent.getElementsByTagName("td")[0].children[5];
                if(pp.tagName.toLowerCase() == "div")
                {
                    let p = document.createElement("p");
                    p.innerHTML = "<strong>Режиссёр: </strong><a href='javascript:'>------</a>";
                    pp.parentNode.insertBefore(p, pp);
                }

                let movie_type = shortstoryContent.innerHTML.match("<p><strong>Тип: </strong>(.*?)</p>")[1].toLowerCase();
                switch(movie_type) {
                    case "тв":
                    case "ona":
                        let headname = shortstoryHead.innerHTML;
                        let parts = headname.match("\\[(?:[0-9]+-)?([0-9]+) из? ([0-9]+)\\+?\\]");

                        if(parts) {
                            let lo = parseInt(parts[1], 10);
                            let hi = parseInt(parts[2], 10);
                            if(lo == hi)
                                sticker_type = "ox_full";
                            else if(lo > 100)
                                sticker_type = "ox_mnogo";
                            else if(lo < hi)
                                sticker_type = "ox_ongoing";
                        } else {
                            sticker_type = "ox_soon";
                        }
                        break;

                    case "тв-спэшл":
                        sticker_type = "ox_movie";
                        break;

                    case "ova":
                        sticker_type = "ox_ova";
                        break;

                    case "полнометражный фильм":
                    case "короткометражный фильм":
                        sticker_type = "ox_movie";
                        break;

                    default:
                        sticker_type = "";
                }

                let rating = shortstoryContent.innerHTML.match('<li class="current-rating" style="width:(.*?)%;">');
                if(rating) {
                    rating = parseInt(rating[1], 10);
                    let votes = parseInt(shortstoryContent.innerHTML.match('<span id="vote-num-id-.*?">(.*?)</span>')[1], 10);
                    shortstoryContent.getElementsByTagName("td")[0].children[6].innerHTML = "<br>";

                    let rate = rating / 20;
                    let bar  = 85 * rating / 100;
                    let text =
                        '<div class="ox_rate_view">'+
                        '<p style="font-size: medium;">Рейтинг</p>'+
                        '<p><b itemprop="ratingValue">'+rate+'</b>/5</p>'+
                        '<div class="ox_rate_vot" style="font-size: 10px;">Голосов:<span itemprop="ratingCount">'+votes+'</span></div>'+
                        '<div class="ox_rate_col">'+
                        '<div class="ox_rating">'+
                        '<ul class="ox_unit-rating">'+
                        '<li class="ox_current-rating" style="width:'+bar+'px;">'+bar+'</li>'+
                        '</ul>'+
                        '</div>'+
                        '</div>'+
                        '</div>';
                    let div = addElement("div", text, shortstoryContent, -1);
                    div.setAttribute("class", "ox_rate_box");
                }
                if(sticker_type !== "") {
                    let div = addElement("div", "", shortstoryContent, -1);
                    div.setAttribute("class", "ox_sticker "+sticker_type);
                }
            }
        }
        else
        {
            document.getElementById("login-btn").remove();

            let dlecontent = document.getElementById("dle-content");

            dlecontent.childNodes[2].remove();

            let post = dlecontent.getElementsByClassName("post");
            if(post && post.length)
            {
                for(let item of post)
                {
                    let shortcategori = item.getElementsByClassName("short-categori")[0];

                    let text = shortcategori.innerHTML;

                    let regexp = /<a href=.*?>(.*?)<\/a>/g;
                    let result = [];
                    let tmp = "";
                    while((tmp = regexp.exec(text)) != null) {
                        result.push(tmp[1].toLowerCase());
                    }

                    let sticker_type = "";

                    switch(result[0]) {
                        case "тв":
                        case "ona":
                            if(result[1] != "анонсы") {
                                if(result[1] != "онгоинги") {
                                    sticker_type = "ox_full";
                                } else {
                                    sticker_type = "ox_ongoing";
                                }
                            } else {
                                sticker_type = "ox_soon";
                            }
                            break;

                        case "тв-спэшл":
                            sticker_type = "ox_movie";
                            break;

                        case "ova":
                            sticker_type = "ox_ova";
                            break;

                        case "полнометражный фильм":
                        case "короткометражный фильм":
                            sticker_type = "ox_movie";
                            break;

                        default:
                            sticker_type = "";
                    }

                    if(sticker_type !== "") {
                        let div = addElement("div", "", item, -1);
                        div.setAttribute("class", "ox_sticker "+sticker_type);
                    }
                }
            }
        }
    }
    Anidub_o_O();
};

let onComplete = function()
{
    console.log("onComplete", location.host, location.href);

    if(location.href.indexOf("frame") > 0)
    {
        let button = document.getElementById('pl2');
        if(button.className.indexOf('act') == -1)
        {
            window.stop();
            button.click();
        }
    }
};