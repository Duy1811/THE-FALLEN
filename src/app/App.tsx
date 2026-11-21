import { useEffect, useState } from 'react'
import type { WebGLStatus } from '../graphics/DiagnosticScene'
import { hasWebGPUApi } from '../graphics/capabilities'

type SceneComponent = typeof import('../graphics/DiagnosticScene').DiagnosticScene
type StatusInfo = { label: string; message: string }

const webglMessages: Record<WebGLStatus, StatusInfo> = {
  checking: {
    label: 'ĐANG KIỂM TRA',
    message: 'Đang kiểm tra khả năng tạo ngữ cảnh WebGL 2…',
  },
  ready: {
    label: 'SẴN SÀNG',
    message: 'WebGL 2 và trình dựng Three.js đã khởi tạo trên trình duyệt này.',
  },
  unsupported: {
    label: 'KHÔNG HỖ TRỢ',
    message: 'WebGL 2 không khả dụng. Hãy thử trình duyệt hoặc thiết bị hỗ trợ WebGL 2, bật tăng tốc đồ họa rồi tải lại trang.',
  },
  error: {
    label: 'LỖI KHỞI TẠO',
    message: 'Có WebGL 2 nhưng không khởi tạo được Three.js. Hãy tải lại trang hoặc kiểm tra cài đặt đồ họa của trình duyệt.',
  },
  lost: {
    label: 'MẤT KẾT NỐI',
    message: 'Ngữ cảnh đồ họa bị gián đoạn. Hãy tải lại trang để thử lại.',
  },
}

function App() {
  const [webglStatus, setWebglStatus] = useState<WebGLStatus>('checking')
  const [Scene, setScene] = useState<SceneComponent | null>(null)
  const webgpuDetected = typeof navigator !== 'undefined' && hasWebGPUApi(navigator)
  const webgl = webglMessages[webglStatus]

  useEffect(() => {
    let cancelled = false
    // The page and its fallback load before the heavier Three.js diagnostic bundle.
    import('../graphics/DiagnosticScene')
      .then(({ DiagnosticScene }) => {
        if (!cancelled) setScene(() => DiagnosticScene)
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          console.error('Could not load the Three.js diagnostic:', error)
          setWebglStatus('error')
        }
      })
    return () => { cancelled = true }
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Bỏ qua điều hướng</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="THE FALLEN — đầu trang">
          <span className="brand-symbol" aria-hidden="true"><span /></span>
          <span className="brand-name">THE<span>FALLEN</span></span>
        </a>
        <nav className="header-nav" aria-label="Điều hướng chính">
          <a href="#about">VỀ DỰ ÁN</a>
          <a href="#diagnostics" className="nav-highlight">KIỂM TRA THIẾT BỊ <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="eyebrow"><span className="signal-dot" /> SYSTEM ONLINE <span className="eyebrow-separator">/</span> M1 FOUNDATION</div>
            <p className="hero-pretitle">KỶ NGUYÊN SIÊU NHÂN <span aria-hidden="true">—</span> 2042</p>
            <h1 id="hero-title" aria-label="THE FALLEN"><span>THE</span><span>FALLEN<span className="title-period">.</span></span></h1>
            <p className="hero-lead">Một thế giới đang chờ được dựng nên.<br />Nền tảng bắt đầu từ đây.</p>
            <p className="hero-description">Đây là trang kiểm tra kỹ thuật cho ứng dụng web 3D. Chưa có gameplay, nhân vật hay thế giới game trong giai đoạn này.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#diagnostics">KIỂM TRA THIẾT BỊ <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#about">TÌM HIỂU M1 <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-index" aria-label="Thông tin giai đoạn">
              <div><span>GIAI ĐOẠN</span><strong>01 / 08</strong></div>
              <div><span>NỀN TẢNG</span><strong>WEBGL 2</strong></div>
              <div><span>TRẠNG THÁI</span><strong>FOUNDATION</strong></div>
            </div>
          </div>

          <div className="visual-card" aria-label="Khung chẩn đoán Three.js">
            <div className="visual-header"><span><span className="header-square" /> DIAGNOSTIC VIEW</span><span>SYS_001 / LIVE</span></div>
            <div className="visual-stage">
              {Scene ? <Scene onStatusChange={setWebglStatus} /> : <span className="visual-loading" aria-hidden="true">ĐANG TẢI ĐỒ HỌA…</span>}
              <div className="visual-grid" aria-hidden="true" />
              <span className="corner corner-tl" aria-hidden="true" />
              <span className="corner corner-tr" aria-hidden="true" />
              <span className="corner corner-bl" aria-hidden="true" />
              <span className="corner corner-br" aria-hidden="true" />
              <span className="visual-axis visual-axis-h" aria-hidden="true" />
              <span className="visual-axis visual-axis-v" aria-hidden="true" />
              <span className="stage-label stage-label-top">FIG. 001<br />RENDER TEST</span>
              <span className="stage-label stage-label-bottom">THREE.JS<br />WEBGL 2</span>
              {(webglStatus === 'unsupported' || webglStatus === 'error' || webglStatus === 'lost') && (
                <div className="visual-fallback" role="alert">
                  <span className="fallback-icon" aria-hidden="true">!</span>
                  <strong>{webgl.label}</strong>
                  <span>{webgl.message}</span>
                </div>
              )}
            </div>
            <div className="visual-footer"><span>RENDER PATH <b>// WEBGL 2</b></span><span className="visual-footer-state" data-state={webglStatus}>{webgl.label}</span></div>
          </div>
        </section>

        <section className="diagnostics section-block" id="diagnostics" aria-labelledby="diagnostics-title">
          <div className="section-intro">
            <div><p className="section-number">01 / SYSTEM CHECK</p><h2 id="diagnostics-title">KIỂM TRA <em>THIẾT BỊ</em></h2></div>
            <p>Kiểm tra trực tiếp trên trình duyệt đang mở trang này. WebGL 2 là yêu cầu bắt buộc; WebGPU không bắt buộc.</p>
          </div>
          <div className="capability-grid">
            <article className="capability-card" data-testid="webgl2-status" data-state={webglStatus} aria-live="polite">
              <div className="card-top"><span className="card-index">01 / BẮT BUỘC</span><span className="status-tag" data-state={webglStatus}><span className="status-indicator" />{webgl.label}</span></div>
              <div className="card-body"><div className="card-icon" aria-hidden="true">◎</div><h3>WebGL 2</h3><p>{webgl.message}</p></div>
              <div className="card-bottom">GRAPHICS API <span>→</span> THREE.JS RENDERER</div>
            </article>
            <article className="capability-card" data-testid="webgpu-status" data-state={webgpuDetected ? 'detected' : 'unavailable'}>
              <div className="card-top"><span className="card-index">02 / TÙY CHỌN</span><span className="status-tag status-tag-muted">{webgpuDetected ? 'PHÁT HIỆN API' : 'CHƯA PHÁT HIỆN'}</span></div>
              <div className="card-body"><div className="card-icon card-icon-muted" aria-hidden="true">◇</div><h3>WebGPU</h3><p>{webgpuDetected ? 'Trình duyệt có API WebGPU. Chưa kiểm tra adapter và không dùng WebGPU để kết xuất.' : 'Không phát hiện API WebGPU. Trang vẫn hoạt động qua WebGL 2 nếu thiết bị hỗ trợ.'}</p></div>
              <div className="card-bottom">OPTIONAL API <span>→</span> KHÔNG ẢNH HƯỞNG WEBGL 2</div>
            </article>
          </div>
          <p className="diagnostics-note"><span aria-hidden="true">✳</span> Kết quả chỉ áp dụng cho trình duyệt đang mở trang. Mô phỏng màn hình iPhone không thay thế kiểm thử Safari trên iPhone 15 Pro Max thật.</p>
        </section>

        <section className="about section-block" id="about" aria-labelledby="about-title">
          <div className="section-intro"><div><p className="section-number">02 / PROJECT FOUNDATION</p><h2 id="about-title">NỀN TẢNG <em>ĐẦU TIÊN</em></h2></div><p>M1 chỉ dựng nền tảng kỹ thuật. Trải nghiệm chơi game sẽ được phát triển ở các giai đoạn sau.</p></div>
          <div className="foundation-list">
            <div><span className="foundation-number">[ 01 ]</span><strong>Giao diện web</strong><span>React · TypeScript · Vite</span></div>
            <div><span className="foundation-number">[ 02 ]</span><strong>Đồ họa 3D</strong><span>Three.js · WebGL 2</span></div>
            <div><span className="foundation-number">[ 03 ]</span><strong>Kiểm thử</strong><span>Vitest · Playwright · CI</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>THE FALLEN <span className="footer-divider">/</span> KỶ NGUYÊN SIÊU NHÂN</span><span>PROJECT FOUNDATION — M1 <span className="footer-divider">·</span> CHƯA PHẢI BẢN GAME</span></footer>
    </div>
  )
}

export default App
