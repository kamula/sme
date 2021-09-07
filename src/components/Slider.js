import React from "react";
import { Carousel } from "react-bootstrap";


function Slider() {
  return (
    <div>
      <Carousel fade nextLabel="" prevLabel="">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.3benefitsof.com/wp-content/uploads/2013/11/farm-machinery-finance-1.png"
            alt="First slide" 
            style={{"height":"500px"}}
          />
          <Carousel.Caption>
            <h3> Farm Equipment </h3>{" "}
            <p>Farm Equipment supply</p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Second slide" 
            style={{"height":"500px"}}
          />
          <Carousel.Caption>
            <h3> Pesticides </h3>{" "}
            <p> wide range of pest control products</p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcUFBgVFRUZGRgaGyMZGxsbGx0aGxobGx0aIRsbHSEbIi0kHB0qHxobJjcmKi4xNDQ0GyM6PzozPi0zNDEBCwsLEA8QHxISHzMqJCozMzMzMzUzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABEEAACAQIEAwUGAwMLBAIDAAABAhEAAwQSITEFQVEGEyJhcTKBkaGxwSNS0RRCcgdDYnOCkqKy4fDxFTNTwiTiFlRj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAKhEAAgICAQIFBAIDAAAAAAAAAAECESExAxJBBDJRYXETIpGhFIHB0fH/2gAMAwEAAhEDEQA/APWbnOlmKG+tNGO9AX7q81+VQHK5in1G+1J8aneDuxuesgTIjlVjx9+zHQ69edK7KpcMAkEo0jpJGoPzrUNgrPEA9tArp5e1B8jttNNOHp3VxhcIUtZfLruYGnrS/jV1bhCG57OhaPFvz5E0xRLfei497VVzBGgqpdR4fTSffRqkBRTK3xvCm5iHCsviuGNYmToAdjvQ1rCPbv25zaNBkEBegM7c6tGKxSYu5lUIvduryQPGAw0Qrz9aE7RcODMGfIxfwOqsYkDRtZIACjr6UkptsePFFVkfdrcUEw1syNW9f3Wg6ctKo7uGZS1zy0GsVbLNsXLj2ikKLSIpJzJJ8feAcm/EO/5agHZeGVQQymc5OUMPyFdYg66eXnQb7mcLf+yvtbWfCxIM+o2rm4uU6lp9Bz99OV4I6XGti34WQlSSphpEAENppmJHlXVzg1zMENssGBhzl0YCVU+OZO21K5exvpv2AuKYA4dwmbMSqsTH5hMURgSSQRsGWfiKb4nhb4i4jOrAG2mYxAVgII06betd4PhBt23XKS3eZRE+LJ4gdoBkgedByVhUGPeMatb0/donDLMCNqExCNc7p8pUZYIO4k+Y3o7CYQjXfWntNiuLGuHSCKziOAF0AZmUgyIOnv61uwse6jBVllCZQj/6D/8A1bqYkTAjfNTu2IAHQV1XCHcdKGmBts7msmtTXFzl60W8GokrK0BWVrMR2Tv/ABGpagsn2v4j9qlmli8BaNzWprU1w90Luf1rN0ZIkml/C3nvZP8AOsPhFdYjHqokkKOrb+4DWkFzjlpS6pLnVmGwnmSKhPnimslocMpLRZrmIVdz8NagbG9BA6sYFVLBcduYq41qwqhlEtPhAAIHME7mmlvgFx/+5f03hV2/tN+lSfLyy8qKfShHzP8AyEYriyrOa4DHJf1pPc49mOW0Gc+WZj8qd2ezeHUyUznq5LfLb5U0tWlQQqhR0AAHypXwck/M/wADLl44eVX8lPGExt3Yd2OrtH+FZP0oqx2WYmbuKuN/RQlB8SSfpVpmuTTw8PCPuLLnm/b4AcJwq3b9lST1Zmc/FiaMmtk1zNU1oll7O7m9BYiyIiec0W/WluNtufYBI9aomTFeP4arGQygREf6zS2xbZHMsACpCx7tfdXeJuuGiYmR56RNL7ysZAJZijZQBrvoB1JpkML+KcPUAsby9D19YnXWpbHC0vpae6ywqkgEc2tqoJ9CJoPEYVZtKXMGyXuAkaXBm8J00gjauMRwW5dwuGu27xQXHS0wKSqAg/iSDrEDTz3o2BI7vcHQ3zeF5DkKuEUZtMwB/wB+dQ4nswy3FunEWsucsVgyQx59aE4bcORzcuM7o7IWmAQjQNBpHhJjz12rX7NcTFHvHLWbjXD4WkDLOQuR7O4I11ildtux0kkqHWNRi9nVFW5bNuRObN3ZMsfygoIqa52fY2kVLyq4ILPnfxCDm+ZEennS9sE7PhsSfDaTLbbMWzhi7LEHqCNd9aJx/Cb37TaYZxhiVVocgE5mzA+Ken0pUFrJJd4S1o2174SwZCZZoZxcIeCeWg06Vs8ONu6rftWYZkXuwG0zeFmkt5k+6tNwZ7mJdwxRbNxVyASWJ21n2ZeYg+VcYXhTC5iLwuIVgeEiGQNkdcu4OgjlvSyQUGoq3A84gpkLIpUmDrnzDxAnR4+FH8NuqoCd4zqzAhzIJzBh1O2U+8+VA4/hVuwBbt284Ns6Z4Zi3ckyxmD05aU34fhbdu2kSSqAqG1yxnGkRrqdTS0xrQXh7wO1w6MQBqc+x6+dN7Rg+3m8o23pdgsOjMkCBlLjUzJga9dzvR+GiFnqgn3U6JyDrLedFLSjDYNM+dXJIMxMjWmqmqRZOSO64LQfX7Vsmo3Ox6a0WwJHYOtauHStA6+6uLtwbSJ6Tr8KVvAUsk9ZNL8ZxJbftMo9Tr7hSDiXalFDDKzZWykba69OWh51OXPFayPHhlItFpwC0n977Co7+NVdyB/EY/1qkca7QuoAtuhLTmCg+HQESeZMn0iq7jce9y0MzeIuQSDrELp5CpLlk1UVXyWXAtyZ6Pc4yGMIGc9EUx8RrUHcYq5sFsqepzN8F+7CqZa7YYn2UyhV0EKABHXStv2txUH8RB5wNPTSh0dWZNv9INOOkl+y34jhFi0ufE3GeSAMxIDMdgqpqx8taXYq8FwmJVLLosv4sqoo1EKRmDeW1VDEdpb5Ks1zMyzlMRlnmKiw/GLt03FuXGZTbdiJ0nTX1p+mK0qDUnt2O/5OLoF+6zsB4NSSBuy1dsX2lw1v2ryk9F8Z/wAM15Bhb5QMwOXb/Yrl+LPtmPvNOngSULdnpWI7c2gD3dt282yovxMn5UnxHb+9Pgs2wPNyx/8AWqMcYx3j4CtDFD8o+n0rZD0R9D0Ph3b0kgX7aqsGWRsxnl4Ty99SYj+UFAfw7Lt5swX6TXmj4io2vUQdKPQH/lAuRpZQHzdj8dBQb9ucQTP4Q8oaqM9+o+9rUakfRl8aUA1whhLQo1NR3+LpB1HxpPj+JKTuPjU1yxfcX6M12CL9pL1wKoPNiT5xtQV3gRe4wDsCkQw0gHXWNZrjh2OAeREnQa9NTUj49muXoPhlQY2nLVIzXYV8clsW4DhiC7fDOLiKoBL+KSQCTrvypDwPF37Fx7hR7tlkK92rJDMI9pXIgDyE0zweJLXL7cgxGn8P/wBaj7PPa7p2uLIGcjpIUb+VV7C9wnjWBUcLFzKpuugOgky4Yx5jePQUq/kmwwW3iXuDxBSIOkQD+7zP6U/4pcJTD2wdA6INtCoZRy1GaTQ+B8NzGvlClYSBp4hbMn4/WhVKg7yKeFYpm/D3L3rbkmSY7xec+TbDnTniHEv/AJWGsQOb7GRlkR01LD4CtYDAst9TkORocMBKkpcJOvI6jTypZj7iniNiJzCySfJWd/uu9Bq0G8hmAxUX7yxoQrn+yqkfQipMAD3eJJ3Hdr7sgg0DauAYt1HNGPqDbQCPL9aM4UPHiVP5rXoR3anb0NB1QVdk2HxOa5ZYywNssRvPiSd/T5UxwikqrqCUFoS3mSxHx1ozi3Bltk3rfhW3bcFOkkNmXyEHSpezF2LSDc91bnz0P60HjYN6DVwiIQyuAAkZTyB1n0qG1iQIggwV0B8oO9IO1GCNt++tkhX0cTseXuMbeVCYS+xiWOlTlNIpHjsv9hQIIAExMelEg1TE4rl0Nwz0G9Q8T4sXQoCyzBDB9dPSh9eK0FeGky53sYinKzBSRIkxI8poduJWwuYtA2E6T6TuK834njLj5Vdy4A0nT/ZoW25dXliYjczA12pHzN5RReGS2y/YntKgLIuYsFJmNNBOnnGtUh8Tirbs6O7FhJYayPMHahrN8l2byI+IiuwSFaCQY016MstU5OT2ysIRjhIFxOKe68sSTz30/SjsU4PesR/OroOejyfkPjULrlWTALS58l5E+tDviw+fSBmVv80/GaMPYMiK1dJDeR+GjVxbnu9d+8n0lRUdt8udo3bwj0J19BUlpT3RJ53J13Ph3qncRkTuRJbqco5etCM5Jk11iHLMZ6x8KiFFCmNJNHcKgFwP/G2v93ahLoyjL7z69PdU3CT4rn9W31WmejLZDePg/tD6GhGajMV/2x6/Y0BTCHU1rNXLGuJrGJC9cM9cE1wxomOmao81YWrmihT1G6+h8J+dbtEEa258j6UQ6GN67w6xPyrzIcZ6M5i3Ke+AyQAuw0Go/wBa44dne5cCjQvJ19YmjEM3GJ5Sfh/xUvZxNHPWD82rrUaRySlbK5wokNiR/Sbnp++v3rnh1yMNdHSf8QH61DgrkW7j/maPi611acJbY8iUn/Aa64nHIdY25+Jh159+TtEjMvLl7Rrb4oH9sYAj8YoSeZFwCR5ZSB8aXcRvlLmFuXNYVbjHmZZifklZwpjcwT3ds99n+LMQPitGSzYIaofYbtpYs3BhbgIyyrHkGJn/ANqm4jwVVxVnEIC6Mht5gZIBLMJ8MRLHnz2ry7tnhycVddfz6+Wgq8/ya8RfE4d8O58NtBkI0gy255zPyoOOA3kBdMvEEk+1aCe82zFMuFXfxMZmOouKo5ezb8PyWkHaq0RicoMFbaQecgED6Uz7Lsbn7TccCWdXI/pC2QT8QaVrAyC7nbS49lrbrLkABxp6k0z4Xxu3YRGuN4biKqBRtkADT6E1SLSggEbEVzisxUCdEJIHTNE/QUJIMT16/kvW2VSrKRAIhgDGlUlldCViGUwRS7s9xdrREE5eY5Gmb3e8uM3NhIHlyrn5MnRxqjLfECntEE7BSB86lt8Usn27SGN8pKn4Deh0sBmBI1B191S8XVO6nKobNMgQTUeiiykmTXMThcxdQzn922RA+PSojjsLs2FIzHUK5P31pFZUgBx+nOpcUwtwBE9SQDRSyZrA9bDYKCRddADLKRJ12E1hv4AyxS7AhWMnXoIny2quWHzXCraqDIjY6CKFfizDRVVIMiBqD1k89KPSwdK9S44rD4F2ZWvsrEgsGMEaaDUee1R2+AYXPlTE6kBtYIIE+etVDCXEZme4SYExHtNyk1BeuZySedMosR0Xtux9stmOJB12KiD5e1tWz2OkEftIMtm1UdPJq8/FzLsaKweLcTFxxt+8fPzo1L2B/ZarvYJpkX1119g/Zqyx2CuLJ71CY8PhaAepqsWuMXyzRdcBTqScwGu2oOp2FSjtNiAdLmnQgH7UPv8ARfkNL1/Q7ufyf3//ACp7ww+1Zh+xWItloa2cyFfaIiY11XypXb7aYld2U+4j6GmWE7c33zAqDlUsdeQIHMedZyktr9m6fdA2K7HYnKAAh15OPvQFzshix/Mz6Mh+9WJe3mVQWtnXTQKf0qWz27s6ZhHllP2rPlktpgUPdfkqD9lMX/8Art8V/Wo37L4ob2H/AMJ+9X3/APOMO3NZ94+tTWu1WHbYp/eFB+Irs/wFcbf/AFHmjdncUP5h/hUL8DxI/mH/ALpr1peN2Tz08mBrteM2dtQKC8SF8T9Dx1uC4j/wP/dNaHB7/wD4n/umvZf+pWSdGYa1P+32vz0f5K9RXw+zErjQ1u26DViABUD295PKhcdbXw+lJEvIwYgRcYdDHv8A+ak4ViMlq6x0yoTJ0/NHzqFmHdGBvpHvkn5Cg76BrF5TIgBhGkkNoD1kmuhaOaQqw+HY4YfxjTqBM/DSlGPxui2o1cq08oXQD5U7uWiq2WBKmSnTR4O+/wC7SDG4Y/tFtRqYX4an710xOWex72hcNkKmSqC2fJkVid/Nt6O4HbZcFYWJRs5bybQr74LfA+VLuM2wrv6IT6m2wJ9Zpzbc28Nhl0Ey5/ukdKMvKCOxBe4DisRib1y2isjMWBNxBmhRKhZkH1Aq+9huzTYO27PAa4Q2Ua5ABopI3Op2ryy3x44LiD3ACyGAwHMFFkiec16rwntvhmwyX7j5FY5Ap1bMN1gb0HYfgqf8onDntX1vW7bGyUAZgQQpBOhEyN/SlXCscbL94mqMIYciCCPiJq2ds+0OEu2BbKtcV5IytkKMsQW1BjX00NeX8Fx+Vu7fQExryNGsBTyWbC2yFUcwIPuosqDqKVYrOLZNtvEm4/Mv6iuOFcRnwtSMcbWMGSxCkTuqkwW6gcpprwzQidDOWOYNLbHj0945a0wfiXhjIAwYGY1b1POubkR0cY6xVnKQw51DdRWENqKZWgHtgETIpPiHy3CjiPP6VNywMlkQ4y6e9ZZ0mBHLLtQuIt5wGkAxGux9/Wsa21y4wUGZPu1rMWMsJvl3PU86KQ94I7KMhzSJA0ggkeem1d4m2hlmnlqBsTE6SJHnUWEJ7wKNM/g/vV1inOdhEbiPLl9KO3RuxpbI7vMpJXMZJEawPtQdx6PZmS33ZES2YjnsAB8ifhQuHQG4oO0j/iqRusk3l4ODg7hXMFJHIyBPoNzWsApLFRuYHzrvG3Czkk68vIcgKkXwFnGhZdPKfaP1HvNZX3M6NYx1A7tTIBkt+ZjufQbD086Cmu3YDU/CoWcHUCPnRQjNO1GcGMtc/qz/AJkpbcajuCN4rn9Wf8yVmZG+IPCr6/al5uURj28I9ftS8mmYpN3lZNQith+RrGNl6wYlhs7D3momqImtQbD04ldXa4/xqQccv/8AkNLJrQah0R9DdcvU9oKnX0qHF2JWZ2HxmiXfehcVd8IHWudHTIGvqUto3nHTeKVY654XXkzD36004rci2q+h+dIsafEv8X2FXic0wvjRhbA/pz8gKUZA91HX2spzHy/DVffLNrR/G7kvYX0PpLMKF7PWi9xgAfZAJ3C+Of8A10roho557M43cBvGSDLounOO8H2p72guhEtrGqgAHoCHMaabEVVsWQ11Ik5mRvjnn5067T3JuuonwOq+UCxbPxkmjLYsNFA7Ta3m6wv+RaXnHsbaWz7KMWWNPaiZ67CmfabL3ra6hU/yLSI08NIWWy3cPxAupBOoFL+IYQ6sNxv5jr7vp6UBwnE5HA61Zs4b1oBWSTgmKzJD7rp6g1wmFUM2um6+h5e77ULiMI2otEhdwAInyOukfSnDcNvWmQXLZXOAUaQwfQbR686m/QsgjB5k1NSC4zGQKnyhAsjMeYM6dNK2qSdx5AdSfhXNLJ0RVFw4e3hX+EfSoeK4WYcct/StcGYlBO+3wpncQMpB9P8ASpR9BpFUxDi2jMsT8d+dVd3kk1bb+HyMVj09D60vv8OSZgL8/lWT6cDbEuEBzZoMLrI5HlvUyFcysSdGGaRyka/WmeGw6AZQwI5iKWcQQIxj97UeVFOzWbx2KzOSx0Ov8QO3Kg8Pbz3FXYTJI5Aan5CuLSPcIVRJ6U4vWRYtgaZ2Bk+Ua/CR8abNUBVYtxuKJYldAddPPb5UK98xXRHOhnNU0TZl1s0KPSoSCsgyNdR50TgnUPLbfes4lcV7hZTpA+Sgc/SiliwtYAiaK4WfG/8AVn6rQrUTww+Nv4D9qwpzjfZHr9qAJplxO2Qo9ftS00WKdisMc65rJomOWNQTRAg77eVdsidG9JH6VjMCmtiiXtKVJVTI5zNDAUQHr7Xj8qHua5JPP1510Gkn0rdkTlnWNfga54o6ZOwPjDy0DYAfWaV3nzFR/T+wo3iTZrjeoHpEVDbtAuOgYfQVdYOeWWQcdb8VAD7JQfET96n7IWvDiLh2RW/whm+1Le0L/wDybmvsuvyVaYcEYrgcc/S2/rLLHw1qtYIPYns2/wAWwu/htn3S36044147mKcaxiys+XdqAP8ABUGIwpF+1zi2hkf2jS7heL7y3cGpzXVeSSTIUgkk7kydfKg3ZkqFvafh6+O4ASwC89ICqJqprXo3E7AdSrNHerlSBJ8KrP1BpHf4EptqgOVxMEiCwHtTzifhRhyKsmnB3grCNBnpT7CYglSw+FLnwRQHOssJBE7R6VJgzlMGVzDSDoQR5zVLTJq0WDCcUUBSdi2X5x7vWvZ8CguW02cZB7QmRAiCdY6V4Ji0EKBlXKcwB1k6b+Ve19jOJW71nwqqOkKyqZAgaR/RjapzWqKRK32iQpeclIyMCOhVgBPn1+NLbOI8Qbfn969B7QcJXE24ByuAcrf+p6r9K8+TDOrFShBGjCNvfNc86TOmDtF04QRct5hpvTNbekUj7PkKShPLrr5yORp6p1rmupFqsR8cw3hzjTLqY6c6rP7Sz6nQee5HlV/xKggzrpFUPiGF7q4VHsnVT5dPdVGryTWMG5/Kv6/GocUQyxAPrrHlMzNbsoW135ak/QVl0L098fflShshwCpbedjH1qLjV3M4HILp8TP+/KpTbHUTQeLsGMw5TPWmi8mAHeBFDtW3fWuWaqgOBRXC8A1+4La6TqSf3VG5oSasnZpGtq13YsIX0G/xP0pJtpY2GKV5AbGFCXHtkSFYrruQDpPuphe4ZbXxWwc5GgGxnryFRM+e4zxEmffA/SmVkkGRpTxb6VYJJW6E3EuEXe70UNBmFOuxnSq6yHYiI616bhr+YgNGpj40Tjezdm77SCfzbH4jeg+SN02BQk8nlAFaK1ceJdj3XW22YD91vCfcdj8qrGMwz2zluIVPQj6dfdRTA1QEBW2Pi+XwqULAn3VGbekzToVkuCf2hyIoMIaLtiFbzFDgVgHqRjWP0qbDIef+9aHB001J58v9aKwSRJnYT12qdFmxJiTLsR+fz60Vg3RGzXGCqH3O05dATQt65vHMj61lwZkiQPGpk7bU7JCHjbTfvGf5yoMdhPBmE+yw0kT5GOU0RxK3+LdA2D/WKsmEdDw++LgBJQ5dNc2V4jzzRVHKkmS6bbBVC95ay8rSg9A0PNIOyNotbunbK4jTQwwEDruKdoIyNEZlQ/JqU9hbbFLwjws0DTchgTr6CKn1fa38FOn7l/YTxFGJwhUEhXZjppEWx8J0q44XComrpLGYMSVGhKzy5GfKq9ibq27TBFJe2wB0MhTuG1IA5yOtDP2kz2yjKQ2wbNG4Onz+VLJNxVBTSbs44hwEPigxCZC4LqrZpUQSrAeLNA5DnSvjnCEzvcVxkCk6Kyw3Ia7CswuLYXFHsydCvznSJnWrDxjCC8j5SZZTJOxzDcR57g0rbjONvtXsBJSi8Hlz3yx19OulWPs9xu9ZY91cKSBmgAzG24NVq7aZGKsCrAwQeRovBHWu2SVHNF5Pa+xvaVsSXt3ILgZlbaRsQY5/rWcaHjOpOvSRrVS7DGMUhDbq6kf2Z+1XPjyaq3I+u4/0rj5UdnExXwrEHvEI5mD+n0q2pVJW8quGmNc3TY7a1ccO0iuaZ0RJXQb8zSbjeDDppvuPWnZFA303qvG7RKaKNnYaCY56fWp1cxz8tD5b1Jxe0UfQaNrI5HnQUmZZjH18up91ZqhLCHYT0PpzpfjRlVo10Ou0fDSjWaRryHlp6aUBxW4FtkA67Hnv/wAVksmsRsa4Z65Zqy0hdgo3Jiqs1hHD8IbtwKNt2PQfrVyvIFSBoAIA8uQoPBYZbShV57n8x60RfueE0rChbh08VMk2obCpqTRPIUWawrDe2vqKsSOQPtVWD0bax5Gh1Fc3Nxt5RfjmlhlhXEiINBYvCI4gqrA8iAR86GS+GGhqdbhj51zqc4l+iMit4/skm6HJ5HUf6VXMdwd7XtIY/Muo/wBPfXp6XgTB28+ddPh0YHTWurj8SniRzz4Gso8duGRGsVH3Y6n4V6HxTs6lyTlynqv6RFV252ZugwCsV0qSeiDi1suPcgVA4cKQNzIJOumtNzZFbbCgrFFRM5FVODMGKIv4WFaAPaUj5U6S2IIqEoCcsaH7VmBJlROCdmdm3JE/EV3jsLc/Z8tuZNwAiSPzHl6R76tV+yMzabn9K4w1vuzG4PyrN2aMAFMIzBM4ykKswNipbSDy1phhsNlQQAANAR9hU123mUljpQWLa6627aAIX9mT+6JgmdtJMemtI44pDt1klv8AA0aSGys+pPtBusg71Vcf2aJPgYHoNQ2nT9KsHEeIWbaLbVmLJozT7R569NaUYHiiHF281yEgvLR4YWTMDUgj6UYqS7k5dLKtxDBOh8x8ddjVm4HxP8MJcBB2J2nbXbciaN4xbfEsWt21yA+B2m2HGsRmWWJGug570u4WhW5klA5hfEdFMyDqDyrTSkhYNxYr7TcBNx+8s5mYgApoTAH7vU76eXupRwvgty5cFsLBO5MwOs6VeXRyxcXM1xSQRByqeenl19dOdF28dh3T8Qze1zZfAQQdz1G0RuNaeM5KNMEoJys3wPga4SLjMDdHn4QCI23Mg7mnmPfvFgA6iR0B0/376r2HwjO4YMwQ+03LKBMjMd9I50YmMyYhLYcKjgyCTy6T6Ujyx1hAGJR10IGvQDT486f8Kx47pJaToCTuTVe4rfa5dS1aAzOYnc6CSfKBRtjDJYuBGcMqtmGh3A1DHYdemlTnx2iseSmW1bmmulBXrwYwDHP1pJ2n4h3LB5JAyseUg7/KpeHJ3+e4xItoIzA+1m28uY0owg0CU0zXE7aspGYeHWRy8tKS92MobSOR3j41tszXMiXFIAbnDQpiIO59PPpUejXVsnQAd48awq6wI5kkD3mqSjeSSdGJBMIug3PmfqajxuDVliBJ5fb70fjcXatNBcKjMASI0kbifT/c0Rdw9m4M6MCV1057RrOu/Sk6Q2U27wls0aR67eR866sYTu3mGJG3SmHEOIqlxlKzqY5GOun+9KEHGE2JHy067+lP0NoHUg3CBicxZiTuOQH60S7Tpr76iwVxblxQo6a6EHz32pzc4eXbKpgxv0rdFDJ2hdZTQ1OpnYTFZeYW7cbkbnkTWYRjaQu5nMJrGs7tLm2msdCszpRGHuk2O8VdSdPSuRZd1FxogakCg0ZSILBk6GIoyxjp0PLnQN5w6lrY1+Glas4Q5GuFoA6UsuJS2NHlcdDa3igzR50ztq3nVbw6RbFxWnerT2ZxIv255gkH3VP+IpMo/FUsmmnY0JcygxVl/YddqpeJaHYSdGI+ZpOXhlxpUNxcym2GNjNd6mw2JJFJLZkzR+GbLNd1Eex292HI60Nfuc51msfctQ+5oDIYuZFbUSAfjWrJ8AonCpqR1rUayNZIg7elJcZgXDZ/EVGxkirMUFQ33GUg1mgPJTcBg7d26S7lykHugDmcnaT+UQJPKdY0rn/pNoY17t9ECKfCgMqrAiJUEiYnSYkVMlwWcVmClluDIwEbllIOoPMbedddpuEYi6A0KgCa6qHcCSSByABArZIyVMIxPGBec27Ku7L4vCoEKCCSxJ8IA0nWelVTiuJdbmfKZZpB035a8qtGFx+Hw2G/AZC7qDcYHUEQMsHUAHr1pNw/CpiXFy7cRU8TBQdWggGRyBOgP61o0gN2d8FNzEFlzmy7EOMsEOsgGc2o1jSYo/h3ZBLjF3a47/uEt3aAqSpBCid1POosJ3VvEWu5L3LrhlIkhB7J1GUEqMpO9OeM8Qu4a1lt5mfaWXXxFixRQIjppoIms3nAKxkgxvGx3YtIjF7ZNtkALHSBII/dkc6D4YEYZ8QuW5MIvO2isROp9piJJ6R60J2U77ve8u23W06+2wKgmZET7RPi28qI4y9slblxBtlABOY66TEQw/WhVOhrtWGvj7OHuG6ILPbCq0ndyD4QSY039KKxHDO+sC6reNhJIIOSVgAdVgmfM+kB8H4baKsGSSVLgXGkohkA6nSYbU61xw5zh3W3ZLOLobu7cyUJU+HMDoJIOsxrQwzC7tDxNr7ph2tlS0JMgDaMxmBl578qtWNwDWsELeHZSttMx1nOw59CZ25TSbiGAWxbFu8c1xznuCcxIMZRO+nT31w/E7wS2h/7SAKuUDK4GxbLpMHl1pnhCrLC14XZt21dcz3GUu1wNI9nUKJjLMj3+dV3gmORWu3LjMuYBVLK3i9oZJiJnLuRtXfaJMtslbjKGjwqTBBIkEdPPyonG4pzZQ27moEgQNCsQI5yRJnrW2g6YLjMBN602IlBn/7cBjl8PiaCYBJgDpJo/tNxJAFa3cGcvlBABBSYyvpoBEg+gqK/eF+yLgPiKyTznnvPP6UqwmKQ2xZcMhUmA6wJYkkhtDrPv0opWB4C+JWVuIlxdHAOZjsSYED/AHzoXgtywtvJcylszEzB56T0qa0ju4sZ0KECQVmTMg+W0UVd4ALBe85RgATEbDmd42o2qoFO7C8HZw+htiCP3lJAMjbygzT7CkyfFAiJO8VXcDfttkCqNBACjUAknxQOe9GY24WuLaUwSAaVlVhEyYRTcyOSU3E8zWX0Q3NZyLpljejrDW7KjvCXu9N6mbHsFzG1A6mkAK+MM+QLa0B2G1EWkexbAMEsNVPKuMfxgB0m3oNo3pRx7HOXDGQtMl2A2HY20e7/AA3GY+0Byom9hJtJbBgEeIjlS1UcojW1ievPzpnZsv3ZDtDk6DyrMwPguFDK9vvDCian7K8QTDXlQMcrnKZOknY/GhcBl7x1cnaN96QY7DhHnxL4tDVIbEnVHu86ivLcZiwbtz+Nh8GNX3s3jDdsIW9oAA+cc68vxzfi3f6xv8xreISkkL4duLY2tvGlTJc1k1qspWdJI9yQQNqjVd6yspGEIwvQ+6mAMAEVlZQ6mFHD4qdKGxLsR4RPl9qyspHJjLQqxITJBC5sx1ZRIInQGPIelQYC417wXLjsCmWAw3BGjHeDEwCPlWVlbqZNnWF4HZdSCijKxWAFEQRuYkz61Fjli5mKg5ZQRtlMSANgNBsBWVlBSZnFB3CcIlrPfIhmBW3B1VTEkc/+KFOIOW60gu2mZz+4CCApO3OsrKzkwG+CcSYq9u5JTKIjYNJMJ091Lc6JcgoS0yrNrlHOIMefxrKyqCobX8enjY2/EV0bnOke6QDHlS/AcRaxcLiXzLkBPhNsTPh6zAn0FZWVkM4oaJw3vybt0EIBoDuxPPfYD40LicCyEWrbfhufFO6iQSR6gRWVlTU2UcERcZ4UjITbAnXQD3bUbguBWrGH8Ql3APKZ3hdDpuJisrKpGTolKKsR3eD3UMW7sIzSVAymC2oIjp0POiuL41WunXy119+vymsrKdiIiwi23dWaSVGo0g7ZZ01E1NcutfuNlcpaIhgAAAdPZG01lZSLYw/4W1qxby20CjrzPmTUGKxqznYAlYy6eITvB6VlZRbD2F1/FTdBRgCd51onFXXa2wNydNqyspQAOHxyIobKWbad9aDxGKe40Opy+lZWUyYGGYnGNkVbY0SOdZe4wLhUaqRv7q1WVkY5wlol8wbz1rvjF8XYQqPDua1WU62DpQ+7M8W7qFJ0IgD0qqY29+I56ux+LGsrKLAkj//Z"
            alt="Third slide" 
            style={{"height":"500px"}}
          />
          <Carousel.Caption>
            <h3> Livestock feed </h3>{" "}
            <p>
                Live stock feed supply
            </p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
      </Carousel>{" "}
    </div>
  );
}

export default Slider;
